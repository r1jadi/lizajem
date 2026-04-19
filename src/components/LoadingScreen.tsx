import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-romance"
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: [0.9, 1.1, 0.95, 1.05, 1], opacity: 1 }}
            transition={{ duration: 2.4, ease: "easeInOut" }}
            className="text-7xl text-primary text-glow mb-6"
          >
            ♥
          </motion.div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-script text-3xl md:text-4xl text-foreground/80 text-center px-6"
          >
            Preparing something special for you...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
