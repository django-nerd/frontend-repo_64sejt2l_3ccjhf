export default function ModuleCard({ module }) {
  return (
    <div className="group rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-blue-500/40 p-5 transition shadow-xl shadow-black/10">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-white font-semibold text-lg">{module.title}</h3>
          <p className="mt-1 text-sm text-blue-200/80">{module.summary}</p>
        </div>
        <span className="text-xs px-2 py-1 rounded-md bg-blue-500/10 text-blue-200 ring-1 ring-blue-500/20">{module.level}</span>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-blue-300/70">
        <span className="px-2 py-1 rounded bg-white/5 ring-1 ring-white/10">{module.audience}</span>
        <span className="px-2 py-1 rounded bg-white/5 ring-1 ring-white/10">{module.duration_min} min</span>
        {module.tags?.slice(0,3).map((t) => (
          <span key={t} className="px-2 py-1 rounded bg-blue-500/10 ring-1 ring-blue-500/20 text-blue-200">{t}</span>
        ))}
      </div>
    </div>
  );
}
