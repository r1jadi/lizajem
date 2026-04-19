import { motion } from "framer-motion";

const events = [
  { date: "The Day We Met", text: "A glance. A smile. The whole world tilted softly toward you." },
  { date: "Our First Date", text: "Hours felt like minutes. I knew, even then, I wanted forever." },
  { date: "Our Special Trip", text: "New skies, same hands. Anywhere with you becomes home." },
  { date: "My Favorite Memory", text: "The quiet one — when the world disappeared and only we remained." },
];

export function Timeline() {
  return (
    <section className="relative py-28 md:py-40 px-6 bg-romance overflow-hidden">
      <div className="absolute inset-0 bg-glow opacity-50" />
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <p className="font-script text-2xl text-primary mb-3">our story so far</p>
          <h2 className="font-display text-4xl md:text-6xl italic">A Timeline of Us</h2>
        </motion.div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/60 to-transparent md:-translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {events.map((e, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: left ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.9 }}
                  className={`relative flex md:items-center ${left ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-5 h-5 rounded-full bg-primary animate-pulse-glow" />
                  </div>

                  {/* Card */}
                  <div className={`pl-12 md:pl-0 md:w-1/2 ${left ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <div className="glass rounded-2xl p-6 md:p-8 shadow-soft">
                      <p className="font-script text-2xl text-primary mb-2">{e.date}</p>
                      <p className="font-display text-lg md:text-xl text-foreground/85 italic leading-relaxed">
                        {e.text}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
