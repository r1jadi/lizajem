import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative py-20 px-6 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="text-4xl mb-4 animate-float-soft">❤️</div>
        <p className="font-script text-4xl md:text-5xl text-primary text-glow mb-3">
          Forever yours
        </p>
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase">
          made with love · only for you
        </p>
      </motion.div>
    </footer>
  );
}
