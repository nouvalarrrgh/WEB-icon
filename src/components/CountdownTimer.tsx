import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const units = [
    { label: "DAY", value: timeLeft.days },
    { label: "HRS", value: timeLeft.hours },
    { label: "MIN", value: timeLeft.minutes },
    { label: "SEC", value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center gap-3 sm:gap-5">
      {units.map((u, i) => (
        <div key={u.label} className="flex flex-col items-center">
          <div className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center border-2 border-primary/50 bg-card/80 box-glow p-3 sm:p-4">
            <span className="font-display text-2xl sm:text-4xl text-primary text-glow">
              {String(u.value).padStart(2, "0")}
            </span>
          </div>
          <span className="font-display text-[8px] text-muted-foreground mt-2 tracking-widest">
            {u.label}
          </span>
          {i < units.length - 1 && (
            <span className="hidden sm:block absolute translate-x-[3.8rem] mt-5 text-primary text-glow font-display text-lg">:</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
