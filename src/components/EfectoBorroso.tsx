// FadeInSection.tsx
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  duration: number
}

export default function EfectoBorroso({ children, duration }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: duration, ease: "easeOut" }}
      viewport={{ once: true, amount: "some" }}
    >
      {children}
    </motion.div>
  );
}
