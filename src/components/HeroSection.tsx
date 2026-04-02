import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const AnimatedCounter = ({ end, display, label }: { end: number; display: string; label: string }) => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDone(true);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-5xl font-light text-[var(--text-primary)] tracking-tight tabular-nums">
        {done ? display : count}
      </div>
      <div className="text-xs md:text-sm text-[var(--text-muted)] mt-2">{label}</div>
    </div>
  );
};

const CountdownTicker = ({ variant = "light" }: { variant?: "light" | "dark" }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const orauxStart = new Date("2026-04-29T00:00:00");
    const update = () => {
      const now = new Date();
      const diff = Math.max(0, orauxStart.getTime() - now.getTime());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const isDark = variant === "dark";
  const numClass = isDark
    ? "text-3xl md:text-4xl font-light text-white tabular-nums"
    : "text-3xl md:text-4xl font-light text-[var(--text-primary)] tabular-nums";
  const labelClass = isDark
    ? "text-[10px] uppercase tracking-widest text-white/50 mt-1"
    : "text-[10px] uppercase tracking-widest text-[var(--text-muted)] mt-1";
  const separatorClass = isDark
    ? "text-2xl md:text-3xl text-white/20 font-light"
    : "text-2xl md:text-3xl text-[var(--text-light)] font-light";
  const borderClass = isDark
    ? "border-red-500/30 bg-red-500/5"
    : "border-red-500/20 bg-red-500/[0.03]";

  const captionClass = isDark
    ? "text-[11px] uppercase tracking-widest text-white/40 mt-3"
    : "text-[11px] uppercase tracking-widest text-[var(--text-muted)] mt-3";

  return (
    <div className={`inline-flex flex-col items-center border ${borderClass} rounded-xl px-6 py-4`}>
      <div className="flex items-center gap-4">
        <span className="relative flex h-2 w-2 mr-1 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        <div className="text-center">
          <p className={numClass}>{String(timeLeft.days).padStart(2, "0")}</p>
          <p className={labelClass}>jours</p>
        </div>
        <span className={separatorClass}>:</span>
        <div className="text-center">
          <p className={numClass}>{String(timeLeft.hours).padStart(2, "0")}</p>
          <p className={labelClass}>heures</p>
        </div>
        <span className={separatorClass}>:</span>
        <div className="text-center">
          <p className={numClass}>{String(timeLeft.minutes).padStart(2, "0")}</p>
          <p className={labelClass}>min</p>
        </div>
        <span className={separatorClass}>:</span>
        <div className="text-center">
          <p className={numClass}>{String(timeLeft.seconds).padStart(2, "0")}</p>
          <p className={labelClass}>sec</p>
        </div>
      </div>
      <p className={captionClass}>avant la fin des écrits et le début de la préparation aux oraux</p>
    </div>
  );
};

export { CountdownTicker };

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-28 pb-20 relative overflow-hidden">
      {/* Subtle static gradient for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(200,152,94,0.03) 0%, transparent 70%)",
        }}
      />
      <div className="section-container relative z-10">
        {/* Title */}
        <div className="text-center mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              color: "var(--text-dark)",
            }}
          >
            L'entretien de personnalité pèse jusqu'à{" "}
            <span className="text-hero-accent">50%</span> de la note aux oraux.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-xl md:text-2xl text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto font-light"
          >
            Et un levier de progression souvent sous-exploité, même dans les meilleures prépas.
          </motion.p>
        </div>

        {/* Countdown */}
        <div className="flex justify-center mb-10">
          <CountdownTicker variant="light" />
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3">
          <a href="https://calendly.com/enzo-lecodedelentretien/30min" className="btn-cta">
            Échanger 20 min →
          </a>
          <p className="text-xs text-[var(--text-light)]">On parle de votre organisation, sans engagement.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
