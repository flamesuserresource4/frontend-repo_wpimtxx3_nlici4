import { Target, Compass, Anchor, Flame } from 'lucide-react';

export default function Pathways() {
  const paths = [
    {
      icon: Target,
      title: 'Ignite',
      desc: 'Clarify the mission, name the dragon, set a real plan. Leave with one bold move you will take this week.'
    },
    {
      icon: Compass,
      title: 'Forge',
      desc: 'Design an aligned offer and pragmatic process. Build it without fluff—simple, potent, executable.'
    },
    {
      icon: Anchor,
      title: 'Embody',
      desc: 'Systems, rituals, and boundaries that keep you solid while you serve. Discipline with heart.'
    }
  ];

  return (
    <section id="pathways" className="relative bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,90,31,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-orange-300/80">Ways to Work</p>
            <h2 className="text-3xl font-bold md:text-4xl">Pathways into the Fire</h2>
            <p className="mt-3 max-w-2xl text-white/70">Different entry points, same current: courageous action guided by inner wisdom. Choose the path that matches your season.</p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-red-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-900/40 transition hover:brightness-110">
            Book a Fit Call
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {paths.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 transition hover:border-orange-500/40">
              <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-orange-500/10 blur-2xl transition group-hover:bg-orange-500/20" />
              <Icon className="mb-3 h-6 w-6 text-orange-400" />
              <div className="mb-2 text-xl font-semibold">{title}</div>
              <p className="text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
