import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="border-t border-border relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main footer */}
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="font-display text-xl font-bold tracking-tight text-foreground mb-3">
              VBS<span className="text-primary">.</span>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
              Very Bad Strategy LLC. Unconventional thinking, disciplined execution.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display text-sm font-semibold text-foreground mb-4 tracking-wide">
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display text-sm font-semibold text-foreground mb-4 tracking-wide">
              Legal
            </h4>
            <div className="flex flex-col gap-2.5">
              <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-display text-sm font-semibold text-foreground mb-4 tracking-wide">
              Contact
            </h4>
            <a
              href="mailto:contact@verybadstrategy.com"
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 break-all"
            >
              contact@verybadstrategy.com
            </a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Very Bad Strategy LLC. All rights reserved.
          </p>
          <p className="font-body text-xs text-text-dim">
            Designed with intention.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
