import { useState } from "react";

export default function Hero({ onOpenDemo }) {
  const [email, setEmail] = useState("");

  return (
    <section className="relative overflow-hidden pt-24 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(59,130,246,0.15),transparent)]" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 ring-1 ring-inset ring-blue-500/30">
            Boîte de formation IA pour Sales & Marketing
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Accélérez vos revenus avec l’IA, sans bla-bla
          </h1>
          <p className="mt-4 text-blue-200/90 text-lg">
            Des modules courts, des playbooks concrets, et des outils prêts à l’emploi pour vos campagnes, votre prospection et votre pipeline.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button onClick={onOpenDemo} className="inline-flex items-center justify-center rounded-xl bg-blue-500 hover:bg-blue-400 transition text-white px-5 py-3 font-medium shadow-lg shadow-blue-500/20">
              Demander une démo
            </button>
            <a href="#catalogue" className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition text-white px-5 py-3 font-medium ring-1 ring-white/20">
              Voir le catalogue
            </a>
          </div>

          <p className="mt-3 text-xs text-blue-300/60">Pas de carte requise • Contenus en français • Certificat inclus</p>
        </div>
      </div>
    </section>
  );
}
