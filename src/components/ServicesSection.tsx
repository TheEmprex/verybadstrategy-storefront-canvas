import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Zap, Target, Shuffle } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Bad Ideas, Executed Well",
    description:
      "We take the ideas everyone else rejects and turn them into something nobody expected.",
  },
  {
    icon: Zap,
    title: "Rapid Experimentation",
    description:
      "Move fast. Break things. Put them back together in a more interesting shape.",
  },
  {
    icon: Target,
    title: "Strategic Chaos",
    description:
      "Sometimes the best path forward is the one nobody thought to take.",
  },
  {
    icon: Shuffle,
    title: "Whatever Comes Next",
    description:
      "We're building the plane while flying it. Buckle up.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-body font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            Our "Services"
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="group p-8 rounded-lg border border-border bg-card hover:border-glow/30 transition-all duration-500 hover:glow-primary"
            >
              <service.icon
                size={28}
                className="text-primary mb-5 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="font-display text-xl font-semibold mb-3 text-card-foreground">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
