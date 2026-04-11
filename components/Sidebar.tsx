import { Home, Activity, Calendar, Settings } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-surface-container-low h-full p-6 sticky top-0 border-r border-outline-variant/15">
      <div className="flex items-center gap-2 mb-12">
        <div className="w-8 h-8 rounded-lg bg-kinetic-gradient flex items-center justify-center">
          <span className="text-on-primary font-display font-bold">K</span>
        </div>
        <span className="font-display font-bold text-xl text-on-surface">Kinetic Athlete</span>
      </div>

      <nav className="flex flex-col gap-2 flex-1">
        <NavItem href="/" icon={<Home size={20} />} label="Dashboard" active />
        <NavItem href="/workouts" icon={<Activity size={20} />} label="Workouts" />
        <NavItem href="/history" icon={<Calendar size={20} />} label="History" />
        <NavItem href="/settings" icon={<Settings size={20} />} label="Settings" />
      </nav>

      <div className="mt-auto pt-6 border-t border-outline-variant/15">
        <div className="bg-surface-container rounded-xl p-4 flex flex-col items-start gap-2">
          <span className="text-sm font-medium text-on-surface">Guest Mode</span>
          <span className="text-xs text-on-surface-variant">Sign in to sync your data across devices.</span>
          <button className="text-xs text-tertiary font-semibold uppercase tracking-wider mt-1">Sign In</button>
        </div>
      </div>
    </aside>
  );
}

function NavItem({ href, icon, label, active }: { href: string; icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium
        ${active ? 'bg-surface-container-high text-primary' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}
      `}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
