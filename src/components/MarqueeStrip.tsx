import { motion } from "framer-motion";

const words = [
  "Strategy",
  "•",
  "Advisory",
  "•",
  "Ventures",
  "•",
  "Analysis",
  "•",
  "Operations",
  "•",
  "Growth",
  "•",
  "Innovation",
  "•",
  "Strategy",
  "•",
  "Advisory",
  "•",
  "Ventures",
  "•",
  "Analysis",
  "•",
  "Operations",
  "•",
  "Growth",
  "•",
  "Innovation",
  "•",
];

const MarqueeStrip = () => {
  return (
    <div className="relative overflow-hidden border-y border-border/50 bg-card/50 py-4 sm:py-5">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap">
        {words.map((word, i) => (
          <span
            key={i}
            className={`mx-3 sm:mx-4 font-display text-sm sm:text-base font-medium ${
              word === "•" ? "text-primary" : "text-muted-foreground/70"
            }`}
          >
            {word}
          </span>
        ))}
        {words.map((word, i) => (
          <span
            key={`dup-${i}`}
            className={`mx-3 sm:mx-4 font-display text-sm sm:text-base font-medium ${
              word === "•" ? "text-primary" : "text-muted-foreground/70"
            }`}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
