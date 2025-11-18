import { useEffect, useState } from "react";
import ModuleCard from "./ModuleCard";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

export default function Modules() {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchModules() {
      try {
        const res = await fetch(`${API_BASE}/api/modules`);
        const data = await res.json();
        setModules(data.items || []);
      } catch (e) {
        setModules([]);
      } finally {
        setLoading(false);
      }
    }
    fetchModules();
  }, []);

  return (
    <section id="catalogue" className="py-14">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-white">Catalogue</h2>
            <p className="text-sm text-blue-200/80">Des modules courts et actionnables</p>
          </div>
        </div>

        {loading ? (
          <p className="text-blue-200">Chargement…</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {modules.map((m) => (
              <ModuleCard key={m.slug} module={m} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
