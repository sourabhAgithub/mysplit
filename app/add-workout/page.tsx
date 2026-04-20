'use client';
import { useState } from 'react';
import { Plus, Trash2, Dumbbell } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

export interface Exercise {
  id: string;
  name: string;
  type: string;
}

export interface Split {
  id: string;
  name: string;
  focus: string; // Hypertrophy | Endurance | Strength | Custom
  description?: string;
  exercises: Exercise[];
}

const DEFAULT_EXERCISES = [
  'Bench Press', 'Squat', 'Deadlift', 'Shoulder Press', 
  'Bicep Curl', 'Tricep Pushdown', 'Lat Pulldown', 'Leg Press'
];

export default function AddWorkout() {
  return (
    <Suspense fallback={<div className="animate-pulse h-screen bg-surface-container-lowest"></div>}>
      <AddWorkoutContent />
    </Suspense>
  );
}

function AddWorkoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get('id');

  const [splitName, setSplitName] = useState('');
  const [customExercise, setCustomExercise] = useState('');
  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    if (editId) {
      const saved = localStorage.getItem('kinetic_splits');
      if (saved) {
        const splits: Split[] = JSON.parse(saved);
        const splitToEdit = splits.find(s => s.id === editId);
        if (splitToEdit) {
          setSplitName(splitToEdit.name);
          setSelectedExercises(splitToEdit.exercises);
        }
      }
    }
  }, [editId]);

  const handleAddPredefined = (name: string) => {
    if (!selectedExercises.find(e => e.name === name)) {
      setSelectedExercises([...selectedExercises, {
        id: crypto.randomUUID(),
        name,
        type: 'Primary Movement'
      }]);
    }
  };

  const handleAddCustom = () => {
    if (customExercise.trim() !== '') {
      setSelectedExercises([...selectedExercises, {
        id: crypto.randomUUID(),
        name: customExercise.trim(),
        type: 'Accessory Movement'
      }]);
      setCustomExercise('');
    }
  };

  const handleRemove = (id: string) => {
    setSelectedExercises(selectedExercises.filter(e => e.id !== id));
  };

  const handleSaveSplit = () => {
    if (splitName.trim() === '' || selectedExercises.length === 0) {
      alert("Please enter a split name and select at least one exercise.");
      return;
    }

    const newSplit: Split = {
      id: crypto.randomUUID(),
      name: splitName.trim(),
      focus: 'Custom',
      exercises: selectedExercises,
    };

    // Load existing splits
    const existingSplitsJson = localStorage.getItem('kinetic_splits');
    let existingSplits: Split[] = existingSplitsJson ? JSON.parse(existingSplitsJson) : [];
    
    if (editId) {
      // Edit existing split
      existingSplits = existingSplits.map(s => s.id === editId ? { ...newSplit, id: editId } : s);
    } else {
      // Save new split
      existingSplits.push(newSplit);
    }
    
    localStorage.setItem('kinetic_splits', JSON.stringify(existingSplits));

    // Navigate to dashboard
    router.push('/');
  };

  return (
    <>
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-on-surface mb-2">
          {editId ? 'Edit Split' : 'New Split Name'}
        </h1>
        <p className="text-on-surface-variant font-sans text-base md:text-lg">
          {editId ? 'Update your precision movement protocol.' : 'Define your precision movement protocol.'}
        </p>
      </section>

      <div className="space-y-8 md:space-y-12">
        <div className="bg-surface-container-low p-5 md:p-8 rounded-xl ring-1 ring-outline-variant/15">
          <label className="block text-on-surface-variant font-sans text-sm uppercase tracking-widest mb-4" htmlFor="split-name">Split Identity</label>
          <input 
            className="w-full bg-surface-container-lowest border-none rounded-full px-6 py-4 md:px-8 md:py-6 text-xl md:text-2xl font-display text-primary placeholder:text-outline/40 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all font-bold" 
            id="split-name" 
            placeholder="e.g. Upper Body Focus" 
            type="text"
            value={splitName}
            onChange={(e) => setSplitName(e.target.value)}
          />
        </div>

        <section className="space-y-6">
          <div className="px-2">
            <h2 className="text-2xl font-display font-bold text-on-surface">Select Exercises</h2>
            <p className="text-on-surface-variant text-sm mt-1">Choose from common movements or create your own.</p>
          </div>
          <div className="bg-surface-container-low p-4 md:p-6 rounded-xl ring-1 ring-outline-variant/15">
            <div className="flex flex-wrap gap-3">
              {DEFAULT_EXERCISES.map(exercise => (
                <button 
                  key={exercise}
                  onClick={() => handleAddPredefined(exercise)}
                  className="px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-outline-variant/30 bg-surface-container text-on-surface-variant hover:border-primary/50 hover:text-primary transition-all text-xs md:text-sm font-medium"
                >
                  {exercise}
                </button>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-outline-variant/10">
              <label className="block text-on-surface-variant font-sans text-xs uppercase tracking-widest mb-3">Not listed? Add a custom one</label>
              <div className="flex flex-col sm:flex-row gap-3 relative">
                <input 
                  className="flex-1 bg-surface-container-lowest border-none rounded-full px-5 py-3 md:px-6 md:py-4 text-on-surface placeholder:text-outline/40 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all" 
                  placeholder="Enter exercise name..." 
                  type="text"
                  value={customExercise}
                  onChange={(e) => setCustomExercise(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddCustom()}
                />
                <button 
                  onClick={handleAddCustom}
                  className="bg-primary/10 text-primary hover:bg-primary hover:text-on-primary px-6 py-3 md:px-8 rounded-full font-bold transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Plus className="text-xl" />
                  Add
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex justify-between items-end px-2">
            <h2 className="text-2xl font-display font-bold text-on-surface">Selected Movement List</h2>
            <span className="text-on-surface-variant text-sm font-medium">{selectedExercises.length} Movements</span>
          </div>
          
          {selectedExercises.length === 0 ? (
            <div className="bg-surface-container p-8 rounded-xl ring-1 ring-outline-variant/10 text-center opacity-50">
              <span className="text-on-surface-variant">No exercises selected yet.</span>
            </div>
          ) : (
            <div className="grid gap-4">
              {selectedExercises.map((exercise) => (
                <div key={exercise.id} className="bg-surface-container p-4 md:p-6 rounded-xl flex items-center justify-between group hover:bg-surface-container-highest transition-colors ring-1 ring-outline-variant/10">
                  <div className="flex items-center gap-4 md:gap-6 min-w-0 pr-2">
                    <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary/40 overflow-hidden">
                      <Dumbbell className="text-xl md:text-3xl text-primary w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg md:text-xl font-display font-bold text-on-surface truncate">{exercise.name}</h3>
                      <p className="text-on-surface-variant font-sans text-[10px] md:text-xs uppercase tracking-tighter truncate">{exercise.type}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleRemove(exercise.id)}
                    className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full flex items-center justify-center text-outline-variant hover:text-error hover:bg-error/10 transition-all active:scale-90"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        <div className="pt-8">
          <button 
            onClick={handleSaveSplit}
            className="bg-kinetic-gradient w-full py-6 rounded-full text-on-primary font-display text-2xl font-black active:scale-[0.98] transition-all shadow-xl shadow-primary/20 hover:brightness-110"
          >
            Save Split
          </button>
          <p className="text-center mt-6 text-on-surface-variant font-sans text-sm italic">
            Changes will be synced to your athlete profile instantly.
          </p>
        </div>
      </div>
    </>
  );
}
