'use client';
import { Dumbbell, AlignEndHorizontal, Activity, Pencil, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Split } from '@/app/add-workout/page';

const INITIAL_DEFAULTS: Split[] = [
  {
    id: 'default-1',
    name: 'Push Day',
    focus: 'Hypertrophy',
    exercises: Array(8).fill({ id: 'mock', name: 'Mock Exercise', type: 'Primary' }),
  },
  {
    id: 'default-2',
    name: 'Legs',
    focus: 'Endurance',
    exercises: Array(12).fill({ id: 'mock', name: 'Mock Exercise', type: 'Primary' }),
  },
  {
    id: 'default-3',
    name: 'Pull Day',
    focus: 'Strength',
    exercises: Array(9).fill({ id: 'mock', name: 'Mock Exercise', type: 'Primary' }),
  }
];

export default function ClientSplits() {
  const router = useRouter();
  const [splits, setSplits] = useState<Split[] | null>(null);
  const [modalConfig, setModalConfig] = useState<{ isOpen: boolean, type: 'edit' | 'delete', splitId: string, splitName: string } | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('kinetic_splits');
    if (saved) {
      setSplits(JSON.parse(saved));
    } else {
      localStorage.setItem('kinetic_splits', JSON.stringify(INITIAL_DEFAULTS));
      setSplits(INITIAL_DEFAULTS);
    }
  }, []);

  const handleConfirm = () => {
    if (!modalConfig || !splits) return;

    if (modalConfig.type === 'delete') {
      const updatedSplits = splits.filter(s => s.id !== modalConfig.splitId);
      setSplits(updatedSplits);
      localStorage.setItem('kinetic_splits', JSON.stringify(updatedSplits));
      setModalConfig(null);
    } else if (modalConfig.type === 'edit') {
      router.push(`/add-workout?id=${modalConfig.splitId}`);
    }
  };

  const getStyleForFocus = (focus: string) => {
    switch (focus) {
      case 'Hypertrophy': return { Icon: Dumbbell, color: 'text-primary', bg: 'bg-primary/10 border-transparent', subtitle: '8 Exercises' };
      case 'Endurance': return { Icon: AlignEndHorizontal, color: 'text-tertiary', bg: 'bg-tertiary/10 border-transparent', subtitle: '12 Exercises' };
      case 'Strength': return { Icon: Activity, color: 'text-primary-dim', bg: 'bg-primary-dim/10 border-transparent', subtitle: '9 Exercises' };
      default: return { Icon: Dumbbell, color: 'text-on-surface-variant', bg: 'bg-surface-container-highest border-outline-variant/20', subtitle: 'Custom Protocol' };
    }
  };

  if (splits === null) return <div className="h-40 animate-pulse bg-surface-container-low rounded-2xl w-full"></div>;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {splits.map((split) => {
          const style = getStyleForFocus(split.focus);
          const Icon = style.Icon;

          return (
            <div key={split.id} className="bg-surface-container-low p-6 flex flex-col rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border ${style.bg}`}>
                  <Icon className={style.color} size={24} />
                </div>
                <span className="text-on-surface-variant text-xs bg-surface-container px-3 py-1 rounded-full font-medium">{split.focus}</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-1">{split.name}</h3>
              <p className="text-on-surface-variant text-sm mb-8 font-medium">
                {split.focus !== 'Custom' ? style.subtitle : `${split.exercises.length} Exercises • ${style.subtitle}`}
              </p>

              <div className="flex gap-3 mt-auto">
                <button className="flex-1 bg-kinetic-gradient text-on-primary font-bold py-3 rounded-full active:scale-95 transition-transform flex items-center justify-center">
                  Start
                </button>
                <button
                  onClick={() => setModalConfig({ isOpen: true, type: 'edit', splitId: split.id, splitName: split.name })}
                  className="px-4 bg-surface-container text-on-surface rounded-full hover:bg-surface-container-highest transition-colors active:scale-95 flex items-center justify-center"
                >
                  <Pencil size={18} />
                </button>
                <button
                  onClick={() => setModalConfig({ isOpen: true, type: 'delete', splitId: split.id, splitName: split.name })}
                  className="px-4 bg-surface-container text-outline-variant hover:text-error hover:bg-error/10 rounded-full transition-colors active:scale-95 flex items-center justify-center"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {modalConfig && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div className="bg-surface-container p-6 rounded-2xl max-w-sm w-full border border-outline-variant/20 shadow-2xl">
            <h3 className="text-xl font-display font-bold text-on-surface mb-2">
              {modalConfig.type === 'delete' ? 'Delete Split?' : 'Edit Split?'}
            </h3>
            <p className="text-sm text-on-surface-variant mb-6">
              Are you sure you want to {modalConfig.type} <strong>{modalConfig.splitName}</strong>?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setModalConfig(null)}
                className="flex-1 px-4 py-3 bg-surface-container-highest hover:bg-surface-variant text-on-surface rounded-full font-bold transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className={`flex-1 px-4 py-3 rounded-full font-bold text-on-primary transition-all shadow-lg ${modalConfig.type === 'delete' ? 'bg-error shadow-error/20' : 'bg-primary shadow-primary/20'}`}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
