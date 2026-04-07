"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function NouDirecteForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const clientId = searchParams.get("client") ?? "";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const getValue = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement).value;

    const data = {
      client_id: getValue("client_id"),
      data: getValue("data"),
      titol: getValue("titol"),
      tipus: getValue("tipus"),
      assistents: getValue("assistents") ? Number(getValue("assistents")) : null,
      durada_min: getValue("durada_min") ? Number(getValue("durada_min")) : null,
      vod_url: getValue("vod_url") || null,
      backup_url: getValue("backup_url") || null,
      setup_notes: getValue("setup_notes") || null,
      estat: getValue("estat"),
    };

    const res = await fetch("/api/admin/directes", {
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
        <h1 className="text-xl font-semibold mb-8">Nou directe</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Field label="Client ID" name="client_id" required defaultValue={clientId} />
          <Field label="Data" name="data" type="date" required />
          <Field label="Títol" name="titol" required />

          <SelectField label="Tipus" name="tipus" required>
            <option value="lanzamiento">Llançament</option>
            <option value="corporativo">Corporatiu</option>
            <option value="webinar">Webinar</option>
          </SelectField>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Assistents" name="assistents" type="number" />
            <Field label="Durada (min)" name="durada_min" type="number" />
          </div>

          <Field label="URL VOD" name="vod_url" type="url" placeholder="https://youtube.com/..." />
          <Field label="URL Backup" name="backup_url" type="url" placeholder="https://drive.google.com/..." />

          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-slate-300">Notes de setup</label>
            <textarea
              name="setup_notes"
              rows={3}
              className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-slate-500 resize-none"
            />
          </div>

          <SelectField label="Estat" name="estat" required>
            <option value="programat">Programat</option>
            <option value="fet">Fet</option>
            <option value="cancel·lat">Cancel·lat</option>
          </SelectField>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="bg-white text-slate-950 font-medium px-5 py-2 rounded-lg hover:bg-slate-100 transition-colors disabled:opacity-50"
            >
              {loading ? "Creant..." : "Crear directe"}
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

export default function NouDirectePage() {
  return (
    <Suspense>
      <NouDirecteForm />
    </Suspense>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm text-slate-300">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-600 focus:outline-none focus:border-slate-500"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  required,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm text-slate-300">{label}</label>
      <select
        name={name}
        required={required}
        className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-slate-500"
      >
        {children}
      </select>
    </div>
  );
}
