import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Le constat", href: "#constat" },
  { label: "L'accompagnement", href: "#accompagnement" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "Qui suis-je", href: "#auteur" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const navHeight = useTransform(scrollY, [0, 100], [80, 64]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? "backdrop-blur-md bg-[var(--page-bg)]/90 shadow-sm" : ""
      }`}
      style={{ height: navHeight }}
    >
      <motion.div
        className="absolute top-0 left-0 h-[2px] bg-[var(--accent-warm)] origin-left z-50"
        style={{ scaleX: scrollYProgress, width: "100%" }}
      />
      <div className="section-container flex items-center justify-between h-20">
        <a href="#" className="text-sm font-medium text-[var(--text-primary)] uppercase tracking-[0.15em]">
          Enzo Petit
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--text-dark)] hover:text-[var(--text-primary)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="link-arrow hidden md:inline-flex">
          Échanger 20 min <span>↗</span>
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-[var(--text-primary)]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--divider)] bg-[var(--page-bg)]/95 backdrop-blur-md">
          <div className="section-container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base text-[var(--text-dark)] py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-cta text-center mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Échanger 20 min →
            </a>
          </div>
        </div>
      )}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-[var(--divider)]"
        style={{ opacity: borderOpacity }}
      />
    </motion.nav>
  );
};

export default Navbar;
