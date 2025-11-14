import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Aurelia 60",
    subtitle: "2-zone induction • 60cm",
    price: "$1,499",
    image: "https://images.unsplash.com/photo-1750816204148-5d02aff367cb?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBdXJlbGlhJTIwNjB8ZW58MHwwfHx8MTc2MzE2MTQ1Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
  },
  {
    name: "Aurelia 80",
    subtitle: "3-zone induction • 80cm",
    price: "$2,199",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Aurelia Pro 90",
    subtitle: "4-zone induction • 90cm",
    price: "$3,299",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function Collection() {
  return (
    <section id="collection" className="relative bg-[#0a0a0b] text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Hobs Collection</h2>
            <p className="mt-2 text-white/70">Minimal silhouettes. Monumental performance.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm text-white/80 hover:text-white">
            View all <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">{p.name}</h3>
                    <p className="text-sm text-white/60">{p.subtitle}</p>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">{p.price}</span>
                </div>
                <button className="mt-4 w-full rounded-xl bg-gradient-to-br from-amber-300 to-yellow-600 py-2.5 text-sm font-medium text-black hover:brightness-110">Explore</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
