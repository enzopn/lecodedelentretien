import { Users, FileText, TrendingDown } from "lucide-react";

const painPoints = [
  {
    icon: Users,
    title: "Des intervenants de bonne volonté, sans méthodologie",
    desc: "Anciens élèves, parents, bénévoles : ils donnent les conseils qu'ils ont eux-mêmes reçus. Mais donner un conseil n'est pas coacher. Sans méthode structurée, chaque intervenant dit des choses différentes. L'étudiant reçoit des injonctions contradictoires et perd en authenticité le jour J.",
  },
  {
    icon: TrendingDown,
    title: "Le parent pauvre du concours",
    desc: "L'entretien pèse jusqu'à 50% de la note aux oraux. C'est souvent ce qui fait la différence entre un admissible qui intègre et un qui n'intègre pas. Certaines écoles viennent présenter leurs épreuves, mais savoir n'est pas savoir faire : connaître le format ne suffit pas à le réussir.",
  },
  {
    icon: FileText,
    title: "Pas de travail de fond en amont",
    desc: "Au mieux un questionnaire générique. Or un entretien oral se prépare d'abord à l'écrit : introspection, connaissance de soi, construction d'un argumentaire qui relie personnalité, projet professionnel et école visée. Sans ce travail, l'entretien blanc est un exercice à l'aveugle.",
  },
];

const ProblemSection = () => {
  return (
    <section id="constat" className="py-20 lg:py-28 bg-[#FDFBF8]">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="pill-badge mb-4 mx-auto">
            <span className="pill-dot" />
            CE QU'ON OBSERVE
          </div>
          <h2 className="text-section-title max-w-3xl mx-auto">
            Dans la majorité des prépas, la préparation aux oraux repose sur des{" "}
            <span className="text-hero-accent">bases incomplètes</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto mb-14">
          {painPoints.map((p) => (
            <div key={p.title} className="card-finox p-6 md:p-8">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent-warm-bg)] border border-[var(--accent-warm)]/10 flex items-center justify-center mb-5">
                <p.icon size={22} className="text-[var(--accent-warm)]" />
              </div>
              <h3 className="text-base md:text-lg font-medium text-[var(--text-primary)] mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-body-sm">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Concluding line */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed">
            Résultat : des étudiants qui ont bien réussi à l'écrit, mais qui n'optimisent pas leur note à l'oral.{" "}
            <span className="text-[var(--text-primary)] font-medium">
              C'est en partie ce qui plombe le taux de conversion admissibilité → admission.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
