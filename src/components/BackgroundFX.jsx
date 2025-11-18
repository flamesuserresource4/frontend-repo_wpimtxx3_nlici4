import { motion } from 'framer-motion';

// Global, fixed visual effects that persist during scroll
// Blended orange + blue flame glows with subtle motion
export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Vignette for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />

      {/* Orange flame glow (bottom-left) */}
      <motion.div
        initial={{ opacity: 0.35 }}
        animate={{ opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-32 bottom-0 h-[70vh] w-[70vh] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255,120,40,0.35), rgba(255,120,40,0.18) 40%, transparent 65%)',
        }}
      />

      {/* Blue flame glow (top-right) */}
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-24 -top-10 h-[65vh] w-[65vh] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(56,189,248,0.32), rgba(56,189,248,0.16) 40%, transparent 65%)',
        }}
      />

      {/* Soft crossfade in the center for cohesion */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 600px at 50% 55%, rgba(255,255,255,0.05), transparent 60%)',
        }}
      />
    </div>
  );
}
