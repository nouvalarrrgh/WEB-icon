import { Youtube, Instagram, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FooterSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <footer id="contact" className="pt-20 pb-8 border-t-2 border-primary/20 relative overflow-hidden bg-[#0a0520]" ref={ref}>
      {/* Background decoration to simulate the bridge/city vibe */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-retro-magenta/20 to-transparent pointer-events-none" />
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: `linear-gradient(to right, #ffffff0a 1px, transparent 1px), linear-gradient(to bottom, #ffffff0a 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
      />

      <motion.div
        className="max-w-7xl mx-auto px-6 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Branding (Takes 2 columns in lg) */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-4xl tracking-widest mb-2 flex items-baseline">
              <span className="text-retro-blue text-glow-blue">I</span>
              <span className="text-retro-red text-glow-red">C</span>
              <span className="text-retro-orange text-glow-orange">O</span>
              <span className="text-retro-green text-glow-green">N</span>
              <span className="text-white text-glow ml-2">.LAB</span>
            </h2>
            <h3 className="font-display text-xl text-white mb-6 tracking-wider">
              HIMA ILKOM UNNES
            </h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8 max-w-sm">
              Acara IT tahunan unggulan yang diselenggarakan oleh HIMA ILKOM UNNES, menghadirkan para pionir untuk berinovasi, berkompetisi, dan berkolaborasi.
            </p>

            <h4 className="font-display text-base text-white mb-4">
              DIPERSEMBAHKAN OLEH
            </h4>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-primary/30 bg-white flex items-center justify-center p-1">
                <img src="/Logo-unnes.jpg" alt="Logo UNNES" className="w-full h-full object-contain rounded-full" />
              </div>
              <div className="w-12 h-12 rounded-full border border-primary/30 bg-white flex items-center justify-center p-2">
                <img src="/logo-hima.png" alt="Logo HIMA ILKOM" className="w-full h-full object-contain" />
              </div>
              <div className="w-12 h-12 rounded-full border border-primary/30 bg-white flex items-center justify-center p-1.5">
                <img src="/logo-icn.png" alt="Logo ICN" className="w-full h-full object-contain rounded-full" />
              </div>
            </div>
          </div>

          {/* Column 2: Acara */}
          <div>
            <h4 className="font-display text-lg text-white mb-6">
              ACARA
            </h4>
            <ul className="space-y-4">
              {["Game Development", "Lomba KTI", "Mobile Legend", "Workshop"].map((item) => (
                <li key={item}>
                  <a href="#competitions" className="font-sans font-bold text-sm text-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Lainnya */}
          <div>
            <h4 className="font-display text-lg text-white mb-6">
              LAINNYA
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="/about-us" className="font-sans font-bold text-sm text-foreground hover:text-primary transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="/sponsorship" className="font-sans font-bold text-sm text-foreground hover:text-primary transition-colors">
                  Sponsorship
                </a>
              </li>
              <li>
                <a href="/#faq" className="font-sans font-bold text-sm text-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social & Contact */}
          <div>
            <h4 className="font-display text-lg text-white mb-6">
              SOSIAL MEDIA
            </h4>
            <div className="flex items-center gap-3 mb-8">
              <a href="https://youtube.com/@himailkomunnes271?si=gQavx0wOnTW3L_4F" className="w-9 h-9 bg-[#FF0000] rounded-sm flex items-center justify-center text-white hover:scale-110 transition-transform">
                <Youtube size={18} />
              </a>
              <a href="https://www.instagram.com/iconlab.ilkom/" className="w-9 h-9 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-sm flex items-center justify-center text-white hover:scale-110 transition-transform">
                <Instagram size={18} />
              </a>
            </div>

            <h4 className="font-display text-lg text-white mb-6">
              KONTAK KAMI
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:iconlabilkomunnes@gmail.com" className="font-sans font-bold text-sm text-foreground hover:text-primary transition-colors">
                  iconlabilkomunnes@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+6281369274302" className="font-sans font-bold text-sm text-foreground hover:text-primary transition-colors">
                  +62 81369274302
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-primary/20 text-center">
          <p className="font-display text-sm text-muted-foreground tracking-widest">
            © 2026 HIMA ILKOM — GAME OVER? NEVER.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterSection;