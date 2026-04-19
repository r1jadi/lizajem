import { motion } from "framer-motion";
import m1 from "@/assets/memory-1.jpg";
import m2 from "@/assets/memory-2.jpg";
import m3 from "@/assets/memory-3.jpg";
import m4 from "@/assets/memory-4.jpg";
import m5 from "@/assets/memory-5.jpg";
import m6 from "@/assets/memory-6.jpg";

const memories = [
  { src: m1, caption: "Our first date" },
  { src: m2, caption: "Our study dates" },
  { src: m3, caption: "Us driving around the city all the time" },
  { src: m4, caption: "Seeing space up close for the first time" },
  { src: m5, caption: "First anniversary" },
  { src: m6, caption: "Us just eating (secret talent)" },
];

export function Memories() {
  return (
    <section className="relative py-28 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <p className="font-script text-2xl text-primary mb-3">moments to keep</p>
          <h2 className="font-display text-4xl md:text-6xl italic mb-4">Our Memories</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Little frames of a story we keep writing — one heartbeat at a time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {memories.map((m, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl shadow-card cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={m.src}
                  alt={m.caption}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-script text-2xl md:text-3xl text-background drop-shadow">
                  {m.caption}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
