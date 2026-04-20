'use client';
import { User, Bell } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {
  const [userMode, setUserMode] = useState<string | null>(null);

  useEffect(() => {
    setUserMode(localStorage.getItem('kinetic_user_mode'));
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-outline-variant/15 md:hidden">
      <div className="flex items-center justify-between px-4 h-16">
        <div className="flex items-center gap-2">
          {userMode === 'guest' ? (
            <>
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-on-primary font-display font-bold text-lg">GU</span>
              </div>
              <span className="font-display font-bold text-lg text-on-surface tracking-tight">Guest User</span>
            </>
          ) : (
            <>
              <div className="w-8 h-8 rounded-lg bg-kinetic-gradient flex items-center justify-center">
                <span className="text-on-primary font-display font-bold text-lg">K</span>
              </div>
              <span className="font-display font-bold text-lg text-on-surface tracking-tight">Kinetic Athlete</span>
            </>
          )}
        </div>

        <div className="flex items-center gap-3">
          <button className="text-on-surface-variant hover:text-on-surface transition-colors">
            <Bell size={20} />
          </button>
          <div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-on-surface-variant">
            <User size={18} />
          </div>
        </div>
      </div>
    </header>
  );
}
