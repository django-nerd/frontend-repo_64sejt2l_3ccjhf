import { useState } from "react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

export default function DemoForm({ open, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", company: "", role: "", message: "" });
  const [status, setStatus] = useState("idle");

  if (!open) return null;

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(`${API_BASE}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "demo" }),
      });
      if (!res.ok) throw new Error("Erreur");
      setStatus("success");
      setForm({ name: "", email: "", company: "", role: "", message: "" });
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-xl rounded-2xl bg-slate-900 border border-slate-700 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold text-lg">Demander une démo</h3>
          <button onClick={onClose} className="text-blue-200 hover:text-white">✕</button>
        </div>

        {status === "success" ? (
          <div className="mt-6 text-green-300">Merci, nous revenons vers vous rapidement.</div>
        ) : (
          <form onSubmit={submit} className="mt-4 grid grid-cols-1 gap-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input required placeholder="Nom complet" className="bg-slate-800 text-white rounded-lg px-3 py-2 ring-1 ring-white/10" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
              <input required type="email" placeholder="Email professionnel" className="bg-slate-800 text-white rounded-lg px-3 py-2 ring-1 ring-white/10" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input placeholder="Entreprise" className="bg-slate-800 text-white rounded-lg px-3 py-2 ring-1 ring-white/10" value={form.company} onChange={e=>setForm({...form,company:e.target.value})} />
              <input placeholder="Rôle" className="bg-slate-800 text-white rounded-lg px-3 py-2 ring-1 ring-white/10" value={form.role} onChange={e=>setForm({...form,role:e.target.value})} />
            </div>
            <textarea placeholder="Contexte / besoins" className="bg-slate-800 text-white rounded-lg px-3 py-2 ring-1 ring-white/10" rows={3} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />
            <button disabled={status==="loading"} className="mt-2 rounded-xl bg-blue-500 hover:bg-blue-400 transition text-white px-5 py-3 font-medium">
              {status === "loading" ? "Envoi..." : "Envoyer la demande"}
            </button>
            {status === "error" && <p className="text-sm text-red-300">Une erreur est survenue. Réessayez.</p>}
          </form>
        )}
      </div>
    </div>
  );
}
