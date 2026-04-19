import { motion } from "framer-motion";
import { FloatingHearts } from "./FloatingHearts";
import { Twinkles } from "./Twinkles";

export function Hero({ onBegin }: { onBegin: () => void }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-romance px-6">
      <div className="absolute inset-0 bg-glow" />
      <Twinkles count={40} />
      <FloatingHearts count={22} variant="hearts" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-script text-2xl md:text-3xl text-primary mb-6"
        >
          ~ for my Lizë ~
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground text-glow leading-[1.05] mb-8"
        >
          For the Love of <br />
          My Life, <span className="italic text-primary">Lizë </span>
          <span className="inline-block animate-float-soft">❤️</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-lg md:text-2xl text-muted-foreground italic max-w-2xl mx-auto mb-12 font-display"
        >
          This is just a small piece of how much you mean to me.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={onBegin}
          className="group relative inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-primary-foreground font-display text-lg md:text-xl tracking-wide animate-pulse-glow"
        >
          <span className="relative z-10">Click to Begin Our Story</span>
          <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/60"
        >
          <div className="flex flex-col items-center gap-2 animate-float-soft">
            <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
            <span className="text-xl">↓</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
