import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    phase: "Foundation",
    title: "Quantitative Roots & Masters in Finance",
    description:
      "Maxime and Lucas both hold Masters in Finance from top European institutions. Their shared quantitative background laid the groundwork for a rigorous, data-driven approach to everything that followed.",
  },
  {
    phase: "PE Secondaries",
    title: "Part of the Largest Fund Raise in History",
    description:
      "Together, they joined one of Europe's leading private equity secondaries teams — and were part of the group that raised the largest fund ever in the space, totaling over €30 billion. An experience that shaped their understanding of institutional capital at scale.",
  },
  {
    phase: "Private Debt",
    title: "Expanding into Credit Markets",
    description:
      "Building on their secondaries experience, they developed deep expertise in private debt — structuring and executing transactions across the credit spectrum, from senior secured to mezzanine strategies.",
  },
  {
    phase: "Digital & Data",
    title: "A Growing Passion Turned Expertise",
    description:
      "Along the way, a shared interest in data analytics and digital marketing kept growing. What started as curiosity became real responsibility — leading data advisory initiatives and building digital marketing capabilities within institutional environments.",
  },
  {
    phase: "Today",
    title: "Very Bad Strategy",
    description:
      "VBS is the convergence of it all: institutional-grade financial expertise, a deep understanding of data, and a hands-on approach to digital strategy. Maxime and Lucas founded VBS to bring private equity discipline to new ventures and advisory mandates.",
  },
];

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="story" className="py-20 sm:py-28 md:py-32 relative noise-bg" ref={ref}>
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-[10px] sm:text-xs font-body font-medium tracking-[0.3em] uppercase text-primary mb-3 sm:mb-4 block">
            Our Story
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
            Built on
            <span className="text-muted-foreground"> experience.</span>
          </h2>
          <p className="font-body text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            Maxime &amp; Lucas — two quants-trained finance professionals who went from raising 
            the largest PE secondaries fund in history to building expertise across private debt, 
            data analytics, and digital strategy.
          </p>
        </motion.div>

        {/* Founders badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-3 sm:gap-5 px-6 sm:px-8 py-4 sm:py-5 rounded-lg border border-border bg-card/80 backdrop-blur-sm">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center z-10">
                <span className="font-display text-sm sm:text-base font-bold text-primary">M</span>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center">
                <span className="font-display text-sm sm:text-base font-bold text-primary">L</span>
              </div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="font-display text-sm sm:text-base font-semibold text-card-foreground">
                Maxime &amp; Lucas
              </p>
              <p className="font-body text-[10px] sm:text-xs text-muted-foreground">
                Co-Founders · MSc Finance · Quants Background
              </p>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />

            <div className="space-y-10 sm:space-y-14">
              {milestones.map((item, index) => (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                  className="relative pl-12 sm:pl-16"
                >
                  {/* Dot */}
                  <div className="absolute left-2.5 sm:left-4 top-1 w-3 h-3 rounded-full border-2 border-primary bg-background" />

                  <span className="text-[10px] sm:text-xs font-body font-medium tracking-[0.2em] uppercase text-primary mb-1.5 block">
                    {item.phase}
                  </span>
                  <h4 className="font-display text-base sm:text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-20 sm:mt-28 max-w-4xl mx-auto"
        >
          {[
            { value: "€30Bn+", label: "Largest PE Secondaries Fund" },
            { value: "MSc", label: "Finance · Quants" },
            { value: "Debt & Equity", label: "Full-Spectrum Experience" },
            { value: "Data & Digital", label: "Marketing Expertise" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="text-center p-4 sm:p-6 rounded-lg border border-border/50 bg-card/50"
            >
              <div className="font-display text-base sm:text-lg font-bold text-foreground mb-0.5">
                {stat.value}
              </div>
              <div className="font-body text-[10px] sm:text-xs text-muted-foreground tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
