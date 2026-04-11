import { Home, Activity, Calendar, Settings } from 'lucide-react';
import Link from 'next/link';

export default function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-panel pb-safe border-t border-outline-variant/15">
      <div className="flex items-center justify-around py-3 px-2">
        <NavItem href="/" icon={<Home size={24} />} label="Home" active />
        <NavItem href="/workouts" icon={<Activity size={24} />} label="Track" />
        <NavItem href="/history" icon={<Calendar size={24} />} label="History" />
        <NavItem href="/settings" icon={<Settings size={24} />} label="Settings" />
      </div>
    </nav>
  );
}

function NavItem({ href, icon, label, active }: { href: string; icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <Link 
      href={href} 
      className={`flex flex-col items-center gap-1 min-w-[64px]
        ${active ? 'text-primary' : 'text-on-surface-variant'}
      `}
    >
      {icon}
      <span className="text-[10px] font-medium">{label}</span>
      {active && <div className="absolute top-1 w-12 h-12 bg-primary/10 rounded-full -z-10 blur-xl" />}
    </Link>
  );
}
