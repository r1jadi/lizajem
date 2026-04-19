import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import confetti from "canvas-confetti";

export function Surprise() {
  const [open, setOpen] = useState(false);

  const launch = () => {
    setOpen(true);
    const colors = ["#f9a8c0", "#fbcfe8", "#fde68a", "#fff1f2", "#f472b6"];
    const fire = (originX: number) => {
      confetti({
        particleCount: 80,
        spread: 70,
        startVelocity: 45,
        origin: { x: originX, y: 0.7 },
        colors,
        scalar: 1.1,
        shapes: ["circle"],
      });
    };
    fire(0.2);
    setTimeout(() => fire(0.5), 200);
    setTimeout(() => fire(0.8), 400);
    setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.6 },
        colors,
        scalar: 1.4,
      });
    }, 700);
  };

  return (
    <section className="relative py-28 md:py-40 px-6 bg-romance overflow-hidden">
      <div className="absolute inset-0 bg-glow opacity-70" />
      <div className="relative max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="font-script text-2xl text-primary mb-3">one more thing...</p>
          <h2 className="font-display text-4xl md:text-6xl italic mb-8">
            I have a little surprise for you
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={launch}
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-primary-foreground font-display text-lg md:text-xl animate-pulse-glow"
          >
            <span className="text-2xl">🎁</span>
            Click for a Surprise
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-6 bg-foreground/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 18, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-lg w-full glass rounded-3xl p-10 md:p-14 text-center shadow-glow"
              >
                <div className="text-6xl mb-6 animate-float-soft">❤️</div>
                <h3 className="font-display text-3xl md:text-5xl italic text-primary mb-6 text-glow">
                  I love you
                </h3>
                <p className="font-display text-lg md:text-2xl text-foreground/85 leading-relaxed">
                  more than words can ever express.
                  <br />
                  <span className="font-script text-primary text-2xl md:text-3xl">
                    Today, tomorrow, always.
                  </span>
                </p>
                <button
                  onClick={() => setOpen(false)}
                  className="mt-8 text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-[0.3em]"
                >
                  close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
