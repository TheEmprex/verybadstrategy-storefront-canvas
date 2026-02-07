import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-20 sm:py-28 md:py-32 relative noise-bg" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] sm:text-xs font-body font-medium tracking-[0.3em] uppercase text-primary mb-3 sm:mb-4 block">
              Contact
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
              Let's talk<span className="text-primary">.</span>
            </h2>
            <p className="font-body text-muted-foreground text-base sm:text-lg mb-8 sm:mb-12 max-w-lg mx-auto leading-relaxed px-2">
              Whether it's a venture, an advisory mandate, or just a conversation — 
              we're always open.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-4 justify-center items-center"
          >
            <a
              href="mailto:contact@verybadstrategy.com"
              className="group inline-flex items-center gap-2 sm:gap-3 font-body font-medium bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-sm hover:bg-primary/90 transition-all duration-300 glow-primary text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              <Mail size={18} />
              <span className="truncate">contact@verybadstrategy.com</span>
              <ArrowUpRight
                size={16}
                className="flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
            className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mt-16 sm:mt-20"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
