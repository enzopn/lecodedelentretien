import { Boxes, Search, Eye, Compass } from "lucide-react";
import TriangleFramework from "./TriangleFramework";

const howIWork = [
  {
    icon: Boxes,
    title: "Un système, pas des conseils",
    desc: "Ma méthode est un système où chaque brique s'appuie sur la précédente. Fond, structure, forme : tout est relié. Si un seul maillon est faible, l'ensemble s'effondre.",
  },
  {
    icon: Search,
    title: "De la maïeutique, pas des réponses toutes faites",
    desc: "On part de l'étudiant : qui il est, ses aspirations, son parcours. Je pose les questions qui débloquent, je donne des outils pour structurer la réflexion, et j'apporte ma vision dans un second temps. L'étudiant repart avec un discours qui lui ressemble.",
  },
  {
    icon: Eye,
    title: "Un regard qui vient des deux côtés",
    desc: "J'ai passé mes propres entretiens avec en moyenne 18/20 dans les écoles auxquelles je suis passé. Depuis 3 ans, je suis de l'autre côté : professeur, jury, coach. Ce double regard structure tout ce que je propose.",
  },
  {
    icon: Compass,
    title: "Une préparation qui dépasse l'entretien",
    desc: "J'enseigne à décoder ce que le jury cherche derrière n'importe quelle question. Un étudiant formé avec cette méthode est préparé pour tous les jurys, toutes les écoles, et pour ses entretiens professionnels après.",
  },
];

