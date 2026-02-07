import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-20 sm:py-28 md:py-32 relative noise-bg" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12 sm:mb-16"
          >
            <span className="text-[10px] sm:text-xs font-body font-medium tracking-[0.3em] uppercase text-primary mb-3 sm:mb-4 block">
              About
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              The name is a joke<span className="text-primary">.</span>
              <br />
              <span className="text-muted-foreground">The work isn't.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="font-body text-secondary-foreground leading-relaxed text-base sm:text-lg">
                VBS is a holding company and advisory firm built by two ex-PE 
                professionals who got tired of the gap between institutional finance 
                and the real world of building businesses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="font-body text-muted-foreground leading-relaxed text-sm sm:text-base">
                We bring private equity rigor to ventures and advisory mandates. 
                That means actual due diligence, real financial modeling, and growth 
                strategies backed by data — not slide decks full of buzzwords. 
                We've raised capital at scale, built companies from zero, and we 
                know what works because we've done it ourselves.
              </p>
            </motion.div>
          </div>

          {/* What we bring — no buzzwords */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-14 sm:mt-20 pt-12 sm:pt-16 border-t border-border"
          >
            {[
              { value: "PE", label: "Background" },
              { value: "Founder", label: "Experience" },
              { value: "Data", label: "Driven" },
              { value: "Hands-on", label: "Always" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="text-center py-4"
              >
                <div className="font-display text-lg sm:text-xl md:text-2xl font-bold text-primary mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="font-body text-xs sm:text-sm text-muted-foreground tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
