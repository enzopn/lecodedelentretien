import { Boxes, Search, Eye, Compass } from "lucide-react";

const howIWork = [
  {
    icon: Boxes,
    title: "Un système intégral, pas des conseils éparpillés",
    desc: "La plupart des préparations aux oraux sont une collection de tips : \"fais du contact visuel\", \"prépare 3 qualités\", \"sois toi-même\". Ma méthode est un système où chaque brique s'appuie sur la précédente. Fond, structure, forme — tout est relié. Si un seul maillon est faible, l'ensemble s'effondre.",
  },
  {
    icon: Search,
    title: "De la maïeutique, pas des réponses toutes faites",
    desc: "Je ne mets pas des mots dans la bouche des étudiants. On part de qui ils sont, de leurs aspirations, de leur parcours. Je leur donne des frameworks pour structurer leur réflexion, je pose les questions qui débloquent — et dans un second temps, j'apporte ma vision. L'étudiant repart avec un discours qui lui ressemble — construit, pas récité.",
  },
  {
    icon: Eye,
    title: "Un regard qui vient des deux côtés",
    desc: "J'ai passé mes propres entretiens (17-18/20, top 5). Et depuis 3 ans, je suis de l'autre côté — professeur, jury, coach. Je vois ce que le jury scanne vraiment, ce qui fait décrocher un 10 et ce qui fait accrocher un 16. Ce double regard structure tout ce que je propose.",
  },
  {
    icon: Compass,
    title: "Une préparation qui dépasse l'entretien",
    desc: "Je n'enseigne pas quoi répondre à \"Quel est votre plus grand défaut ?\". J'enseigne à décoder ce que le jury cherche derrière n'importe quelle question. Un étudiant formé avec cette méthode est préparé pour tous les jurys, toutes les écoles — et pour ses entretiens professionnels après.",
  },
];

const convictions = [
  {
    title: "La carte n'est pas le territoire.",
    desc: "Chaque question du jury a deux niveaux. Le sens littéral — et ce que le jury teste vraiment. Les candidats moyens répondent au premier degré. Les excellents lisent entre les lignes.",
  },
  {
    title: "L'oral se prépare d'abord à l'écrit.",
    desc: "On ne peut pas articuler clairement ce qu'on n'a pas d'abord structuré sur papier. Tant que le travail d'introspection écrite n'est pas fait, l'entretien blanc est un exercice à l'aveugle.",
  },
  {
    title: "L'authenticité ne s'improvise pas.",
    desc: "On dit aux étudiants \"sois toi-même\". Mais l'authenticité en entretien, ça se construit : par l'introspection, par l'écrit, par le coaching. Le résultat doit paraître naturel. Le processus ne l'est pas.",
  },
  {
    title: "Pas de preuve, pas de jury.",
    desc: "\"Je suis curieux.\" \"J'aime le travail en équipe.\" N'importe qui peut le dire. Si une qualité n'est pas incarnée par un fait, une anecdote, un exemple concret — le jury passe à la suite.",
  },
  {
    title: "La différence entre un 10 et un 16, ce n'est pas le talent.",
    desc: "L'excellence orale est une compétence technique. Elle s'apprend. C'est la conviction la plus importante de cet accompagnement — et c'est celle qui libère les étudiants qui pensent qu'ils \"ne sont pas faits pour ça\".",
  },
];

const PhilosophySection = () => {
  return (
    <section id="philosophie" className="py-20 lg:py-28">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="pill-badge mb-4 mx-auto">
            <span className="pill-dot" />
            MA PHILOSOPHIE
          </div>
          <h2 className="text-section-title mb-6">
            Ce qui rend cet accompagnement différent.
          </h2>
        </div>

        {/* Partie 1 — Comment je travaille */}
        <div className="max-w-3xl mx-auto mb-6">
          <p className="text-body text-center">
            L'entretien de personnalité n'est pas une épreuve subjective où certains ont de la chance.
            C'est une discipline avec ses règles, ses structures et ses méthodes.
            C'est comme ça que je l'aborde.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto mt-12 mb-20">
          {howIWork.map((item) => (
            <div key={item.title} className="card-finox p-6 md:p-8">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent-mint-bg)] border border-[var(--accent-mint)]/15 flex items-center justify-center mb-5">
                <item.icon size={22} className="text-[var(--accent-mint)]" />
              </div>
              <h3 className="text-base md:text-lg font-medium text-[var(--text-primary)] mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-body-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Partie 2 — Les convictions derrière la méthode */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-widest text-[var(--accent-warm)] font-medium mb-4">
              Les convictions derrière la méthode
            </p>
          </div>

          {/* L'équation */}
          <div className="card-finox p-8 md:p-12 text-center mb-10" style={{ background: "linear-gradient(145deg, #0D1117 0%, #161B22 50%, #0D1117 100%)" }}>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-6">L'équation fondatrice</p>
            <p className="text-2xl md:text-3xl font-light text-white tracking-tight leading-tight">
              Entretien = <span className="text-[var(--accent-warm)]">Cohérence</span> x{" "}
              <span className="text-[var(--accent-warm)]">Profondeur</span> x{" "}
              <span className="text-[var(--accent-warm)]">Impact</span>
            </p>
            <p className="text-sm text-white/50 mt-4 max-w-lg mx-auto">
              Si un seul facteur est à zéro, le produit est à zéro.
            </p>
          </div>

          {/* Convictions */}
          <div className="space-y-4">
            {convictions.map((c, i) => (
              <div key={i} className="card-finox p-6 md:p-8">
                <div className="flex gap-5">
                  <span className="text-2xl font-light text-[var(--accent-warm)] opacity-40 flex-shrink-0 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-medium text-[var(--text-primary)] mb-2">{c.title}</h3>
                    <p className="text-body-sm">{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
