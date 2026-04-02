import { BookOpen, Users, UserCheck } from "lucide-react";

const pillars = [
  {
    icon: BookOpen,
    label: "PILIER 1",
    title: "Le Workbook",
    subtitle: "150 pages de méthodologie",
    desc: "Chaque étudiant reçoit un workbook complet. Pas un livre de conseils : un outil de travail dans lequel il écrit. Introspection guidée chapitre par chapitre, construction de l'argumentaire, stratégie par école. C'est le socle : tant que ce travail écrit n'est pas fait, rien de ce qui suit ne fonctionne vraiment.",
  },
  {
    icon: Users,
    label: "PILIER 2",
    title: "Les sessions collectives",
    subtitle: "Conférences et ateliers",
    desc: "Conférences et ateliers directement dans votre établissement. La méthode des 3 Temps, les principes qui séparent un 10/20 d'un 16/20, les erreurs que le jury repère en 10 secondes. Vos étudiants comprennent ce qu'on attend d'eux — et surtout pourquoi.",
    hasBookVisual: false,
  },
  {
    icon: UserCheck,
    label: "PILIER 3",
    title: "Le coaching individuel",
    subtitle: "Là où les notes décollent",
    desc: "Du vrai coaching 1-1 : pas des conseils, mais un travail de co-construction. Je pose les questions qui font réfléchir, je tisse les liens entre parcours, personnalité et projet. L'étudiant repart avec un discours qui lui ressemble — pas une réponse formatée. C'est ce pilier qui produit le +5,7 points de moyenne.",
  },
];

const SolutionSection = () => {
  return (
    <section id="accompagnement" className="py-20 lg:py-28 bg-[var(--surface)]">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="pill-badge mb-4 mx-auto">
            <span className="pill-dot" />
            CE QUE JE PROPOSE
          </div>
          <h2 className="text-section-title mb-6">
            Un accompagnement intégral, adapté à chaque prépa
          </h2>
          <p className="max-w-3xl mx-auto text-body">
            Je prends en charge ce qui manque dans la plupart des préparations aux oraux : la méthodologie,
            le travail de fond, et l'accompagnement individualisé. Votre prépa continue d'organiser ses
            entretiens blancs avec ses intervenants habituels — mais désormais, vos étudiants y arrivent{" "}
            <span className="text-[var(--text-primary)] font-medium">préparés</span>.
          </p>
        </div>

        {/* 3 pillar cards */}
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto mt-14 mb-14">
          {pillars.map((p) => (
            <div key={p.label} className="card-finox p-6 md:p-8 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent-warm-bg)] border border-[var(--accent-warm)]/10 flex items-center justify-center mb-5">
                <p.icon size={22} className="text-[var(--accent-warm)]" />
              </div>
              <p className="text-[11px] uppercase tracking-widest text-[var(--accent-warm)] font-medium mb-2">
                {p.label}
              </p>
              <h3 className="text-lg md:text-xl font-medium text-[var(--text-primary)] mb-1 leading-snug">
                {p.title}
              </h3>
              <p className="text-sm text-[var(--text-muted)] mb-4">{p.subtitle}</p>
              <p className="text-body-sm flex-1">{p.desc}</p>
              {p.label === "PILIER 1" && (
                <div className="mt-6 flex justify-center">
                  <div className="relative w-24 h-32 rounded-sm bg-gradient-to-br from-[var(--accent-color)] to-[#0F1A2E] flex items-center justify-center shadow-lg overflow-hidden">
                    {/* Mint arc decoration */}
                    <div className="absolute -right-3 -bottom-3 w-16 h-16 rounded-full border-2 border-[var(--accent-mint)]/25" />
                    <div className="relative text-center px-3">
                      <div className="w-6 h-px bg-[var(--accent-mint)]/40 mx-auto mb-2" />
                      <p className="text-[7px] text-white/40 uppercase tracking-[0.2em] mb-1">Enzo Petit</p>
                      <p className="text-[9px] font-light text-white leading-tight">Le code<br />de l'entretien</p>
                      <div className="w-6 h-px bg-[var(--accent-mint)]/40 mx-auto mt-2" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Note about entretiens blancs */}
        <div className="max-w-3xl mx-auto mb-14">
          <div className="border border-[var(--divider)] rounded-xl p-6 md:p-8">
            <p className="text-body-sm text-[var(--text-muted)] leading-relaxed">
              <span className="text-[var(--text-primary)] font-medium">Et vos entretiens blancs ?</span>{" "}
              Ils continuent. Avec vos anciens, vos parents, vos intervenants habituels.
              La différence : vos étudiants y arrivent avec un vrai travail de fond. L'entretien blanc
              vient tester et affiner — pas tâtonner dans le vide.
            </p>
          </div>
        </div>

        {/* Closing line */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed">
            Chaque prépa est différente. L'accompagnement s'adapte : certaines ont besoin des trois piliers,
            d'autres commencent par le workbook seul.{" "}
            <span className="text-[var(--text-primary)] font-medium">On en discute ensemble.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
