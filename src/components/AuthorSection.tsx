import { SlideIn } from "./Animations";

const AuthorSection = () => {
  return (
    <section id="auteur" className="py-20 lg:py-28">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="pill-badge mb-4 mx-auto">
            <span className="pill-dot" />
            L'AUTEUR
          </div>
          <h2 className="text-section-title">Qui est derrière cette méthode</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Photo placeholder */}
          <SlideIn direction="left" className="md:w-2/5 flex justify-center">
            <div className="w-64 h-80 rounded-2xl overflow-hidden">
              <img src="/photo-enzo.png" alt="Enzo Petit" className="w-full h-full object-cover" />
            </div>
          </SlideIn>

          {/* Content */}
          <SlideIn direction="right" delay={0.15} className="md:w-3/5">
            <h3 className="text-2xl font-medium text-[var(--text-primary)] mb-1">Enzo Petit</h3>
            <p className="text-sm text-[var(--accent-color)] mb-1">
              Coach oraux, +300 étudiants préparés aux entretiens de personnalité
            </p>
            <p className="text-xs text-[var(--text-muted)] mb-4">
              Enseignant et jury dans une grande prépa parisienne (top 10)
            </p>

            <div className="flex items-center gap-4 mb-6">
              <a href="https://www.linkedin.com/in/petit-enzo" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--accent-warm)] hover:underline">LinkedIn ↗</a>
              <a href="mailto:enzo@lecodedelentretien.fr" className="text-sm text-[var(--accent-warm)] hover:underline">enzo@lecodedelentretien.fr</a>
            </div>

            <div className="text-body space-y-4 text-sm leading-relaxed">
              <p>
                L'un des rares à connaître les deux côtés de l'entretien : celui de l'élève et celui du jury.
              </p>
              <p>
                En tant qu'étudiant, il a obtenu en moyenne 18/20 à ses entretiens de personnalité et a été élu meilleur orateur de sa promotion à l'EDHEC.
              </p>
              <p>
                En tant que professeur et jury, il a vécu le même constat : des conseils génériques, des manuels sans méthode claire, aucun accompagnement structuré. Alors il a construit des méthodes, des systèmes, des outils, affinés promotion après promotion.
              </p>
              <p>
                Auteur du workbook "Le Code de l'Entretien", il y condense l'intégralité de sa méthodologie. Ce livre est né parce qu'il n'avait plus le temps d'accompagner tout le monde. Ce sont ses élèves qui lui ont demandé de mettre sa méthode à l'écrit.
              </p>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
