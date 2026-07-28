import { motion } from 'framer-motion';

export default function Placeholder({ title }: { title: string }) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-warm-off-white px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-dark-charcoal mb-4">{title}</h1>
        <p className="text-muted-foreground text-lg">This page is currently under construction. Please check back later!</p>
      </motion.div>
    </div>
  );
}
