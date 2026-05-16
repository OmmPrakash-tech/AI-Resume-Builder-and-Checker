
import { Bell, Search, ArrowUpRight } from "lucide-react";

export default function TopBar({ title }) {
  return (
    <header className="flex items-center justify-between mb-8 sticky top-0 z-30 py-4 -mt-4 bg-void/40 backdrop-blur-md px-2">

      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-display font-black tracking-tight">
          {title}
        </h1>

        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/40">

          <span className="w-1 h-1 rounded-full bg-premium-emerald animate-pulse" />

          System Connected
        </div>
      </div>

      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="relative group hidden lg:block">

          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-premium-cyan transition-colors" />

          <input
            type="text"
            placeholder="Search items..."
            className="bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm w-64 outline-none focus:border-premium-cyan/50 transition-all"
          />
        </div>

        {/* Notification */}
        <button className="relative p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">

          <Bell className="w-5 h-5 text-white/60" />

          <span className="absolute top-2 right-2 w-2 h-2 bg-premium-purple rounded-full border-2 border-void" />
        </button>

        {/* Pro Button */}
        <button className="premium-btn text-xs px-4 py-2 hidden sm:flex items-center gap-2 shadow-[0_0_20px_rgba(124,58,237,0.3)]">

          <ArrowUpRight className="w-3 h-3" />

          Upgrade to Pro
        </button>
      </div>
    </header>
  );
}

