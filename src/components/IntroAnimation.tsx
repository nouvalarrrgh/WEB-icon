import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);
  const [text, setText] = useState("");
  const fullText = "PRESS START";

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 3000),
      setTimeout(() => setPhase(4), 4000),
      setTimeout(() => onComplete(), 4600),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  useEffect(() => {
    if (phase >= 2) {
      let i = 0;
      const interval = setInterval(() => {
        if (i <= fullText.length) {
          setText(fullText.slice(0, i));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [phase]);

  return (
    <AnimatePresence>
      {phase < 4 && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden crt-overlay"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Pixel grid background */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(hsl(var(--retro-green) / 0.1) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--retro-green) / 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "32px 32px",
            }}
          />

          {/* Falling pixel particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: "-5%",
                  backgroundColor: ["hsl(44,79%,54%)", "hsl(25,82%,61%)", "hsl(219,71%,42%)", "hsl(0,72%,52%)", "hsl(119,78%,36%)"][i % 5],
                }}
                animate={{
                  y: [0, window.innerHeight * 1.2],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  delay: Math.random() * 2,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          <div className="relative text-center z-10">
            {/* Coin insert prompt */}
            {phase >= 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-8"
              >
                <p className="font-display text-[10px] sm:text-xs text-retro-cyan text-glow-cyan tracking-widest">
                  INSERT COIN ★ 1 CREDIT
                </p>
              </motion.div>
            )}

            {/* Logo */}
            {phase >= 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="font-display text-4xl sm:text-7xl font-bold leading-relaxed">
                  <span className="gradient-text">ICON</span>
                  <motion.span
                    className="text-retro-yellow text-glow-yellow"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.5, repeat: 2 }}
                  >
                    .LAB
                  </motion.span>
                </h1>
              </motion.div>
            )}

            {/* Typing text */}
            {phase >= 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6"
              >
                <p className="font-display text-[8px] sm:text-[10px] text-primary text-glow tracking-[0.3em]">
                  {text}
                  <span className="inline-block w-2 h-3 bg-primary ml-1 animate-pulse-glow" />
                </p>
              </motion.div>
            )}

            {/* XP loading bar */}
            {phase >= 2 && (
              <motion.div className="mt-8 w-56 mx-auto">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-display text-retro-yellow text-glow-yellow">LV.1</span>
                  <div className="flex-1 h-3 border-2 border-primary/50 bg-background p-px">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5, ease: "linear" }}
                      style={{ imageRendering: "pixelated" }}
                    />
                  </div>
                  <span className="text-[10px] font-display text-retro-yellow text-glow-yellow">LV.2</span>
                </div>
                <motion.p
                  className="text-[10px] text-muted-foreground font-display tracking-widest"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0, 1] }}
                  transition={{ duration: 0.6, times: [0, 0.3, 0.6, 1] }}
                >
                  LOADING...
                </motion.p>
              </motion.div>
            )}

            {/* Score display */}
            {phase >= 1 && (
              <motion.div
                className="absolute -top-16 left-1/2 -translate-x-1/2 flex gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="text-center">
                  <p className="font-display text-[8px] text-muted-foreground">1UP</p>
                  <p className="font-display text-[10px] text-primary text-glow">00000</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-[8px] text-muted-foreground">HI-SCORE</p>
                  <p className="font-display text-[10px] text-accent text-glow-yellow">99999</p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
