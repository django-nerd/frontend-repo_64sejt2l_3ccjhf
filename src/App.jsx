import { useState } from "react";
import Hero from "./components/Hero";
import Modules from "./components/Modules";
import DemoForm from "./components/DemoForm";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
        <div className="container mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-cyan-400" />
            <span className="font-semibold">Flames IA Academy</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-blue-200">
            <a href="#catalogue" className="hover:text-white">Catalogue</a>
            <a href="#contact" className="hover:text-white" onClick={(e)=>{e.preventDefault();setOpen(true);}}>Demande de démo</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero onOpenDemo={()=>setOpen(true)} />
        <Modules />

        <section className="py-16">
          <div className="container mx-auto px-6 grid md:grid-cols-3 gap-5">
            {[{
              title: "Prompts prêts à l’emploi",
              desc: "CRM, prospection, copywriting, analyse ROAS — utilisez et adaptez immédiatement.",
            },{
              title: "Atelier data léger",
              desc: "Chargez un CSV de leads/campagnes et obtenez des insights et recommandations.",
            },{
              title: "Playbooks concrets",
              desc: "Outbound, nurturing, relances, objection handling. Testés sur le terrain.",
            }].map((b)=> (
              <div key={b.title} className="rounded-2xl bg-slate-800/60 border border-slate-700/60 p-6">
                <h3 className="font-semibold">{b.title}</h3>
                <p className="mt-2 text-blue-200/90 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-10 border-t border-white/10">
        <div className="container mx-auto px-6 text-sm text-blue-300/70">
          © {new Date().getFullYear()} Flames IA Academy — Tous droits réservés.
        </div>
      </footer>

      <DemoForm open={open} onClose={()=>setOpen(false)} />
    </div>
  );
}

export default App
