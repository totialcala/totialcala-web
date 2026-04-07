"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function DeleteClientButton({ clientId, nom }: { clientId: string; nom: string }) {
  const router = useRouter();
  const [confirming, setConfirming] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    setLoading(true);
    const res = await fetch(`/api/admin/clients/${clientId}`, { method: "DELETE" });
    if (res.ok) {
      router.refresh();
    } else {
      const { error } = await res.json();
      alert(error ?? "Error esborrant el client");
      setLoading(false);
      setConfirming(false);
    }
  }

  if (confirming) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-xs text-slate-400">Borrar {nom}?</span>
        <button
          onClick={handleDelete}
          disabled={loading}
          className="text-xs text-red-400 hover:text-red-300 transition-colors disabled:opacity-50"
        >
          {loading ? "Esborrant..." : "Confirmar"}
        </button>
        <button
          onClick={() => setConfirming(false)}
          className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
        >
          Cancel·lar
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => setConfirming(true)}
      className="text-xs text-slate-600 hover:text-red-400 transition-colors"
    >
      Borrar
    </button>
  );
}
