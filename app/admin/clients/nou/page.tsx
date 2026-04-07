"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NouClientPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = {
      nom: (form.elements.namedItem("nom") as HTMLInputElement).value,
      empresa: (form.elements.namedItem("empresa") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      pla: (form.elements.namedItem("pla") as HTMLSelectElement).value,
      notes_internes: (form.elements.namedItem("notes_internes") as HTMLTextAreaElement).value || null,
    };

    const res = await fetch("/api/admin/clients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      router.push("/admin");
    } else {
      const { error: msg } = await res.json();
      setError(msg ?? "Error desconegut");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-xl mx-auto px-6 py-10">
        <h1 className="text-xl font-semibold mb-2">Nou client</h1>
        <p className="text-slate-400 text-sm mb-8">
          Es crearà el compte a Clerk i el client rebrà un email per accedir al portal.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Field label="Nom complet" name="nom" required placeholder="Maria García" />
          <Field label="Email" name="email" type="email" required placeholder="maria@empresa.com" />
          <Field label="Empresa" name="empresa" required placeholder="Empresa SL" />

          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-slate-300">Pla</label>
            <select
              name="pla"
              required
              className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-slate-500"
            >
              <option value="puntual">Puntual</option>
              <option value="recurrent">Recurrent</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-slate-300">Notes internes</label>
            <textarea
              name="notes_internes"
              rows={3}
              placeholder="Referència, context, detalls..."
              className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-600 focus:outline-none focus:border-slate-500 resize-none"
            />
          </div>

          {error && (
            <div className="bg-red-900/20 border border-red-800 rounded-lg p-3 text-red-300 text-sm">
              {error}
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="bg-white text-slate-950 font-medium px-5 py-2 rounded-lg hover:bg-slate-100 transition-colors disabled:opacity-50"
            >
              {loading ? "Creant compte..." : "Crear client"}
            </button>
            <button
              type="button"
              onClick={() => router.push("/admin")}
              className="text-slate-400 hover:text-white transition-colors px-3 py-2"
            >
              Cancel·lar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm text-slate-300">{label}</label>
      <input
        type={type} name={name} required={required} placeholder={placeholder}
        className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-600 focus:outline-none focus:border-slate-500"
      />
    </div>
  );
}
