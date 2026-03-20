import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import cloudBg from "@/assets/icon/cloud.svg";
import bintangBg from "@/assets/bintang.svg";

const sponsors = [
  { name: "HIMA ILKOM", tier: "" },
];

const SponsorsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const renderCards = (items: typeof sponsors) =>
    items.map((s, i) => (
      <div
        key={`${s.name}-${i}`}
        className="w-48 md:w-64 h-36 md:h-48 border-2 border-primary/15 bg-card/30 flex flex-col justify-center items-center overflow-hidden flex-shrink-0 p-4 hover:border-primary/50 hover:box-glow transition-all duration-300"
      >
        <div className="w-14 h-14 flex items-center justify-center border-2 border-muted-foreground/20 mb-3 text-muted-foreground">
          <span className="font-display text-sm">{s.name.slice(0, 2).toUpperCase()}</span>
        </div>
        <span className="font-display text-[10px] text-foreground tracking-widest">{s.name}</span>
        {s.tier && <span className="text-xs text-retro-yellow mt-1">{s.tier}</span>}
      </div>
    ));

  return (
    <section id="sponsors" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: `linear-gradient(hsl(0 0% 100% / 0.2) 1px,transparent 1px),linear-gradient(90deg,hsl(0 0% 100% / 0.2) 1px,transparent 1px)`, backgroundSize: "32px 32px" }} />
      <img src={bintangBg} alt="Stars" className="absolute inset-0 w-full h-full object-cover [transform:scaleX(-1)] z-0 pointer-events-none opacity-30" />
      <img src={cloudBg} className="absolute top-16 right-0 w-48 md:w-64 [transform:scaleX(-1)] z-0 opacity-40 mix-blend-screen pointer-events-none" alt="Cloud" />
      <img src={cloudBg} className="absolute bottom-16 left-0 w-48 md:w-64 z-0 opacity-40 mix-blend-screen pointer-events-none" alt="Cloud" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="font-display text-[10px] text-retro-magenta text-glow-magenta tracking-[0.4em]">[ PARTY MEMBERS ]</span>
          <h2 className="font-display text-xl sm:text-3xl mt-4 gradient-text leading-relaxed">
            SPONSOR & PARTNER
          </h2>
          <p className="text-muted-foreground mt-2 text-base">
            Terima kasih kepada para sponsor yang telah mendukung
            terselenggaranya acara ini.
          </p>
          <div className="my-5 flex justify-center">
            <Link
              to="/sponsorship"
              className="inline-block px-8 py-3 border-2 border-accent/50 text-accent font-display text-[10px] tracking-widest hover:bg-accent/10 hover:box-glow-yellow transition-all"
            >
              ► AJUKAN KERJA SAMA
            </Link>
          </div>
        </motion.div>

        {/* Sponsor Marquee */}
        <div className="overflow-hidden">
          <div className="flex gap-5 animate-marquee w-max">
            {renderCards(sponsors)}
            {renderCards(sponsors)}
            {renderCards(sponsors)}
            {renderCards(sponsors)}
            {renderCards(sponsors)}
            {renderCards(sponsors)}
            {renderCards(sponsors)}
            {renderCards(sponsors)}
          </div>
        </div>

        {/* Media Partner */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="font-display text-[10px] text-retro-cyan text-glow-cyan tracking-[0.4em]">[ ALLIES ]</span>
          <h2 className="font-display text-base sm:text-xl mt-4 text-muted-foreground leading-relaxed">
            MEDIA PARTNER
          </h2>
        </motion.div>

        <div className="overflow-hidden mt-8">
          <div className="flex gap-5 animate-marquee-reverse w-max">
            {renderCards(sponsors)}
            {renderCards(sponsors)}
            {renderCards(sponsors)}
            {renderCards(sponsors)}
            {renderCards(sponsors)}
            {renderCards(sponsors)}
            {renderCards(sponsors)}
            {renderCards(sponsors)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;