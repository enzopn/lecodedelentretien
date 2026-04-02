import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TriangleFramework = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="flex justify-center">
      <div className="relative w-full max-w-[480px] aspect-[600/560] rounded-2xl overflow-hidden" style={{ background: "linear-gradient(145deg, #0D1117 0%, #161B22 50%, #0D1117 100%)" }}>
        <svg viewBox="0 0 600 560" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arrowG" viewBox="0 0 10 7" refX="9" refY="3.5" markerWidth="8" markerHeight="6" orient="auto">
              <path d="M 0 0.5 L 9 3.5 L 0 6.5 z" fill="#C8985E" opacity="0.7" />
            </marker>
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

          <ellipse cx="300" cy="80" rx="100" ry="80" fill="url(#glowTop)" />
          <ellipse cx="110" cy="445" rx="100" ry="80" fill="url(#glowBL)" />
          <ellipse cx="490" cy="445" rx="100" ry="80" fill="url(#glowBR)" />

          <motion.path id="curveRight" d="M 370,105 C 530,60 590,250 510,405" fill="none" stroke="#C8985E" strokeWidth="1" opacity="0.35" markerEnd="url(#arrowG)"
            strokeDasharray="500"
            initial={{ strokeDashoffset: 500 }}
            animate={isInView ? { strokeDashoffset: 0 } : {}}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          />
          <motion.g initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 1.8 }}>
            <text fill="#C8985E" fontSize="11" fontWeight="300" opacity="0.55" fontStyle="italic">
              <textPath href="#curveRight" startOffset="35%" textAnchor="middle">Cohérence</textPath>
            </text>
          </motion.g>

          <motion.path id="curveBottom" d="M 470,495 C 400,555 200,555 130,495" fill="none" stroke="#C8985E" strokeWidth="1" opacity="0.35" markerEnd="url(#arrowG)"
            strokeDasharray="500"
            initial={{ strokeDashoffset: 500 }}
            animate={isInView ? { strokeDashoffset: 0 } : {}}
            transition={{ duration: 1.5, delay: 0.7, ease: "easeInOut" }}
          />
          <motion.g initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 2.0 }}>
            <text fill="#C8985E" fontSize="11" fontWeight="300" opacity="0.55" fontStyle="italic">
              <textPath href="#curveBottom" startOffset="50%" textAnchor="middle">Impact</textPath>
            </text>
          </motion.g>

          <motion.path id="curveLeft" d="M 90,405 C 10,250 70,60 230,105" fill="none" stroke="#C8985E" strokeWidth="1" opacity="0.35" markerEnd="url(#arrowG)"
            strokeDasharray="500"
            initial={{ strokeDashoffset: 500 }}
            animate={isInView ? { strokeDashoffset: 0 } : {}}
            transition={{ duration: 1.5, delay: 0.9, ease: "easeInOut" }}
          />
          <motion.g initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 2.2 }}>
            <text fill="#C8985E" fontSize="11" fontWeight="300" opacity="0.55" fontStyle="italic">
              <textPath href="#curveLeft" startOffset="45%" textAnchor="middle">Authenticité</textPath>
            </text>
          </motion.g>

          <motion.polygon
            points="300,155 165,385 435,385"
            fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2"
            strokeDasharray="1000"
            initial={{ strokeDashoffset: 1000 }}
            animate={isInView ? { strokeDashoffset: 0 } : {}}
            transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
          />

          <motion.g initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 1.5 }}>
            <line x1="300" y1="268" x2="300" y2="175" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
            <line x1="270" y1="312" x2="185" y2="370" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
            <line x1="330" y1="312" x2="415" y2="370" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />

            <text x="212" y="260" fill="rgba(142,207,176,0.4)" fontSize="10" fontWeight="400" textAnchor="middle" transform="rotate(-57,212,260)">Ce que tu sais</text>
            <text x="388" y="260" fill="rgba(142,207,176,0.4)" fontSize="10" fontWeight="400" textAnchor="middle" transform="rotate(57,388,260)">Ce que tu dis</text>
            <text x="300" y="400" fill="rgba(142,207,176,0.4)" fontSize="10" fontWeight="400" textAnchor="middle">Ce que tu montres</text>

            <circle cx="300" cy="300" r="38" fill="rgba(13,17,23,0.8)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" />
            <text x="300" y="296" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" letterSpacing="0.18em" opacity="0.7">ENTRE</text>
            <text x="300" y="311" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" letterSpacing="0.18em" opacity="0.7">TIEN</text>
          </motion.g>

          <motion.g initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 1.5 }}>
            <text x="300" y="35" textAnchor="middle" fill="rgba(142,207,176,0.5)" fontSize="9" fontWeight="600" letterSpacing="0.18em">TEMPS 1</text>
            <text x="300" y="78" textAnchor="middle" fill="white" fontSize="16" fontWeight="500" opacity="0.9">Le Fond</text>
            <text x="300" y="100" textAnchor="middle" fill="#C8985E" fontSize="12" fontWeight="500" opacity="0.8">La Triade</text>

            <text x="110" y="510" textAnchor="middle" fill="rgba(142,207,176,0.5)" fontSize="9" fontWeight="600" letterSpacing="0.18em">TEMPS 2</text>
            <text x="110" y="440" textAnchor="middle" fill="white" fontSize="16" fontWeight="500" opacity="0.9">La Forme</text>
            <text x="110" y="462" textAnchor="middle" fill="#C8985E" fontSize="12" fontWeight="500" opacity="0.8">SVC</text>

            <text x="490" y="510" textAnchor="middle" fill="rgba(142,207,176,0.5)" fontSize="9" fontWeight="600" letterSpacing="0.18em">TEMPS 3</text>
            <text x="490" y="440" textAnchor="middle" fill="white" fontSize="16" fontWeight="500" opacity="0.9">La Structure</text>
            <text x="490" y="462" textAnchor="middle" fill="#C8985E" fontSize="12" fontWeight="500" opacity="0.8">Pyramide Inversée</text>
          </motion.g>
        </svg>
      </div>
    </div>
  );
};

export default TriangleFramework;
