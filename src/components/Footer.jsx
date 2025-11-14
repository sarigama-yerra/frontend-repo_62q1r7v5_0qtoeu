export default function Footer() {
  return (
    <footer id="support" className="bg-[#0b0b0c] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-600 ring-1 ring-amber-300/30" />
              <span className="text-lg font-semibold tracking-wider text-white">Aurelia Hobs</span>
            </div>
            <p className="mt-4 text-white/70 max-w-sm">Refined induction hobs for spaces that demand silence, precision and presence.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white/80">Contact</h4>
            <ul className="mt-3 space-y-2 text-white/60 text-sm">
              <li>Concierge: concierge@aurelia.design</li>
              <li>Support: support@aurelia.design</li>
              <li>+1 (555) 012-3456</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white/80">Legal</h4>
            <ul className="mt-3 space-y-2 text-white/60 text-sm">
              <li>Warranty</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50">© {new Date().getFullYear()} Aurelia Appliances. All rights reserved.</div>
      </div>
    </footer>
  );
}
