const logos = [
  { src: "/logo-hec.png", alt: "HEC Paris" },
  { src: "/logo-essec.png", alt: "ESSEC" },
  { src: "/logo-escp.png", alt: "ESCP" },
  { src: "/logo-edhec.png", alt: "EDHEC" },
  { src: "/logo-emlyon.png", alt: "emlyon" },
  { src: "/logo-skema.png", alt: "SKEMA" },
];

const LogoBanner = () => {
  return (
    <section className="py-10 border-t border-b border-[var(--divider)]">
      <div className="section-container">
        <p className="text-center text-xs uppercase tracking-widest text-[var(--text-light)] mb-8">
          Méthode utilisée par des étudiants admis à
        </p>
        <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-8 md:h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoBanner;