const AccompagnementSection = () => {
  return (
    <section id="accompagnement" className="py-20 lg:py-28 bg-[var(--surface)]">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="pill-badge mb-4 mx-auto">
            <span className="pill-dot" />
            L'ACCOMPAGNEMENT
          </div>
          <h2 className="text-section-title mb-6">
            Un système intégral, adapté à chaque prépa.
          </h2>
          <p className="max-w-3xl mx-auto text-body">
            Je structure ce que la plupart des préparations aux oraux n'ont pas le temps de couvrir.
            Votre prépa continue d'organiser ses entretiens blancs, mais désormais, vos étudiants y arrivent{" "}
            <span className="text-[var(--text-primary)] font-medium">préparés</span>.
          </p>
        </div>

        {/* Comment je travaille.2x2 grid */}
        <div className="grid gap-4 md:grid-cols-2 max-w-5xl mx-auto mt-12 mb-16">
          {howIWork.map((item) => (
            <div key={item.title} className="card-finox p-5 md:p-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent-mint-bg)] border border-[var(--accent-mint)]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon size={18} className="text-[var(--accent-mint)]" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-medium text-[var(--text-primary)] mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transition vers les piliers */}
        <div className="max-w-3xl mx-auto mt-16 mb-10">
          <div className="text-center">
            <div className="pill-badge mb-4 mx-auto">
              <span className="pill-dot" />
              CONCRÈTEMENT
            </div>
            <p className="text-body max-w-2xl mx-auto">
              Cette méthode se déploie à travers trois piliers d'accompagnement.
            </p>
          </div>
        </div>

        {/* Les 3 piliers.avec photos */}
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto mb-14">
          {/* Pilier 1.Workbook */}
          <div className="card-finox p-0 overflow-hidden flex flex-col">
            <div className="h-48 overflow-hidden">
              <img src="/photo-conference.png" alt="Le Code de l'Entretien" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <p className="text-[11px] uppercase tracking-widest text-[var(--accent-warm)] font-medium mb-2">PILIER 1</p>
              <h3 className="text-lg md:text-xl font-medium text-[var(--text-primary)] mb-1 leading-snug">Le Workbook</h3>
              <p className="text-sm text-[var(--text-muted)] mb-4">150 pages de méthodologie</p>
              <p className="text-body-sm flex-1">
                Un outil de travail complet dans lequel l'étudiant écrit. Introspection guidée, construction de l'argumentaire. C'est le socle : tant que ce travail écrit n'est pas fait, rien de ce qui suit ne fonctionne.
              </p>
            </div>
          </div>

          {/* Pilier 2.Sessions collectives */}
          <div className="card-finox p-0 overflow-hidden flex flex-col">
            <div className="h-48 overflow-hidden">
              <img src="/photo-session.png" alt="Session collective" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <p className="text-[11px] uppercase tracking-widest text-[var(--accent-warm)] font-medium mb-2">PILIER 2</p>
              <h3 className="text-lg md:text-xl font-medium text-[var(--text-primary)] mb-1 leading-snug">Les sessions collectives</h3>
              <p className="text-sm text-[var(--text-muted)] mb-4">Conférences et ateliers</p>
              <p className="text-body-sm flex-1">
                Directement dans votre établissement. La méthode, les principes, les erreurs que le jury repère en 10 secondes. Vos étudiants comprennent ce qu'on attend d'eux, et surtout pourquoi.
              </p>
            </div>
          </div>

          {/* Pilier 3.Coaching individuel */}
          <div className="card-finox p-0 overflow-hidden flex flex-col">
            <div className="h-48 overflow-hidden">
              <img src="/photo-coaching.png" alt="Coaching individuel" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <p className="text-[11px] uppercase tracking-widest text-[var(--accent-warm)] font-medium mb-2">PILIER 3</p>
              <h3 className="text-lg md:text-xl font-medium text-[var(--text-primary)] mb-1 leading-snug">Le coaching individuel</h3>
              <p className="text-sm text-[var(--text-muted)] mb-4">Un effet de levier pour chaque étudiant</p>
              <p className="text-body-sm flex-1">
                Du coaching 1-1 : co-construction du discours, un travail en profondeur sur la connaissance de soi. Pour beaucoup d'étudiants, c'est le déclic.
              </p>
            </div>
          </div>
        </div>

        {/* Note entretiens blancs */}
        <div className="max-w-3xl mx-auto mb-14">
          <div className="border border-[var(--divider)] rounded-xl p-6 md:p-8">
            <p className="text-body-sm text-[var(--text-muted)] leading-relaxed">
              <span className="text-[var(--text-primary)] font-medium">Et vos entretiens blancs ?</span>{" "}
              Ils continuent. Avec vos anciens, vos parents, vos intervenants habituels.
              La différence : vos étudiants y arrivent avec un vrai travail de fond.
            </p>
          </div>
        </div>

        {/* La Méthode des 3 Temps */}
        <div className="max-w-3xl mx-auto mb-8 mt-16">
          <div className="text-center">
            <div className="pill-badge mb-4 mx-auto">
              <span className="pill-dot" />
              LA MÉTHODE
            </div>
            <h3 className="text-section-title mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}>
              La Méthode des 3 Temps
            </h3>
            <p className="text-body max-w-2xl mx-auto">
              Une méthode construite sur plus de 2 ans et +300 coachings. Trois dimensions, travaillées dans l'ordre :
            </p>
          </div>
        </div>

        {/* Le triangle */}
        <div className="max-w-3xl mx-auto mb-6">
          <TriangleFramework />
        </div>

        {/* L'équation.version légère */}
        <div className="text-center mt-10 mb-14">
          <p className="text-lg md:text-xl font-light text-[var(--text-primary)] tracking-tight">
            Entretien = <span className="text-[var(--accent-warm)] font-medium">Cohérence</span> x{" "}
            <span className="text-[var(--accent-warm)] font-medium">Profondeur</span> x{" "}
            <span className="text-[var(--accent-warm)] font-medium">Impact</span>
          </p>
          <p className="text-body-sm mt-3 max-w-xl mx-auto">
            Cohérence = le fond. Profondeur = la structure. Impact = la forme.
            Chaque dimension correspond à un outil dédié dans le workbook.
          </p>
        </div>

        {/* Stats.après la méthode */}
        <div className="max-w-3xl mx-auto mt-16 mb-10">
          <div className="flex justify-center gap-8 md:gap-14 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-light text-[var(--text-primary)] tabular-nums">+5,7 pts</p>
              <p className="text-xs md:text-sm text-[var(--text-muted)] mt-2">Progression moyenne</p>
            </div>
            <div className="w-px bg-[var(--divider)]" />
            <div>
              <p className="text-3xl md:text-4xl font-light text-[var(--text-primary)] tabular-nums">300+</p>
              <p className="text-xs md:text-sm text-[var(--text-muted)] mt-2">Étudiants accompagnés</p>
            </div>
            <div className="w-px bg-[var(--divider)]" />
            <div>
              <p className="text-3xl md:text-4xl font-light text-[var(--text-primary)] tabular-nums">4,95/5</p>
              <p className="text-xs md:text-sm text-[var(--text-muted)] mt-2">Note de satisfaction</p>
            </div>
          </div>
        </div>

        {/* Logos écoles.après les stats */}
        <div className="max-w-3xl mx-auto mb-14">
          <p className="text-center text-xs uppercase tracking-widest text-[var(--text-light)] mb-6">
            Méthode utilisée par des étudiants admis dans les meilleures écoles de commerce
          </p>
          <div className="flex justify-center items-center gap-6 md:gap-10 flex-wrap">
            {[
              { src: "/logo-hec.png", alt: "HEC Paris" },
              { src: "/logo-essec.png", alt: "ESSEC" },
              { src: "/logo-escp.png", alt: "ESCP" },
              { src: "/logo-edhec.png", alt: "EDHEC" },
              { src: "/logo-emlyon.png", alt: "emlyon" },
            ].map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-5 md:h-7 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
            <span className="text-xs text-[var(--text-light)]">et d'autres</span>
          </div>
        </div>

        {/* Closing + CTA */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base text-[var(--text-muted)] mb-8">
            Chaque prépa est différente. L'accompagnement est{" "}
            <span className="text-[var(--text-primary)] font-medium">construit sur mesure</span>, prépa par prépa, en fonction de vos besoins, de vos effectifs et de votre organisation actuelle.
          </p>
          <a href="https://calendly.com/enzo-lecodedelentretien/30min" className="btn-cta">
            Échanger 20 min →
          </a>
          <p className="text-xs text-[var(--text-light)] mt-3">On parle de votre organisation, sans engagement.</p>
        </div>
      </div>
    </section>
  );
};

export default AccompagnementSection;
