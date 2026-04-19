import { motion } from "framer-motion";
import { FloatingHearts } from "./FloatingHearts";

const reasons = [
  { icon: "✨", title: "Your smile", text: "It quiets every storm I carry inside." },
  { icon: "🌙", title: "The way you understand me", text: "Without words, you read every silence." },
  { icon: "☕", title: "The little things", text: "Coffee made just right. A look that says 'I'm here.'" },
  { icon: "🌸", title: "Your kindness", text: "You make the whole world a softer place to live in." },
  { icon: "💫", title: "Your courage", text: "You face every day with a quiet, beautiful strength." },
  { icon: "❤️", title: "How you make everything better", text: "Just by being you. Just by being mine." },
];

export function Reasons() {
  return (
    <section className="relative py-28 md:py-40 px-6 overflow-hidden">
      <FloatingHearts count={14} variant="hearts" />
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <p className="font-script text-2xl text-primary mb-3">a few of countless, loqki</p>
          <h2 className="font-display text-4xl md:text-6xl italic">Reasons I Love You, Lizë</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="glass rounded-3xl p-8 shadow-soft hover:shadow-glow transition-shadow duration-500"
            >
              <div className="text-4xl mb-4 animate-float-soft" style={{ animationDelay: `${i * 0.3}s` }}>
                {r.icon}
              </div>
              <h3 className="font-display text-2xl italic text-primary mb-2">{r.title}</h3>
              <p className="text-foreground/75 leading-relaxed">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
