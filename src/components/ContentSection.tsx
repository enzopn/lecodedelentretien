import { TrendingUp, Fingerprint, RefreshCw, ArrowUpRight } from "lucide-react";

const results = [
  {
    icon: ArrowUpRight,
    title: "Un taux de conversion admissibilité → admission en hausse",
    desc: "C'est le seul indicateur qui compte. Les étudiants accompagnés avec la méthode complète convertissent significativement mieux leurs admissibilités en admissions.",
  },
  {
    icon: RefreshCw,
    title: "Des entretiens blancs qui servent enfin",
    desc: "Vos intervenants habituels continuent à faire passer les entretiens. La différence : les étudiants arrivent avec un vrai travail de fond. L'entretien blanc vient tester, pas tâtonner.",
  },
  {
    icon: TrendingUp,
    title: "+5,7 points de progression moyenne",
    desc: "Mesurés sur 300+ coachings individuels. La méthode produit des résultats concrets et mesurables.",
  },
  {
    icon: Fingerprint,
    title: "Des étudiants authentiques, pas formatés",
    desc: "Les jurys détectent le formatage en 30 secondes. La méthode produit de l'authenticité construite — un accompagnement en profondeur, pas du récité.",
  },
];

const ContentSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-[var(--surface)]">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="pill-badge mb-4 mx-auto">
            <span className="pill-dot" />
            RÉSULTATS
          </div>
          <h2 className="text-section-title">Ce que ça change pour votre prépa</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {results.map((r, i) => (
            <div key={i} className="card-finox p-6 md:p-8">
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--accent-warm)]/15 flex items-center justify-center">
                  <r.icon size={22} className="text-[var(--accent-warm)]" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-[var(--text-primary)] mb-2">{r.title}</h3>
                  <p className="text-body-sm">{r.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
