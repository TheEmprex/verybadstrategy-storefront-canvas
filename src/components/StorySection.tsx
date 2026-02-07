import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
            Two paths,
            <span className="text-muted-foreground"> one vision.</span>
          </h2>
        </motion.div>

        {/* Founders badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-3 sm:gap-5 px-6 sm:px-8 py-4 sm:py-5 rounded-lg border border-border bg-card/80 backdrop-blur-sm">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center z-10">
                <span className="font-display text-sm sm:text-base font-bold text-primary">M</span>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center">
                <span className="font-display text-sm sm:text-base font-bold text-primary">L</span>
              </div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="font-display text-sm sm:text-base font-semibold text-card-foreground">
                Maxime &amp; Lucas
              </p>
              <p className="font-body text-[10px] sm:text-xs text-muted-foreground">
                Co-Founders · VBS
              </p>
            </div>
          </div>
        </motion.div>

        {/* Narrative blocks */}
        <div className="max-w-2xl mx-auto space-y-12 sm:space-y-16">
          {[
            {
              title: "Where it started",
              text: "Maxime and Lucas met in the world of private equity. Both quants-trained with Masters in Finance, they worked side by side on one of Europe's leading secondaries teams — part of the group that closed the largest PE secondaries fundraise in history. They built deep expertise across private debt, equity, and institutional capital markets.",
            },
            {
              title: "The spark",
              text: "Along the way, a shared obsession for data analytics and digital marketing kept growing. What started as curiosity turned into real responsibility — leading data advisory initiatives and building digital strategies within institutional environments. The corporate world gave them the skills, but not the freedom.",
            },
            {
              title: "Maxime's leap",
              text: "Maxime left finance first. He launched his own ventures — including ProsperHub Media — and built them into multi-million dollar businesses. No safety net, no corporate playbook. Just execution, conviction, and the skills sharpened over years in PE.",
            },
            {
              title: "Lucas follows",
              text: "Inspired by what was being built outside the walls of institutional finance, Lucas made his move this year. The reunion was inevitable. Two people with the same background, the same ambition, and a shared belief that the best strategies come from those who've actually built something.",
            },
            {
              title: "VBS is born",
              text: "Very Bad Strategy is the convergence of everything — institutional-grade financial expertise, entrepreneurial grit, and a deep understanding of data and digital growth. Maxime and Lucas founded VBS to bring private equity discipline to advisory mandates and new ventures. Not theory. Results.",
            },
          ].map((block, index) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + index * 0.12 }}
            >
              <span className="text-[10px] sm:text-xs font-body font-medium tracking-[0.25em] uppercase text-primary mb-2 block">
                {block.title}
              </span>
              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                {block.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
