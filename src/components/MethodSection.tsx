import { Target, Eye, Layers } from "lucide-react";

const cards = [
  {
    badge: "TEMPS 1",
    title: "Le Fond",
    framework: "La Triade",
    description:
      "Savoir qui on est, ce qu'on veut, et pourquoi cette école. Construire une cohérence totale entre sa personnalité, son projet professionnel et l'école visée.",
    icon: Target,
    accent: "var(--accent-color)",
  },
  {
    badge: "TEMPS 2",
    title: "La Forme",
    framework: "SVC",
    description:
      "Maîtriser ce qui fait qu'un jury écoute au lieu d'entendre. Posture, voix, regard, gestion du stress. Tout ce que le jury voit avant que l'élève ne parle.",
    icon: Eye,
    accent: "var(--accent-warm)",
  },
  {
    badge: "TEMPS 3",
    title: "La Structure",
    framework: "Pyramide Inversée",
    description:
      "Transformer chaque réponse en argumentation qui marque le jury. Du général au spécifique, avec des preuves et des perches tendues.",
    icon: Layers,
    accent: "var(--accent-color)",
  },
];

const TriangleFramework = () => {
  return (
    <div className="flex justify-center my-10 md:my-14">
      <div className="relative w-full max-w-[580px] aspect-[600/560] rounded-2xl overflow-hidden" style={{ background: "linear-gradient(145deg, #0D1117 0%, #161B22 50%, #0D1117 100%)" }}>
        <svg viewBox="0 0 600 560" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arrowG" viewBox="0 0 10 7" refX="9" refY="3.5" markerWidth="8" markerHeight="6" orient="auto">
              <path d="M 0 0.5 L 9 3.5 L 0 6.5 z" fill="#C8985E" opacity="0.7" />
            </marker>
            {/* Subtle glow for node areas */}
            <radialGradient id="glowTop" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C8985E" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#C8985E" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="glowBL" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C8985E" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#C8985E" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="glowBR" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C8985E" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#C8985E" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* ============================================ */}
          {/* LAYER 1: Node glow areas                     */}
          {/* ============================================ */}
          <ellipse cx="300" cy="80" rx="100" ry="80" fill="url(#glowTop)" />
          <ellipse cx="110" cy="445" rx="100" ry="80" fill="url(#glowBL)" />
          <ellipse cx="490" cy="445" rx="100" ry="80" fill="url(#glowBR)" />

          {/* ============================================ */}
          {/* LAYER 2: Outer orbital curves with textPath  */}
          {/* ============================================ */}

          {/* Top → Right : "Cohérence" */}
          <path
            id="curveRight"
            d="M 370,105 C 530,60 590,250 510,405"
            fill="none" stroke="#C8985E" strokeWidth="1" opacity="0.35"
            markerEnd="url(#arrowG)"
          />
          <text fill="#C8985E" fontSize="11" fontWeight="300" opacity="0.55" fontStyle="italic">
            <textPath href="#curveRight" startOffset="35%" textAnchor="middle">Cohérence</textPath>
          </text>

          {/* Right → Left : "Impact" */}
          <path
            id="curveBottom"
            d="M 470,495 C 400,555 200,555 130,495"
            fill="none" stroke="#C8985E" strokeWidth="1" opacity="0.35"
            markerEnd="url(#arrowG)"
          />
          <text fill="#C8985E" fontSize="11" fontWeight="300" opacity="0.55" fontStyle="italic">
            <textPath href="#curveBottom" startOffset="50%" textAnchor="middle">Impact</textPath>
          </text>

          {/* Left → Top : "Authenticité" */}
          <path
            id="curveLeft"
            d="M 90,405 C 10,250 70,60 230,105"
            fill="none" stroke="#C8985E" strokeWidth="1" opacity="0.35"
            markerEnd="url(#arrowG)"
          />
          <text fill="#C8985E" fontSize="11" fontWeight="300" opacity="0.55" fontStyle="italic">
            <textPath href="#curveLeft" startOffset="45%" textAnchor="middle">Authenticité</textPath>
          </text>

          {/* ============================================ */}
          {/* LAYER 3: Inner triangle                      */}
          {/* ============================================ */}
          <polygon
            points="300,155 165,385 435,385"
            fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2"
          />
          {/* Subtle triangle fill */}
          <polygon
            points="300,155 165,385 435,385"
            fill="rgba(255,255,255,0.02)"
          />

          {/* ============================================ */}
          {/* LAYER 4: Lines center → vertices             */}
          {/* ============================================ */}
          <line x1="300" y1="268" x2="300" y2="175" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
          <line x1="270" y1="312" x2="185" y2="370" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
          <line x1="330" y1="312" x2="415" y2="370" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />

          {/* ============================================ */}
          {/* LAYER 5: Edge labels (along triangle edges)  */}
          {/* ============================================ */}

          {/* Left edge: "Ce que tu sais" */}
          <text x="212" y="260" fill="rgba(142,207,176,0.4)" fontSize="10" fontWeight="400" textAnchor="middle" transform="rotate(-57,212,260)">Ce que tu sais</text>

          {/* Right edge: "Ce que tu dis" */}
          <text x="388" y="260" fill="rgba(142,207,176,0.4)" fontSize="10" fontWeight="400" textAnchor="middle" transform="rotate(57,388,260)">Ce que tu dis</text>

          {/* Bottom edge: "Ce que tu montres" */}
          <text x="300" y="400" fill="rgba(142,207,176,0.4)" fontSize="10" fontWeight="400" textAnchor="middle">Ce que tu montres</text>

          {/* ============================================ */}
          {/* LAYER 7: Center circle                       */}
          {/* ============================================ */}
          <circle cx="300" cy="300" r="38" fill="rgba(13,17,23,0.8)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" />
          <text x="300" y="296" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" letterSpacing="0.18em" opacity="0.7">ENTRE</text>
          <text x="300" y="311" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" letterSpacing="0.18em" opacity="0.7">TIEN</text>

          {/* ============================================ */}
          {/* LAYER 8: Node labels                         */}
          {/* ============================================ */}

          {/* Top node — Le Fond / La Triade */}
          <text x="300" y="35" textAnchor="middle" fill="rgba(142,207,176,0.5)" fontSize="9" fontWeight="600" letterSpacing="0.18em">TEMPS 1</text>
          <text x="300" y="78" textAnchor="middle" fill="white" fontSize="16" fontWeight="500" opacity="0.9">Le Fond</text>
          <text x="300" y="100" textAnchor="middle" fill="#C8985E" fontSize="12" fontWeight="500" opacity="0.8">La Triade</text>

          {/* Bottom-left node — La Forme / SVC */}
          <text x="110" y="510" textAnchor="middle" fill="rgba(142,207,176,0.5)" fontSize="9" fontWeight="600" letterSpacing="0.18em">TEMPS 2</text>
          <text x="110" y="440" textAnchor="middle" fill="white" fontSize="16" fontWeight="500" opacity="0.9">La Forme</text>
          <text x="110" y="462" textAnchor="middle" fill="#C8985E" fontSize="12" fontWeight="500" opacity="0.8">SVC</text>

          {/* Bottom-right node — La Structure / Pyramide Inversée */}
          <text x="490" y="510" textAnchor="middle" fill="rgba(142,207,176,0.5)" fontSize="9" fontWeight="600" letterSpacing="0.18em">TEMPS 3</text>
          <text x="490" y="440" textAnchor="middle" fill="white" fontSize="16" fontWeight="500" opacity="0.9">La Structure</text>
          <text x="490" y="462" textAnchor="middle" fill="#C8985E" fontSize="12" fontWeight="500" opacity="0.8">Pyramide Inversée</text>

        </svg>
      </div>
    </div>
  );
};

