import BackgroundFX from './components/BackgroundFX';
import Hero from './components/Hero';
import Energies from './components/Energies';
import Pathways from './components/Pathways';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Global flame effects (orange + blue) that persist while scrolling */}
      <BackgroundFX />

      {/* Hero with Spline full-width cover */}
      <Hero />

      {/* Energies: warrior, magician, fire */}
      <Energies />

      {/* Pathways / offers */}
      <Pathways />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/80 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} RenFox — Courage in action. Wisdom in motion.
      </footer>
    </div>
  );
}

export default App;
