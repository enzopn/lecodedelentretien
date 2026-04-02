const Footer = () => {
  return (
    <footer className="bg-[var(--footer-bg)] text-white/60 py-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <p className="text-white font-medium mb-1">Enzo Petit</p>
            <p className="text-sm">Coaching oraux et entretiens de personnalité</p>
          </div>
          <div className="flex gap-12">
            <div className="space-y-2 text-sm">
              <a href="#constat" className="block hover:text-white transition-colors">Le constat</a>
              <a href="#accompagnement" className="block hover:text-white transition-colors">L'accompagnement</a>
              <a href="#temoignages" className="block hover:text-white transition-colors">Témoignages</a>
              <a href="#auteur" className="block hover:text-white transition-colors">Qui suis-je</a>
            </div>
            <div className="space-y-2 text-sm">
              <a href="mailto:enzo@lecodedelentretien.fr" className="block hover:text-white transition-colors">enzo@lecodedelentretien.fr</a>
              <a href="https://www.linkedin.com/in/enzopetit" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-6 pt-4 text-xs">
          © 2026 Enzo Petit
        </div>
      </div>
    </footer>
  );
};

export default Footer;
