import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, TrendingUp, Users } from "lucide-react";

const timeline = [
  {
    year: "Education",
    title: "Masters in Finance",
    description:
      "Both founders hold advanced degrees in finance from top European institutions, building a rigorous foundation in quantitative analysis, portfolio theory, and capital markets.",
  },
  {
    year: "Private Equity",
    title: "Institutional Track Record",
    description:
      "Years spent at leading private equity firms across fundraising, secondaries, and debt strategies — executing some of the largest transactions in the European market.",
  },
  {
    year: "Expertise",
    title: "Data-Driven Strategy",
    description:
      "Deep specialization in marketing intelligence, data analytics, and investor relations — combining quantitative rigor with creative go-to-market execution.",
  },
  {
    year: "Today",
    title: "Very Bad Strategy",
    description:
      "Combining institutional-grade financial expertise with an entrepreneurial edge. VBS was founded to apply private equity discipline to new ventures and advisory engagements.",
  },
];

const founders = [
  {
    name: "Maxime",
    role: "Co-Founder",
    background: [
      "Private Equity & Secondaries",
      "Institutional Fundraising",
      "Masters in Finance",
    ],
  },
  {
    name: "Lucas",
    role: "Co-Founder",
    background: [
      "Private Equity & Debt",
      "Marketing & Data Strategy",
      "Masters in Finance",
    ],
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
            Two finance professionals who spent years in private equity's most demanding 
            arenas — now channeling that expertise into something of their own.
          </p>
        </motion.div>

        {/* Founders */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto mb-20 sm:mb-28">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group relative p-6 sm:p-8 rounded-lg border border-border bg-card/80 backdrop-blur-sm hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="font-display text-lg font-bold text-primary">
                    {founder.name[0]}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-card-foreground">
                    {founder.name}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-primary">
                    {founder.role}
                  </p>
                </div>
              </div>

              <div className="space-y-2.5">
                {founder.background.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    <span className="font-body text-xs sm:text-sm text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-display text-xl sm:text-2xl font-semibold text-center mb-12 sm:mb-16"
          >
            The Journey
          </motion.h3>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />

            <div className="space-y-10 sm:space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                  className="relative pl-12 sm:pl-16"
                >
                  {/* Dot */}
                  <div className="absolute left-2.5 sm:left-4 top-1 w-3 h-3 rounded-full border-2 border-primary bg-background" />

                  <span className="text-[10px] sm:text-xs font-body font-medium tracking-[0.2em] uppercase text-primary mb-1.5 block">
                    {item.year}
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

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-20 sm:mt-28 max-w-4xl mx-auto"
        >
          {[
            { icon: Briefcase, value: "PE", label: "Background" },
            { icon: GraduationCap, value: "MSc", label: "Finance" },
            { icon: TrendingUp, value: "Debt & Equity", label: "Expertise" },
            { icon: Users, value: "2", label: "Founders" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              className="text-center p-4 sm:p-6 rounded-lg border border-border/50 bg-card/50"
            >
              <stat.icon size={20} className="text-primary mx-auto mb-2 sm:mb-3" />
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
