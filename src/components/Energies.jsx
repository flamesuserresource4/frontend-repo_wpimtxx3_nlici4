import { Sword, Sparkles, Flame } from 'lucide-react';

export default function Energies() {
  const items = [
    {
      icon: Sword,
      title: 'Warrior',
      subtitle: 'Courage & Action',
      desc: 'Cut through fear with decisive movement. Build momentum with grounded, pragmatic steps that honor your mission.'
    },
    {
      icon: Sparkles,
      title: 'Magician',
      subtitle: 'Wisdom & Vision',
      desc: 'Transmute challenge into insight. Align strategy with soul so your work becomes a living spell of service.'
    },
    {
      icon: Flame,
      title: 'Fire',
      subtitle: 'Devotion & Drive',
      desc: 'Channel the heat of purpose—focused, disciplined, and real. No fluff. Only what moves you forward.'
    }
  ];

  return (
    <section id="energies" className="relative bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,80,20,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-orange-300/80">Archetypal Current</p>
          <h2 className="text-3xl font-bold md:text-4xl">The Energies of RenFox</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">A fusion of embodied courage and clear seeing. This is the current that catalyzes soul-driven entrepreneurs.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map(({ icon: Icon, title, subtitle, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 transition hover:border-orange-500/40">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-orange-500/10 blur-2xl transition group-hover:bg-orange-500/20" />
              <Icon className="mb-4 h-6 w-6 text-orange-400" />
              <div className="mb-1 text-sm uppercase tracking-wider text-orange-300/80">{subtitle}</div>
              <div className="mb-2 text-xl font-semibold">{title}</div>
              <p className="text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
