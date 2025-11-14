import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#0a0a0b] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,215,160,0.25),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-28">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-widest text-white/70 uppercase">Luxury kitchen hobs</p>
          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight tracking-tight">
            Precision-crafted hobs for the modern, luxury kitchen
          </h1>
          <p className="mt-5 text-white/70 max-w-xl">Seamless glass. Intelligent heat. Whisper-quiet performance. Our premium hob range blends sculptural design with professional-grade control.</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#collection" className="pointer-events-auto rounded-xl bg-gradient-to-br from-amber-300 to-yellow-600 px-5 py-3 text-black font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.15)] hover:brightness-110 transition">Explore Collection</a>
            <a href="#technology" className="pointer-events-auto rounded-xl border border-white/20 px-5 py-3 text-white/90 hover:bg-white/10 transition">See Technology</a>
          </div>
        </div>
      </div>
    </section>
  );
}
