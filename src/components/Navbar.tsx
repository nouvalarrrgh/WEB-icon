import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "BERANDA", href: "/#hero" },
  { label: "TENTANG KAMI", href: "/about-us" },
  { label: "FAQ", href: "/#faq" },
  { label: "HUBUNGI KAMI", href: "/#contact" },
];

const competitions = [
  { label: "Game Development", href: "/#competitions" },
  { label: "Lomba KTI", href: "/#competitions" },
  { label: "Mobile Legend", href: "/#competitions" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.1, duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 h-20 border-b-2 border-primary/30 bg-background/95 backdrop-blur-sm flex items-center"
    >
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between px-6">
        <a href="/#hero" className="flex items-center gap-2">
          <span className="font-display text-sm sm:text-base tracking-widest flex items-baseline">
            <span className="text-retro-blue text-glow-blue">I</span>
            <span className="text-retro-red text-glow-red">C</span>
            <span className="text-retro-orange text-glow-orange">O</span>
            <span className="text-retro-green text-glow-green">N</span>
            <span className="text-white text-glow ml-1">.LAB</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-8 items-center">
          <li>
            <a href="/#hero" className="font-display text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest">
              ► BERANDA
            </a>
          </li>

          {/* Dropdown: ACARA */}
          <li className="relative">
            <button
              onClick={(e) => { e.stopPropagation(); setDropdownOpen(!dropdownOpen); }}
              className="font-display text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest flex items-center gap-1"
            >
              ► ACARA
              <svg className={`w-3 h-3 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 border border-retro-green bg-background/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,255,0,0.15)] z-50">
                {competitions.map((comp) => (
                  <a
                    key={comp.label}
                    href={comp.href}
                    className="block px-4 py-3 font-display text-xs text-muted-foreground hover:text-retro-green hover:bg-retro-green/10 transition-colors tracking-widest"
                    onClick={() => setDropdownOpen(false)}
                  >
                    ► {comp.label}
                  </a>
                ))}
              </div>
            )}
          </li>

          {navLinks.slice(1).map((link) => (
            <li key={link.label}>
              <a href={link.href} className="font-display text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest">
                ► {link.label}
              </a>
            </li>
          ))}

          <li>
            <a
              href="/#competitions"
              className="px-4 py-2 border-2 border-accent/60 bg-accent/10 text-accent font-display text-xs tracking-wider hover:bg-accent hover:text-accent-foreground transition-all box-glow-yellow"
            >
              ► DAFTAR LOMBA
            </a>
          </li>
        </ul>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-primary">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t-2 border-primary/20 bg-background/98 px-6 py-4 space-y-3 overflow-hidden"
          >
            <a href="#hero" onClick={() => setOpen(false)} className="block font-display text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest">
              ► BERANDA
            </a>
            <div>
              <button
                onClick={(e) => { e.stopPropagation(); setMobileDropdownOpen(!mobileDropdownOpen); }}
                className="w-full flex justify-between items-center font-display text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest"
              >
                ► ACARA
                <svg className={`w-3 h-3 transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {mobileDropdownOpen && (
                  <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden pl-4 mt-2 space-y-2">
                    {competitions.map((comp) => (
                      <a key={comp.label} href={comp.href} onClick={() => setOpen(false)} className="block font-display text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest">
                        ► {comp.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {navLinks.slice(1).map((link) => (
              <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="block font-display text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest">
                ► {link.label}
              </a>
            ))}
            <a href="/#competitions" onClick={() => setOpen(false)} className="block px-4 py-2 border-2 border-accent/60 bg-accent/10 text-accent font-display text-xs tracking-wider text-center hover:bg-accent hover:text-accent-foreground transition-all box-glow-yellow">
              ► DAFTAR LOMBA
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;