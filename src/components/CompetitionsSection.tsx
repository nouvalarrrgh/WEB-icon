import { GraduationCap, Gamepad, Book, Trophy, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import cloudBg from "@/assets/icon/cloud.svg";
import bintangBg from "@/assets/bintang.svg";

const competitions = [
  {
    icon: GraduationCap,
    title: "Workshop",
    subtitle: "Workshop",
    desc: "belum tau isinya",
    tags: ["Mahasiswa", "1 Orang", "Rp10.000,00"],
    color: "retro-yellow",
    stage: "WORLD 0",
  },
  {
    icon: Gamepad,
    title: "Game Dev",
    subtitle: "Game Development",
    desc: "belum tau isinya",
    tags: ["Mahasiswa", "Maks. 3 Orang", "Rp80.000,00"],
    color: "retro-red",
    stage: "WORLD 1",
  },
  {
    icon: Book,
    title: "KTI",
    subtitle: "Lomba KTI",
    desc: "Belum tau isinya",
    tags: ["Mahasiswa", "Maks. 3 Orang", "Rp50.000,00"],
    color: "retro-blue",
    stage: "WORLD 2",
  },
  {
    icon: Trophy,
    title: "ML",
    subtitle: "Mobile Legend",
    desc: "Belum tau isinya",
    tags: ["Umum Wilayah Kota Semarang", "5 Orang", "Rp40.000,00"],
    color: "retro-green",
    stage: "WORLD 3",
  },
];

const CompetitionsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="competitions" className="py-24 relative bg-background overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(0 0% 100% / 0.2) 1px, transparent 1px),
            linear-gradient(90deg, hsl(0 0% 100% / 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />
      <img src={bintangBg} alt="Stars" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none" />
      <img src={cloudBg} className="absolute top-32 left-0 w-48 md:w-72 z-0 opacity-60 mix-blend-screen pointer-events-none" alt="Cloud" />
      <img src={cloudBg} className="absolute top-48 right-0 w-48 md:w-72 [transform:scaleX(-1)] z-0 opacity-60 mix-blend-screen pointer-events-none" alt="Cloud" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="font-display text-xs text-retro-yellow text-glow-yellow tracking-[0.4em]">[ SELECT COMPETITION ]</span>
          <h2 className="font-display text-xl sm:text-3xl mt-4 gradient-text leading-relaxed">
            ACARA
          </h2>
        </motion.div>

        {/* Horizontal cards (ifest14 layout) */}
        <div className="space-y-10">
          {competitions.map((c, i) => (
            <motion.div
              key={c.title}
              className={`group border-2 border-${c.color}/20 bg-card/20 overflow-hidden hover:border-${c.color}/50 transition-all duration-500`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 * i }}
              whileHover={{
                boxShadow: `0 0 20px hsl(var(--${c.color}) / 0.2)`,
              }}
            >
              {/* Stage bar */}
              <div className={`h-9 bg-${c.color}/10 border-b-2 border-${c.color}/20 flex items-center px-4`}>
                <span className={`font-display text-xs text-${c.color} tracking-widest`}>{c.stage}</span>
                <div className="ml-auto flex gap-1">
                  <div className={`w-2 h-2 bg-${c.color}/60`} />
                  <div className={`w-2 h-2 bg-${c.color}/40`} />
                  <div className={`w-2 h-2 bg-${c.color}/20`} />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row">
                {/* Icon frame */}
                <div className={`w-full lg:w-80 h-48 lg:h-auto border-b-2 lg:border-b-0 lg:border-r-2 border-${c.color}/15 bg-${c.color}/5 flex items-center justify-center`}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <c.icon size={64} className={`text-${c.color} opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />
                  </motion.div>
                </div>

                {/* Info */}
                <div className="flex-1 p-6 sm:p-8">
                  <h3 className={`font-display text-base sm:text-lg text-foreground mb-2 leading-relaxed group-hover:text-${c.color} transition-colors duration-300`}>
                    {c.subtitle}
                  </h3>

                  {/* Requirement tags */}
                  {c.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {c.tags.map((tag, ti) => (
                        <span
                          key={ti}
                          className={`inline-block px-3 py-1 border border-${c.color}/40 bg-${c.color}/10 font-display text-xs text-${c.color} tracking-wider`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">{c.desc}</p>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="#competitions"
                      className={`inline-flex items-center gap-2 font-display text-sm text-${c.color} hover:text-foreground transition-all duration-300 tracking-widest group/link px-5 py-2.5 border-2 border-${c.color}/30 hover:border-${c.color}/70 hover:bg-${c.color}/10`}
                    >
                      ► SELECT
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                    <Link
                      to="/login"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-accent/50 text-accent font-display text-sm tracking-wider hover:bg-accent/10 hover:box-glow-yellow transition-all duration-300"
                    >
                      ► DAFTAR
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitionsSection;