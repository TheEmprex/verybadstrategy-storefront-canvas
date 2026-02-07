import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const ventures = [
  {
    name: "ProsperHub Media",
    category: "Digital Marketing",
    description: "Multi-million dollar digital marketing company built from scratch. Performance-first, data-driven growth for brands that want results.",
    status: "Active",
  },
  {
    name: "VBS Advisory",
    category: "Strategic Advisory",
    description: "PE-grade advisory for businesses navigating capital raises, deal structuring, and growth strategy.",
    status: "Active",
  },
  {
    name: "VBS Ventures",
    category: "Investments",
    description: "Selective investments in high-conviction opportunities at the intersection of finance, data, and digital.",
    status: "Active",
  },
];

const VenturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 sm:py-28 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 sm:mb-20 text-center"
        >
          <span className="text-[10px] sm:text-xs font-body font-medium tracking-[0.3em] uppercase text-primary mb-3 sm:mb-4 block">
            Portfolio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            What we're building<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.name}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 p-6 sm:p-8 rounded-lg border border-border bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-500 cursor-default"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground">
                    {venture.name}
                  </h3>
                  <span className="text-[10px] font-body font-medium tracking-wider uppercase text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    {venture.status}
                  </span>
                </div>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  {venture.category}
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {venture.description}
                </p>
              </div>
              <ArrowUpRight
                size={20}
                className="text-muted-foreground group-hover:text-primary transition-colors duration-300 flex-shrink-0 hidden sm:block"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenturesSection;
