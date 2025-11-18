import { Mail, MessageSquareHeart } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,90,31,0.05),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <MessageSquareHeart className="h-4 w-4 text-orange-400" />
          <span className="text-xs uppercase tracking-[0.2em] text-orange-300/90">Begin the Conversation</span>
        </div>
        <h3 className="mt-6 text-3xl font-bold md:text-4xl">Ready to step into the fire?</h3>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">If you feel the pull, trust it. Share a few lines about your work and where you are being called. We’ll explore what path serves now.</p>

        <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 text-left">
          <input type="text" placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-orange-500/50" />
          <input type="email" placeholder="Your email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-orange-500/50" />
          <textarea placeholder="What are you creating? Where do you need courage or clarity?" rows="5" className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-orange-500/50"></textarea>
          <button className="rounded-full bg-gradient-to-r from-orange-600 to-red-500 px-6 py-3 font-semibold shadow-lg shadow-orange-900/40 transition hover:brightness-110">Send</button>
          <p className="text-center text-xs text-white/50">Direct email: <a href="mailto:hello@renfox.co" className="text-orange-300 hover:text-orange-200">hello@renfox.co</a></p>
        </div>
      </div>
    </section>
  );
}
