import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden noise-bg">
      {/* Background image with parallax feel */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Abstract dark strategic imagery"
          className="w-full h-full object-cover opacity-30 scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-4 sm:mb-6"
        >
          <span className="inline-block text-[10px] sm:text-xs font-body font-medium tracking-[0.3em] uppercase text-primary border border-primary/30 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
            Strategic Advisory & Ventures
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-[0.85] mb-6 sm:mb-8"
        >
          Very Bad
          <br />
          <span className="text-gradient-primary">Strategy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-md sm:max-w-xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2"
        >
          Unconventional thinking. Proven results. We challenge assumptions 
          and build strategies that others overlook.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
        >
          <a
            href="#about"
            className="font-body font-medium bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-3.5 rounded-sm hover:bg-primary/90 transition-all duration-300 glow-primary text-sm sm:text-base"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="font-body font-medium border border-border text-foreground px-6 sm:px-8 py-3 sm:py-3.5 rounded-sm hover:bg-accent transition-all duration-300 text-sm sm:text-base"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-body uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
