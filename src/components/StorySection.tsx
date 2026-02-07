import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="story" className="py-20 sm:py-28 md:py-32 relative noise-bg" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-20"
        >
          <span className="text-[10px] sm:text-xs font-body font-medium tracking-[0.3em] uppercase text-primary mb-3 sm:mb-4 block">
            Our Story
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 sm:mb-8">
            We didn't plan this<span className="text-primary">.</span>
          </h2>
        </motion.div>

        {/* The actual story — conversational, not a timeline */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            <p className="font-body text-secondary-foreground text-base sm:text-lg leading-relaxed">
              Maxime and Lucas met working in private equity. Both had Masters in Finance, 
              both were quants by training, and both ended up on the same secondaries team — 
              the one that raised over €30 billion, the largest PE secondaries fund ever.
            </p>

            <p className="font-body text-muted-foreground text-sm sm:text-base leading-relaxed">
              They spent years in the trenches. Private debt, credit structuring, 
              institutional fundraising — the kind of work where precision isn't optional. 
              Along the way, they kept getting pulled toward something else: data and digital 
              marketing. It started as a side interest. Then they were leading data advisory 
              projects and building digital strategies inside institutional environments.
            </p>

            <p className="font-body text-muted-foreground text-sm sm:text-base leading-relaxed">
              Maxime left first. Walked away from finance, started his own companies — 
              ProsperHub Media among them — and built them into multi-million dollar businesses. 
              No playbook, no safety net. Just the skillset he'd sharpened over years in PE, 
              applied to building things from scratch.
            </p>

            <p className="font-body text-muted-foreground text-sm sm:text-base leading-relaxed">
              Lucas followed this year. Same instinct, same conclusion: the best work happens 
              when you own it entirely.
            </p>
          </motion.div>

          {/* The punchline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-border"
          >
            <p className="font-body text-secondary-foreground text-base sm:text-lg leading-relaxed">
              VBS exists because they kept seeing the same gap: sharp financial minds that 
              can't market, and sharp marketers that can't think in capital structures. 
              They do both. Advisory, ventures, growth — with the discipline of PE and the 
              speed of people who build their own things.
            </p>
          </motion.div>

          {/* Founders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 sm:mt-16 flex items-center gap-4"
          >
            <div className="flex -space-x-2">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center z-10">
                <span className="font-display text-xs sm:text-sm font-bold text-primary">M</span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center">
                <span className="font-display text-xs sm:text-sm font-bold text-primary">L</span>
              </div>
            </div>
            <div>
              <p className="font-display text-sm font-semibold text-foreground">
                Maxime &amp; Lucas
              </p>
              <p className="font-body text-[10px] sm:text-xs text-muted-foreground">
                Co-Founders, VBS
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
