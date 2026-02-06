import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="text-xs font-body font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Bold moves require
              <br />
              <span className="text-muted-foreground">bold thinking.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="font-body text-secondary-foreground leading-relaxed text-lg">
                Very Bad Strategy LLC is a holding company and strategic 
                advisory firm focused on identifying high-potential opportunities 
                across emerging markets and underserved industries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="font-body text-muted-foreground leading-relaxed">
                Our name reflects our philosophy: the best strategies often look 
                unconventional from the outside. We pride ourselves on contrarian 
                thinking, disciplined execution, and delivering measurable outcomes 
                for every venture we undertake.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-border"
          >
            {[
              { value: "Strategic", label: "Thinking" },
              { value: "Disciplined", label: "Execution" },
              { value: "Contrarian", label: "Approach" },
              { value: "Measurable", label: "Results" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-xl md:text-2xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-muted-foreground tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
