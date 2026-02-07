import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, BarChart3, Megaphone, Handshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  number: string;
}

const services: Service[] = [
  {
    icon: Handshake,
    title: "Advisory",
    description:
      "Strategic guidance rooted in PE discipline. We help businesses with capital strategy, deal structuring, and growth planning — the same frameworks we used managing billions.",
    number: "01",
  },
  {
    icon: TrendingUp,
    title: "Ventures",
    description:
      "We don't just advise — we build. From identifying opportunities to launching and scaling companies, we put our own capital and time on the line.",
    number: "02",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description:
      "Data strategy and advisory for businesses that want to stop guessing. We set up the systems, build the dashboards, and make the numbers actually useful.",
    number: "03",
  },
  {
    icon: Megaphone,
    title: "Digital Growth",
    description:
      "Performance marketing, acquisition strategy, and digital infrastructure. Built on the same data-driven approach we use across our own portfolio.",
    number: "04",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-20 sm:py-28 md:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 sm:mb-20 text-center"
        >
          <span className="text-[10px] sm:text-xs font-body font-medium tracking-[0.3em] uppercase text-primary mb-3 sm:mb-4 block">
            What We Do
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Four lanes<span className="text-primary">,</span> one approach<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="group relative p-6 sm:p-8 rounded-lg border border-border bg-card/80 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:glow-primary overflow-hidden"
            >
              <span className="absolute top-3 right-4 sm:top-4 sm:right-6 font-display text-4xl sm:text-5xl font-bold text-foreground/[0.03] group-hover:text-primary/[0.08] transition-colors duration-500">
                {service.number}
              </span>

              <service.icon
                size={24}
                className="text-primary mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="font-display text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-card-foreground">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground text-xs sm:text-sm leading-relaxed">
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
