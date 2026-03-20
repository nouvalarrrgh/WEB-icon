import { useState } from "react";
import CountdownTimer from "./CountdownTimer";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hillBg from "@/assets/icon/hill.svg";
import coinIcon from "@/assets/icon/coin.svg";
import bintangBg from "@/assets/bintang.svg";

export interface TEvent { date: string; label: string }
export interface TSlide { title: string; icon: string; color: string; events: TEvent[] }

export const slides: TSlide[] = [
  {
    title: "Workshop", icon: "🎓", color: "retro-yellow",
    events: [
      { date: "6 April 2026", label: "Press Release" },
      { date: "7 April s.d. 20 April 2026", label: "Pendaftaran Gelombang 1" },
      { date: "21 April s.d. 8 Mei 2026", label: "Pendaftaran Gelombang 2" },
      { date: "9 Mei 2026", label: "Technical Meeting" },
      { date: "23 Mei 2026", label: "Workshop" },
    ],
  },
  {
    title: "Game Development", icon: "🎮", color: "retro-red",
    events: [
      { date: "29 Maret s.d. 5 April 2026", label: "Early Bird" },
      { date: "7 April s.d. 20 April 2026", label: "Pendaftaran Gelombang 1 + Pengumpulan Karya" },
      { date: "21 April s.d. 8 Mei 2026", label: "Pendaftaran Gelombang 2 + Pengumpulan Karya" },
      { date: "9 Mei 2026", label: "Technical Meeting" },
      { date: "10 - 15 Mei 2026", label: "Penjurian Karya" },
      { date: "16 Mei 2026", label: "Pengumuman Finalis" },
      { date: "17 Mei 2026", label: "Technical Meeting Finalis" },
      { date: "23 Mei 2026", label: "Presentasi Finalis & Awarding" },
    ],
  },
  {
    title: "Lomba KTI", icon: "📝", color: "retro-blue",
    events: [
      { date: "29 Maret s.d. 6 April 2026", label: "Early Bird" },
      { date: "7 April s.d. 20 April 2026", label: "Pendaftaran Gelombang 1 + Pengumpulan Karya" },
      { date: "21 April s.d. 8 Mei 2026", label: "Pendaftaran Gelombang 2 + Pengumpulan Karya" },
      { date: "9 Mei 2026", label: "Technical Meeting" },
      { date: "10 - 15 Mei 2026", label: "Penjurian Karya" },
      { date: "16 Mei 2026", label: "Pengumuman Finalis" },
      { date: "17 Mei 2026", label: "Technical Meeting Finalis" },
      { date: "23 Mei 2026", label: "Presentasi Finalis & Awarding" },
    ],
  },
  {
    title: "Mobile Legends E-Sport", icon: "⚔️", color: "retro-green",
    events: [
      { date: "29 Maret s.d. 6 April 2026", label: "Early Bird" },
      { date: "7 April s.d. 20 April 2026", label: "Pendaftaran Gelombang 1" },
      { date: "21 April s.d. 8 Mei 2026", label: "Pendaftaran Gelombang 2" },
      { date: "9 Mei 2026", label: "Technical Meeting" },
      { date: "10 Mei 2026", label: "Babak Kualifikasi" },
      { date: "16 Mei 2026", label: "Technical Meeting" },
      { date: "17 Mei 2026", label: "Babak Semi Final & Final" },
      { date: "23 Mei 2026", label: "Awarding" },
    ],
  },
];

/* ─── Card ─── */
const Card = ({ item, num, total, color }: { item: TEvent; num: number; total: number; color: string }) => (
  <motion.div
    className={`border-2 border-${color}/20 bg-card/30 overflow-hidden hover:border-${color}/55 transition-all duration-300 cursor-default group`}
    whileHover={{ boxShadow: `0 0 16px hsl(var(--${color}) / 0.2)` }}
  >
    <div className={`h-7 bg-${color}/8 border-b border-${color}/12 flex items-center px-3`}>
      <div className={`w-5 h-5 border border-${color}/50 bg-${color}/15 flex items-center justify-center mr-2`}>
        <span className={`font-display text-[10px] text-${color}`}>{String(num).padStart(2, "0")}</span>
      </div>
      <span className={`font-display text-[10px] text-${color}/50 tracking-widest`}>📌 ICON.LAB</span>
      <span className="ml-auto font-display text-[10px] text-muted-foreground/40">{num}/{total}</span>
    </div>
    <div className="px-4 py-2.5">
      <p className={`font-display text-xs text-${color} tracking-wider mb-1`}>{item.date}</p>
      <p className="text-base text-foreground leading-relaxed group-hover:text-white transition-colors">{item.label}</p>

    </div>
  </motion.div>
);

