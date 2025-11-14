import { Menu, Phone, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-600 ring-1 ring-amber-300/30" />
              <span className="text-lg font-semibold tracking-wider text-white">Aurelia Hobs</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
              <a href="#hobs" className="hover:text-white transition">Hobs</a>
              <a href="#technology" className="hover:text-white transition">Technology</a>
              <a href="#gallery" className="hover:text-white transition">Gallery</a>
              <a href="#support" className="hover:text-white transition">Support</a>
            </nav>
            <div className="flex items-center gap-3">
              <a href="#consult" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-600 px-4 py-2 text-sm font-medium text-black shadow-[0_0_0_1px_rgba(255,255,255,0.15)] hover:brightness-110 transition">
                <Phone className="h-4 w-4" /> Book consultation
              </a>
              <button className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white/80">
                <Menu className="h-5 w-5" />
              </button>
              <button className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white/80 hover:text-white">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
