import { StaggerContainer, StaggerItem } from "./Animations";

const testimonials = [
  {
    quote: "L'accompagnement d'Enzo rend les choses limpides. On sait exactement quoi travailler et dans quel ordre.",
    name: "Anonyme",
    school: "ESSEC",
    logo: "/logo-essec.png",
    logoHeight: "h-10 md:h-12",
  },
  {
    quote: "Enzo a joué un rôle capital dans ma façon d'appréhender les entretiens grâce à une méthodologie performante et un coaching personnalisé extrêmement efficace.",
    name: "Rayane",
    school: "HEC Paris",
    logo: "/logo-hec.png",
  },
  {
    quote: "Coaching efficace : je te dois en partie mon intégration !",
    name: "Anonyme",
    school: "ESCP",
    logo: "/logo-escp.png",
  },
  {
    quote: "Tu m'as transformé : de 8 à 20. Ton enseignement est utile pour les entretiens mais aussi pour le restant de ma vie.",
    name: "Elie",
    school: "EDHEC",
    logo: "/logo-edhec.png",
  },
  {
    quote: "Ce qui m'a le plus aidé, c'est la pédagogie : chaque méthode est expliquée simplement, avec des exercices concrets. Le livre retranscrit exactement cette clarté.",
    name: "Mathéo",
    school: "emlyon",
    logo: "/logo-emlyon.png",
  },
  {
    quote: "Le livre pose noir sur blanc ce qu'Enzo m'a transmis en accompagnement : une méthode claire, étape par étape. J'aurais aimé l'avoir dès le début de ma prépa.",
    name: "Noé",
    school: "Skema",
    logo: "/logo-skema.png",
    logoHeight: "h-5 md:h-6",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="temoignages" className="py-20 lg:py-28 bg-[var(--surface)]">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="pill-badge mb-4 mx-auto">
            <span className="pill-dot" />
            ILS L'ONT VÉCU
          </div>
          <h2 className="text-section-title">La méthode vue par ceux qui l'ont utilisée</h2>
        </div>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <div className="card-finox flex flex-col h-full">
                <span className="text-4xl text-[var(--accent-warm)] leading-none mb-4">"</span>
                <p className="text-body-sm flex-1 mb-6">{t.quote}</p>
                <div className="border-t border-[var(--divider)] pt-4 flex items-center justify-between">
                  <p className="text-sm font-medium text-[var(--text-primary)]">{t.name}</p>
                  {t.logo ? (
                    <img src={t.logo} alt={t.school} className={`${t.logoHeight || "h-7 md:h-8"} object-contain`} />
                  ) : t.school ? (
                    <span className="text-xs text-[var(--text-muted)]">{t.school}</span>
                  ) : null}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TestimonialsSection;
