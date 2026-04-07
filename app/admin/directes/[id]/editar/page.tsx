"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditarDirectePage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fields, setFields] = useState({
    titol: "",
    data: "",
    tipus: "lanzamiento",
    assistents: "",
    durada_min: "",
    vod_url: "",
    backup_url: "",
    setup_notes: "",
    estat: "programat",
  });

  useEffect(() => {
    fetch(`/api/admin/directes/${id}`)
      .then((r) => r.json())
      .then((d) => {
        setFields({
          titol: d.titol ?? "",
          data: d.data ?? "",
          tipus: d.tipus ?? "lanzamiento",
          assistents: d.assistents?.toString() ?? "",
          durada_min: d.durada_min?.toString() ?? "",
          vod_url: d.vod_url ?? "",
          backup_url: d.backup_url ?? "",
          setup_notes: d.setup_notes ?? "",
          estat: d.estat ?? "programat",
        });
        setLoading(false);
      })
      .catch(() => {
        setError("No s'ha pogut carregar el directe");
        setLoading(false);
      });
  }, [id]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);

    const res = await fetch(`/api/admin/directes/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...fields,
        assistents: fields.assistents ? Number(fields.assistents) : null,
        durada_min: fields.durada_min ? Number(fields.durada_min) : null,
        vod_url: fields.vod_url || null,
        backup_url: fields.backup_url || null,
        setup_notes: fields.setup_notes || null,
      }),
    });

    if (res.ok) {
      router.push("/admin");
    } else {
      const { error: msg } = await res.json();
      setError(msg ?? "Error desconegut");
      setSaving(false);
    }
  }

  if (loading) return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">Carregant...</div>;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-xl mx-auto px-6 py-10">
        <h1 className="text-xl font-semibold mb-8">Editar directe</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Field label="Títol" value={fields.titol} onChange={(v) => setFields({ ...fields, titol: v })} required />
          <Field label="Data" type="date" value={fields.data} onChange={(v) => setFields({ ...fields, data: v })} required />

          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-slate-300">Tipus</label>
            <select value={fields.tipus} onChange={(e) => setFields({ ...fields, tipus: e.target.value })}
              className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-slate-500">
              <option value="lanzamiento">Llançament</option>
              <option value="corporativo">Corporatiu</option>
              <option value="webinar">Webinar</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Assistents" type="number" value={fields.assistents} onChange={(v) => setFields({ ...fields, assistents: v })} />
            <Field label="Durada (min)" type="number" value={fields.durada_min} onChange={(v) => setFields({ ...fields, durada_min: v })} />
          </div>

          <Field label="URL VOD" type="url" value={fields.vod_url} onChange={(v) => setFields({ ...fields, vod_url: v })} placeholder="https://youtube.com/..." />
          <Field label="URL Backup" type="url" value={fields.backup_url} onChange={(v) => setFields({ ...fields, backup_url: v })} placeholder="https://drive.google.com/..." />

          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-slate-300">Notes de setup</label>
            <textarea value={fields.setup_notes} onChange={(e) => setFields({ ...fields, setup_notes: e.target.value })}
              rows={3} className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-slate-500 resize-none" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-slate-300">Estat</label>
            <select value={fields.estat} onChange={(e) => setFields({ ...fields, estat: e.target.value })}
              className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-slate-500">
              <option value="programat">Programat</option>
              <option value="fet">Fet</option>
              <option value="cancel·lat">Cancel·lat</option>
            </select>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <div className="flex gap-3 pt-2">
            <button type="submit" disabled={saving}
              className="bg-white text-slate-950 font-medium px-5 py-2 rounded-lg hover:bg-slate-100 transition-colors disabled:opacity-50">
              {saving ? "Guardant..." : "Guardar canvis"}
            </button>
            <button type="button" onClick={() => router.push("/admin")}
              className="text-slate-400 hover:text-white transition-colors px-3 py-2">
              Cancel·lar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

function Field({ label, value, onChange, type = "text", required, placeholder }: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; required?: boolean; placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm text-slate-300">{label}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)}
        required={required} placeholder={placeholder}
        className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-600 focus:outline-none focus:border-slate-500" />
    </div>
  );
}
