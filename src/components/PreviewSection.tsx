const chapters = [
  {
    num: "01",
    title: "Comprendre ce que le jury évalue vraiment et comment fonctionnent les oraux",
    desc: "Les 3 dimensions cachées que le jury scanne à chaque question. Pourquoi la plupart des candidats répondent au mauvais niveau. Présentation des différents formats d'oraux par école et ce que chacun teste spécifiquement.",
  },
  {
    num: "02",
    title: "Construire son architecture d'argumentation",
    desc: "Le triangle stratégique qui relie qui tu es, ce que tu veux et où tu vas. 7 dimensions pour identifier ses vraies forces. Une méthode pour transformer chaque défaut en levier d'argumentation. Une méthode pour créer des passerelles entre des expériences qui semblent n'avoir aucun rapport. Comment construire un projet professionnel crédible même quand on ne sait pas encore.",
  },
  {
    num: "03",
    title: "Donner de la profondeur à chaque réponse",
    desc: "La structure en 4 niveaux qui transforme une réponse plate en argumentation mémorable. Comment passer du général à l'intime sans perdre le jury. L'art de tendre des perches stratégiques pour orienter la suite de l'entretien en sa faveur.",
  },
  {
    num: "04",
    title: "Maîtriser sa voix, son corps et ses silences face au jury",
    desc: "3 leviers concrets pour transformer sa présence orale. Pourquoi parler moins fort peut capter plus d'attention. Comment adapter son registre selon le jury en face de soi. Les erreurs de posture et de regard que le jury repère en 10 secondes.",
  },
  {
    num: "05",
    title: "Le pitch : les 2-3 premières minutes qui décident de tout",
    desc: "L'équation en 3 composantes d'un pitch qui accroche. 5 types d'ouvertures qui remplacent le « Bonjour, je m'appelle X, je viens de la prépa Y ». Comment construire une présentation structurée qui donne au jury l'envie de creuser.",
  },
  {
    num: "06",
    title: "Les 30 questions qui tombent le plus souvent, décortiquées",
    desc: "Questions déstabilisantes, questions sur le projet pro, mises en situation, culture générale. Pour chacune : ce que le jury teste réellement, la stratégie de réponse, et un exemple concret de réponse structurée en 4 niveaux.",
  },
  {
    num: "07",
    title: "S'améliorer à chaque entretien blanc et intégrer les feedbacks",
    desc: "Un scorecard de 15 critères pour évaluer chaque passage. 3 fiches de débrief structurées pour transformer les retours en axes de progression concrets. Un tracker global pour visualiser sa courbe de progression sur la durée.",
  },
];

const PreviewSection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="pill-badge mb-4 mx-auto">
            <span className="pill-dot" />
            APERÇU
          </div>
          <h2 className="text-section-title">150 pages. 8 méthodes. Un fil rouge complet.</h2>
          <p className="text-body max-w-2xl mx-auto mt-4">
            Le workbook n'est pas un livre qu'on lit et qu'on pose. C'est un outil de travail : l'étudiant écrit dedans, chapitre par chapitre, et construit son entretien de A à Z.
          </p>
        </div>

        <div className="max-w-3xl mx-auto reveal-stagger">
          {chapters.map((ch, i) => (
            <div
              key={ch.num}
              className={`flex items-start gap-6 py-6 group cursor-default ${
                i < chapters.length - 1 ? "border-b border-[var(--divider)]" : ""
              }`}
            >
              <span className="text-2xl font-light text-[var(--accent-warm)]/40 group-hover:text-[var(--accent-warm)] transition-colors w-10 flex-shrink-0">{ch.num}</span>
              <div>
                <h3 className="text-base font-medium text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-warm)] transition-colors leading-snug">{ch.title}</h3>
                <p className="text-body-sm leading-relaxed">{ch.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA intermédiaire */}
        <div className="flex flex-col items-center mt-14">
          <a href="#calendly" className="btn-cta">
            Échanger 15 min →
          </a>
          <p className="text-xs text-[var(--text-light)] mt-3">On parle de votre organisation, sans engagement.</p>
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
