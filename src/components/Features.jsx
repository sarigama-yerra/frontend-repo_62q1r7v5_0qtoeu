import { Sparkles, Gauge, Flame, Shield, Droplets } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "SapphireGlass+ Surface",
    desc: "Ultra-hard, scratch-resistant glass with anti-smudge nano-coating for a pristine mirror finish.",
  },
  {
    icon: Gauge,
    title: "14-level Heat Precision",
    desc: "From delicate simmer to searing power, each zone delivers exact thermal control.",
  },
  {
    icon: Flame,
    title: "DualCore Induction",
    desc: "Two synchronized coils create a larger, uniform heat zone for oversized cookware.",
  },
  {
    icon: Shield,
    title: "SilentShield",
    desc: "Engineered airflow keeps cooling whisper-quiet even at sustained high output.",
  },
  {
    icon: Droplets,
    title: "Seamless Clean",
    desc: "Liquids never seep. One-wipe maintenance with hydrophobic edge sealing.",
  },
];

export default function Features() {
  return (
    <section id="technology" className="relative bg-[#0b0b0c] text-white">
      <div className="absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-amber-500/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl sm:text-4xl font-semibold">Technology that disappears. Performance that doesn't.</h2>
          <p className="max-w-xl text-white/70">Every surface, circuit and seam is designed to be invisible—until you need it. This is power, refined.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-yellow-600 text-black">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
