import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import bintangBg from "@/assets/bintang.svg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden crt-overlay">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={bintangBg} alt="Stars" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none" />
        <motion.img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          style={{ imageRendering: "auto" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      </div>

      {/* Pixel grid */}
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(0 0% 100% / 0.2) 1px, transparent 1px),
            linear-gradient(90deg, hsl(0 0% 100% / 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Top HUD label */}
        <motion.div
          className="mb-6 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="font-display text-[10px] text-retro-cyan text-glow-cyan tracking-[0.5em]">WELCOME TO</span>
          <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-primary/50" />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-display text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-relaxed flex items-baseline justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
        >
          <span className="text-retro-blue text-glow-blue">I</span>
          <span className="text-retro-red text-glow-red">C</span>
          <span className="text-retro-orange text-glow-orange">O</span>
          <span className="text-retro-green text-glow-green">N</span>
          <span className="text-white text-glow ml-2">.LAB</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl sm:text-2xl text-secondary-foreground max-w-xl mx-auto mb-2 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.4 }}
        >
          Belum tau dikasih apa ?
        </motion.p>
        <motion.p
          className="font-display text-[10px] sm:text-sm text-muted-foreground mb-12 tracking-[0.4em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
        >
          — GAME ◆ TEKNOLOGI ◆ INNOVATION —
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.4 }}
        >
          <a
            href="#competitions"
            className="group relative px-8 py-4 border-2 border-primary bg-primary/10 text-primary font-display text-sm sm:text-xs tracking-wider box-glow hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">► DAFTAR SEKARANG</span>
          </a>
          <a
            href="#competitions"
            className="px-8 py-4 border-2 border-accent/50 text-accent font-display text-sm sm:text-xs tracking-wider hover:bg-accent/10 hover:box-glow-yellow transition-all duration-300 hover:scale-105"
          >
            ◄ LIHAT LOMBA
          </a>
        </motion.div>

        {/* Down arrow */}
        <motion.div
          className="mt-16 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <motion.a
            href="#competitions"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-primary text-glow cursor-pointer hover:text-accent transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.a>
        </motion.div>

        {/* HP bar */}
        <motion.div
          className="mt-8 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <span className="font-display text-[10px] text-white text-glow">HP</span>
          <div className="flex gap-0.5">
            {Array.from({ length: 20 }).map((_, i) => {
              let colorClass = "bg-retro-blue";
              if (i >= 5 && i < 10) colorClass = "bg-retro-green";
              if (i >= 10 && i < 15) colorClass = "bg-retro-yellow";
              if (i >= 15) colorClass = "bg-retro-red";
              
              return (
                <motion.div
                  key={i}
                  className={`w-2 h-3 ${colorClass}`}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 5.8 + i * 0.03, duration: 0.15 }}
                  style={{ opacity: 1 - i * 0.02, transformOrigin: "bottom" }}
                />
              );
            })}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;