const MethodSection = () => {
  return (
    <section id="methode" className="py-20 lg:py-28">
      <div className="section-container">
        <div className="text-center mb-14">
          <div className="pill-badge mb-4 mx-auto">
            <span className="pill-dot" />
            LA MÉTHODE
          </div>
          <h2 className="text-section-title mb-6">
            La méthode des <span className="text-hero-accent">3 Temps</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Construite au fil de 3 ans d'accompagnement, affinée avec +300 étudiants. 8 méthodes qui rendent la préparation simple sans être simpliste. C'est cette méthode qui structure le workbook, les sessions et le coaching.
          </p>
        </div>

        {/* Triangle framework diagram */}
        <TriangleFramework />

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3 reveal-stagger">
          {cards.map((card) => (
            <div key={card.badge} className="card-finox flex flex-col group">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                style={{ background: `color-mix(in srgb, ${card.accent} 8%, transparent)` }}
              >
                <card.icon size={22} style={{ color: card.accent }} />
              </div>
              <div className="pill-badge mb-4 self-start text-xs">
                <span className="pill-dot w-2 h-2" />
                {card.badge}
              </div>
              <h3 className="text-xl font-medium text-[var(--text-primary)] mb-3">{card.title}</h3>
              <p className="text-body-sm flex-1">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
