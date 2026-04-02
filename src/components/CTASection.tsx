import { CountdownTicker } from "./HeroSection";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-to-br from-[var(--accent-color)] to-[#0F1A2E]">
      <div className="section-container text-center">
        <div className="flex justify-center mb-4">
          <CountdownTicker variant="dark" />
        </div>
        <div className="mb-8" />
        <h2 className="text-section-title !text-white mb-6">Les oraux approchent. Vos étudiants sont prêts ?</h2>
        <p className="text-lg text-white/70 max-w-xl mx-auto mb-10">
          Échangeons 20 minutes sur votre organisation actuelle et sur ce qui pourrait faire la différence cette année.
        </p>
        <div className="flex flex-col items-center gap-4">
          <a href="https://calendly.com/enzo-lecodedelentretien/30min" className="btn-cta-inverted">
            Prendre rendez-vous →
          </a>
          <p className="text-sm text-white/40">Sans engagement. On parle de vos besoins.</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
