import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { supabaseAdmin, type Client, type Directe } from "@/lib/supabase";
import { SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { DeleteClientButton } from "./components/DeleteClientButton";

const ADMIN_USER_ID = process.env.ADMIN_CLERK_USER_ID;

export default async function AdminPage() {
  const { userId } = await auth();
  if (!userId) redirect("/portal");
  if (ADMIN_USER_ID && userId !== ADMIN_USER_ID) redirect("/portal/dashboard");

  const { data: clients } = await supabaseAdmin
    .from("clients")
    .select("*")
    .order("nom");

  const { data: directes } = await supabaseAdmin
    .from("directes")
    .select("*")
    .order("data", { ascending: false });

  const directesByClient = (directes ?? []).reduce<Record<string, Directe[]>>(
    (acc, d) => {
      const list = acc[d.client_id] ?? [];
      return { ...acc, [d.client_id]: [...list, d] };
    },
    {}
  );

  const totalDirectes = directes?.length ?? 0;
  const totalFets = directes?.filter((d) => d.estat === "fet").length ?? 0;

  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Header */}
      <header className="border-b border-white/5 sticky top-0 z-10 bg-[#0F172A]/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-white.png"
              alt="Toti Alcalà"
              width={110}
              height={32}
              className="object-contain"
            />
            <span className="text-white/20 text-sm">|</span>
            <span className="text-white/40 text-sm">Admin</span>
          </div>
          <SignOutButton redirectUrl="/portal">
            <button className="text-sm text-white/40 hover:text-white transition-colors">
              Tancar sessió
            </button>
          </SignOutButton>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        {/* Stats generals */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="bg-[#1E293B] border border-white/5 rounded-xl p-4">
            <p className="text-white/40 text-xs mb-2">Clients actius</p>
            <p className="text-white text-2xl font-semibold">{clients?.length ?? 0}</p>
          </div>
          <div className="bg-[#1E293B] border border-white/5 rounded-xl p-4">
            <p className="text-white/40 text-xs mb-2">Directes totals</p>
            <p className="text-white text-2xl font-semibold">{totalDirectes}</p>
          </div>
          <div className="bg-[#1E293B] border border-white/5 rounded-xl p-4">
            <p className="text-white/40 text-xs mb-2">Completats</p>
            <p className="text-white text-2xl font-semibold">{totalFets}</p>
          </div>
        </div>

        {/* Capçalera clients */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-white font-semibold text-lg">Clients</h2>
          <Link
            href="/admin/clients/nou"
            className="bg-white text-slate-950 text-sm font-medium px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            + Nou client
          </Link>
        </div>

        {!clients || clients.length === 0 ? (
          <div className="bg-[#1E293B] border border-white/5 rounded-xl p-10 text-center">
            <p className="text-white/30 text-sm">Encara no hi ha clients.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {(clients as Client[]).map((client) => (
              <ClientCard
                key={client.id}
                client={client}
                directes={directesByClient[client.id] ?? []}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

function ClientCard({ client, directes }: { client: Client; directes: Directe[] }) {
  const fets = directes.filter((d) => d.estat === "fet").length;

  return (
    <div className="bg-[#1E293B] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <h3 className="text-white font-semibold">{client.nom}</h3>
            <span className="text-xs text-white/30 bg-white/5 px-2 py-0.5 rounded-full capitalize">
              {client.pla}
            </span>
          </div>
          <p className="text-white/40 text-sm">{client.empresa} · {client.email}</p>
          {client.notes_internes && (
            <p className="text-white/25 text-xs mt-1 italic">{client.notes_internes}</p>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <DeleteClientButton clientId={client.id} nom={client.nom} />
          <Link
            href={`/admin/directes/nou?client=${client.id}`}
            className="text-sm bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-lg transition-colors text-white/70 hover:text-white"
          >
            + Directe
          </Link>
        </div>
      </div>

      {/* Stats del client */}
      <div className="flex items-center gap-4 mb-4 text-xs text-white/30">
        <span>{directes.length} directes</span>
        {fets > 0 && <span>{fets} completats</span>}
      </div>

      {directes.length === 0 ? (
        <p className="text-white/20 text-sm">Cap directe registrat.</p>
      ) : (
        <div className="flex flex-col gap-1.5">
          {directes.map((d) => {
            const estatColor = {
              programat: "bg-blue-400",
              fet: "bg-emerald-400",
              "cancel·lat": "bg-red-400",
            }[d.estat];

            return (
              <div
                key={d.id}
                className="flex items-center gap-3 text-sm py-1.5 border-t border-white/5"
              >
                <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${estatColor}`} />
                <span className="text-white/30 w-20 shrink-0 text-xs">
                  {new Date(d.data).toLocaleDateString("ca-ES", { day: "numeric", month: "short" })}
                </span>
                <span className="text-white/70 flex-1 truncate">{d.titol}</span>
                <div className="flex gap-3 shrink-0">
                  {d.vod_url && (
                    <a href={d.vod_url} target="_blank" rel="noopener noreferrer"
                      className="text-blue-400/60 hover:text-blue-400 text-xs transition-colors">
                      VOD
                    </a>
                  )}
                  {d.backup_url && (
                    <a href={d.backup_url} target="_blank" rel="noopener noreferrer"
                      className="text-blue-400/60 hover:text-blue-400 text-xs transition-colors">
                      Backup
                    </a>
                  )}
                  <Link href={`/admin/directes/${d.id}/editar`}
                    className="text-white/25 hover:text-white text-xs transition-colors">
                    Editar
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
