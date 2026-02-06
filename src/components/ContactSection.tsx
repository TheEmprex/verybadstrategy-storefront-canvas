import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-body font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
              Get In Touch
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Let's connect
              <span className="text-primary">.</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-12 max-w-lg mx-auto leading-relaxed">
              Interested in working together or learning more about what 
              we do? We'd love to hear from you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="mailto:contact@verybadstrategy.com"
              className="group inline-flex items-center gap-3 font-body font-medium bg-primary text-primary-foreground px-8 py-4 rounded-sm hover:bg-primary/90 transition-all duration-300 glow-primary"
            >
              <Mail size={18} />
              contact@verybadstrategy.com
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
            className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mt-20"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
