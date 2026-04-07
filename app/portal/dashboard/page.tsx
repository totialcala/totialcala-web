import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { supabaseAdmin, type Directe } from "@/lib/supabase";
import { SignOutButton } from "@clerk/nextjs";
import Image from "next/image";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) redirect("/portal");

  const user = await currentUser();
  const userEmail = user?.emailAddresses?.[0]?.emailAddress;

  let { data: client } = await supabaseAdmin
    .from("clients")
    .select("id, nom, empresa")
    .eq("clerk_user_id", userId)
    .single();

  if (!client && userEmail) {
    const { data: clientByEmail } = await supabaseAdmin
      .from("clients")
      .select("id, nom, empresa")
      .eq("email", userEmail)
      .is("clerk_user_id", null)
      .single();

    if (clientByEmail) {
      await supabaseAdmin
        .from("clients")
        .update({ clerk_user_id: userId })
        .eq("id", clientByEmail.id);
      client = clientByEmail;
    }
  }

  const { data: directes } = client
    ? await supabaseAdmin
        .from("directes")
        .select("*")
        .eq("client_id", client.id)
        .order("data", { ascending: false })
    : { data: [] };

  const fets = directes?.filter((d) => d.estat === "fet").length ?? 0;

  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Header */}
      <header className="border-b border-white/5 bg-[#0F172A]/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Image
            src="/images/logo-white.png"
            alt="Toti Alcalà"
            width={110}
            height={32}
            className="object-contain"
          />
          <SignOutButton redirectUrl="/portal">
            <button className="text-sm text-white/40 hover:text-white transition-colors">
              Tancar sessió
            </button>
          </SignOutButton>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        {/* Salutació */}
        <div className="mb-10">
          <p className="text-white/40 text-sm mb-1">Portal de clients</p>
          <h1 className="text-white text-2xl font-semibold">
            Hola, {client?.nom?.split(" ")[0] ?? user?.firstName ?? "client"} 👋
          </h1>
          {client?.empresa && (
            <p className="text-white/40 text-sm mt-1">{client.empresa}</p>
          )}
        </div>

        {!client && (
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mb-8 text-amber-400 text-sm">
            El teu compte encara no té dades assignades. Contacta amb Toti.
          </div>
        )}

        {/* Stats */}
        {client && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
            <StatCard label="Directes totals" value={directes?.length ?? 0} />
            <StatCard label="Completats" value={fets} />
            <StatCard
              label="Pròxim directe"
              value={
                directes?.find((d) => d.estat === "programat")
                  ? new Date(directes.find((d) => d.estat === "programat")!.data).toLocaleDateString("ca-ES", { day: "numeric", month: "short" })
                  : "—"
              }
              small
            />
          </div>
        )}

        {/* Directes */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-white font-semibold text-lg">Els teus directes</h2>
          {directes && directes.length > 0 && (
            <span className="text-white/30 text-sm">{directes.length} sessions</span>
          )}
        </div>

        {!directes || directes.length === 0 ? (
          <div className="bg-[#1E293B] border border-white/5 rounded-xl p-10 text-center">
            <p className="text-white/30 text-sm">Encara no hi ha directes registrats.</p>
            <p className="text-white/20 text-xs mt-1">Apareixeran aquí un cop Toti els afegeixi.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {(directes as Directe[]).map((d) => (
              <DirecteCard key={d.id} directe={d} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 mt-16 py-6">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <p className="text-white/20 text-xs">© {new Date().getFullYear()} Toti Alcalà</p>
          <a
            href="https://totialcala.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/20 hover:text-white/40 text-xs transition-colors"
          >
            totialcala.com
          </a>
        </div>
      </footer>
    </div>
  );
}

function StatCard({ label, value, small }: { label: string; value: number | string; small?: boolean }) {
  return (
    <div className="bg-[#1E293B] border border-white/5 rounded-xl p-4">
      <p className="text-white/40 text-xs mb-2">{label}</p>
      <p className={`text-white font-semibold ${small ? "text-lg" : "text-2xl"}`}>{value}</p>
    </div>
  );
}

function DirecteCard({ directe: d }: { directe: Directe }) {
  const data = new Date(d.data).toLocaleDateString("ca-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const tipusLabel: Record<Directe["tipus"], string> = {
    lanzamiento: "Llançament",
    corporativo: "Corporatiu",
    webinar: "Webinar",
  };

  const estatConfig: Record<Directe["estat"], { label: string; color: string }> = {
    programat: { label: "Programat", color: "text-blue-400 bg-blue-400/10 border-blue-400/20" },
    fet: { label: "Completat", color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" },
    "cancel·lat": { label: "Cancel·lat", color: "text-red-400 bg-red-400/10 border-red-400/20" },
  };

  const estat = estatConfig[d.estat];

  return (
    <div className="bg-[#1E293B] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1 flex-wrap">
            <span
              className={`text-xs px-2 py-0.5 rounded-full border font-medium ${estat.color}`}
            >
              {estat.label}
            </span>
            <span className="text-white/30 text-xs">{tipusLabel[d.tipus]}</span>
          </div>
          <h3 className="text-white font-semibold text-base leading-snug">{d.titol}</h3>
          <p className="text-white/40 text-sm mt-0.5">
            {data}
            {d.assistents ? ` · ${d.assistents} assistents` : ""}
            {d.durada_min ? ` · ${d.durada_min} min` : ""}
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-2 shrink-0">
          {d.vod_url && (
            <a
              href={d.vod_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-lg transition-colors text-white/70 hover:text-white"
            >
              <span>▶</span> VOD
            </a>
          )}
          {d.backup_url && (
            <a
              href={d.backup_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-lg transition-colors text-white/70 hover:text-white"
            >
              <span>↓</span> Backup
            </a>
          )}
        </div>
      </div>

      {d.setup_notes && (
        <div className="mt-4 pt-4 border-t border-white/5">
          <p className="text-white/40 text-xs leading-relaxed">{d.setup_notes}</p>
        </div>
      )}
    </div>
  );
}
