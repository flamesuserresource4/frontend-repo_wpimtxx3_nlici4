import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Flame, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,90,31,0.25),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-24 text-center text-white">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Flame className="h-4 w-4 text-orange-400" />
          <span className="text-xs uppercase tracking-[0.2em] text-orange-300/90">RenFox</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className="mx-auto mb-4 max-w-4xl text-4xl font-black leading-[1.1] sm:text-5xl md:text-6xl">
          Warrior Fire. Magician Wisdom.
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="mx-auto mb-8 max-w-2xl text-base text-white/80 md:text-lg">
          Catalyst for soul-driven entrepreneurs. Courage to face fear. Clarity to follow your true path—beyond what the world expects.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="flex flex-col items-center gap-3 sm:flex-row">
          <a href="#pathways" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-red-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-900/40 transition hover:brightness-110">
            Start Your Quest
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#energies" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/10">
            Explore the Path
          </a>
        </motion.div>
      </div>
    </section>
  );
}