/* ─── Timeline flow per slide ─── */
const TimelineFlow = ({ slide }: { slide: TSlide }) => {
  const { events, color } = slide;

  return (
    <div>
      {/* ─ MOBILE: left-rail ─ */}
      <div className="lg:hidden relative pl-8">
        <div className={`absolute left-[14px] top-2 bottom-2 w-0.5 bg-${color}/20`} />
        {events.map((item, i) => (
          <div key={i} className="relative mb-4 last:mb-0">
            <div className={`absolute -left-8 top-4 w-4 h-4 border-2 border-${color}/60 bg-background flex items-center justify-center z-10`}>
              <div className={`w-1.5 h-1.5 bg-${color}`} />
            </div>
            <div className={`absolute -left-4 top-[22px] w-4 h-0.5 bg-${color}/30`} />
            <Card item={item} num={i + 1} total={events.length} color={color} />
          </div>
        ))}
      </div>

      {/* ─ DESKTOP: center-rail alternating timeline ─ */}
      <div className="hidden lg:block relative">
        {/* Continuous center rail */}
        <div className={`absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-${color}/15`} />

        <div className="space-y-5">
          {events.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                className="relative flex items-stretch"
                initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.06 * i }}
              >
                {/* Left side */}
                <div className={`w-[calc(50%-28px)] ${isLeft ? "" : "flex items-center justify-end"}`}>
                  {isLeft ? (
                    <Card item={item} num={i + 1} total={events.length} color={color} />
                  ) : (
                    <p className={`font-display text-xs text-${color}/50 tracking-wider text-right`}>{item.date}</p>
                  )}
                </div>

                {/* Center node */}
                <div className="w-14 flex items-center justify-center relative">
                  {/* Connector line left */}
                  <div className={`absolute h-0.5 bg-${color}/30 ${isLeft ? "left-0 right-1/2" : "left-1/2 right-0"}`} />
                  {/* Connector line right */}
                  <div className={`absolute h-0.5 bg-${color}/30 ${isLeft ? "left-1/2 right-0" : "left-0 right-1/2"}`} style={{ opacity: 0.15 }} />
                  {/* Node */}
                  <div className={`w-7 h-7 border-2 border-${color}/50 bg-background flex items-center justify-center z-10`}>
                    <span className={`font-display text-[10px] text-${color}`}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                </div>

                {/* Right side */}
                <div className={`w-[calc(50%-28px)] ${!isLeft ? "" : "flex items-center"}`}>
                  {!isLeft ? (
                    <Card item={item} num={i + 1} total={events.length} color={color} />
                  ) : (
                    <p className={`font-display text-xs text-${color}/50 tracking-wider`}>{item.date}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Start & end markers */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-2">
            <span className="text-base">🏴</span>
            <div className="flex gap-1.5 md:gap-2">
              {[0, 1, 2].map((i) => (
                <img key={i} src={coinIcon} alt="Coin" className="w-5 h-5 animate-coin-spin" style={{ animationDelay: `${i * 0.3}s` }} />
              ))}
            </div>
            <span className="font-display text-[10px] text-muted-foreground tracking-widest">START</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-display text-[10px] text-muted-foreground tracking-widest">FINISH</span>
            <div className="flex gap-1.5 md:gap-2">
              {[0, 1, 2].map((i) => (
                <img key={i} src={coinIcon} alt="Coin" className="w-5 h-5 animate-coin-spin" style={{ animationDelay: `${i * 0.3}s` }} />
              ))}
            </div>
            <span className="text-base">🏁</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Main section ─── */
const TimelineSection = () => {
  const [active, setActive] = useState(0);
  const { ref, isVisible } = useScrollReveal();
  const cur = slides[active];

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(hsl(120 100% 50% / 0.2) 1px,transparent 1px),linear-gradient(90deg,hsl(120 100% 50% / 0.2) 1px,transparent 1px)`, backgroundSize: "32px 32px" }} />
      <img src={bintangBg} alt="Stars" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none" />

      {/* Hill Background */}
      <img src={hillBg} alt="Hill bg" className="absolute bottom-0 w-full h-full object-cover object-bottom z-0 opacity-30 mix-blend-screen pointer-events-none" />

      {/* Bottom Gradient Overlay for Transition */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-0 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Countdown */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <span className="font-display text-xs text-retro-orange text-glow-orange tracking-[0.4em]">[ COUNTDOWN ]</span>
          <h2 className="font-display text-xl sm:text-3xl mt-4 gradient-text leading-relaxed">MENUJU ACARA</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>
          <CountdownTimer targetDate="2026-06-15T00:00:00" />
        </motion.div>

        {/* Header */}
        <motion.div className="text-center mt-20 md:mt-28 mb-6" initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }}>
          <div className="border-2 border-primary/20 bg-card/30 inline-block">
            <div className="h-6 bg-primary/10 border-b border-primary/20 flex items-center px-3 gap-1.5">
              <div className="w-2 h-2 rounded-full bg-destructive/60" />
              <div className="w-2 h-2 rounded-full bg-accent/60" />
              <div className="w-2 h-2 rounded-full bg-primary/60" />
              <span className="ml-2 font-display text-[10px] text-muted-foreground tracking-widest">$ code TIMELINE.txt</span>
            </div>
          </div>
          <h2 className="font-display text-xl sm:text-3xl mt-4 gradient-text leading-relaxed">JADWAL ACARA</h2>
        </motion.div>

        {/* Tabs */}
        <motion.div className="flex flex-wrap gap-2 mb-8 justify-center" initial={{ opacity: 0, y: 15 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.5 }}>
          {slides.map((s, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2 border-2 font-display text-[10px] sm:text-xs tracking-widest transition-all duration-300 ${active === i ? `border-${s.color}/60 bg-${s.color}/15 text-${s.color}` : "border-primary/15 bg-card/20 text-muted-foreground hover:border-primary/30 hover:text-foreground"}`}
              style={active === i ? { boxShadow: `0 0 12px hsl(var(--${s.color}) / 0.15)` } : {}}
            >
              <span>{s.icon}</span><span>{s.title.toUpperCase()}</span>
            </button>
          ))}
        </motion.div>

        {/* Active slide */}
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{cur.icon}</span>
              <h3 className={`font-display text-base sm:text-lg text-${cur.color} leading-relaxed`}>{cur.title}</h3>
              <div className="h-px flex-1 bg-primary/10" />
              <span className="font-display text-[10px] text-muted-foreground tracking-widest">{cur.events.length} EVENTS</span>
            </div>
            <TimelineFlow slide={cur} />
          </motion.div>
        </AnimatePresence>

        {/* Nav */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-primary/10">
          <button onClick={() => setActive((p) => (p - 1 + slides.length) % slides.length)} className="flex items-center gap-2 px-5 py-2.5 border-2 border-primary/20 text-muted-foreground font-display text-xs tracking-widest hover:border-primary/50 hover:text-primary hover:box-glow transition-all duration-300">
            <ChevronLeft size={14} /> PREV
          </button>
          <div className="flex items-center gap-3">
            {slides.map((s, i) => (
              <button key={i} onClick={() => setActive(i)} className={`w-3 h-3 border transition-all duration-300 ${active === i ? `bg-${s.color} border-${s.color}/60` : "bg-transparent border-muted-foreground/30 hover:border-muted-foreground/60"}`} style={active === i ? { boxShadow: `0 0 8px hsl(var(--${s.color}) / 0.4)` } : {}} />
            ))}
          </div>
          <button onClick={() => setActive((p) => (p + 1) % slides.length)} className="flex items-center gap-2 px-5 py-2.5 border-2 border-primary/20 text-muted-foreground font-display text-xs tracking-widest hover:border-primary/50 hover:text-primary hover:box-glow transition-all duration-300">
            NEXT <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
