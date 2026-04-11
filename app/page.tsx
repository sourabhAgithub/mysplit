import { PlusCircle, Zap, Dumbbell, AlignEndHorizontal, Activity, Pencil, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 font-sans">
      {/* Hero / Welcome Section */}
      <header className="flex flex-col gap-4">
        <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-on-surface">
          Precision <span className="text-primary">Performance.</span>
        </h1>
        <p className="text-on-surface-variant max-w-2xl text-lg mb-4">
          Welcome back, Athlete. Your metrics are optimized. Ready to break your previous ceiling?
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-kinetic-gradient text-on-primary font-display font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:shadow-[var(--shadow-ambient)] transition-all active:scale-95 group">
            <PlusCircle size={20} className="text-on-primary" />
            Create New Split
          </button>
          <button className="bg-surface-container-high text-on-surface font-display font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-all active:scale-95">
            <Zap size={20} />
            Quick Start Workout
          </button>
        </div>
      </header>

      {/* Stats Bento Grid Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-surface-container-low p-8 rounded-xl border border-outline-variant/15 flex flex-col justify-between min-h-[240px] relative overflow-hidden group">
          <div className="relative z-10">
            <span className="text-on-surface-variant text-sm uppercase tracking-widest mb-2 block font-medium">Weekly Volume</span>
            <div className="text-6xl font-display font-bold text-primary tracking-tighter">
              42,580<span className="text-xl ml-2 text-on-surface-variant font-normal">kg</span>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 group-hover:opacity-40 transition-opacity">
            {/* Using standard img to avoid Next.js unconfigured remote image hostname error */}
            <img
              className="w-full h-full object-cover"
              alt="Abstract visualization of data growth"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcLREGtmrrn0Fet3ztChRwNeiZne_6kZXl7XNOgR3k2iDPJ62AacIdMfjDTPJQcM1RNHPmd0phVaCfGRcF0L2iswk1Bg5RBcPvhwa6_labDyd0irhb0QlfQcWv4pF5nDD794G66lIwffb3LqhSBF7t84ckhVID7YV3PSohQqQqN0kHaXPSChPEZ6EVmBl39T_vxAgaUcuriOzWeOYL2fPzgbT-AeZJaOhCUrjrFrBFhZz7_eUZ96-V0J7xnPkNemv9n5NX2py_9y4"
            />
          </div>
        </div>
        
        <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/15 flex flex-col justify-center text-center">
          <span className="text-on-surface-variant text-sm uppercase tracking-widest mb-2 font-medium">Current Streak</span>
          <div className="text-6xl font-display font-bold text-tertiary">14</div>
          <span className="text-on-surface-variant text-sm font-medium mt-1">Days Consistent</span>
        </div>
      </section>

      {/* Training Splits Section */}
      <section className="flex flex-col gap-6">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight text-on-surface">Your Training Splits</h2>
            <p className="text-on-surface-variant text-sm mt-1">Select a protocol to begin your session.</p>
          </div>
          <button className="text-primary font-display font-bold flex items-center gap-1 hover:underline">
            View All <ArrowRight size={16} />
          </button>
        </div>

        {/* Split Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-surface-container-low p-6 flex flex-col rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Dumbbell className="text-primary" size={24} />
              </div>
              <span className="text-on-surface-variant text-xs bg-surface-container px-3 py-1 rounded-full font-medium">Hypertrophy</span>
            </div>
            <h3 className="text-2xl font-display font-bold mb-1">Push Day</h3>
            <p className="text-on-surface-variant text-sm mb-8 font-medium">Chest, Shoulders &amp; Triceps • 8 Exercises</p>
            <div className="flex gap-3 mt-auto">
              <button className="flex-1 bg-kinetic-gradient text-on-primary font-bold py-3 rounded-full active:scale-95 transition-transform flex items-center justify-center">
                Start
              </button>
              <button className="px-4 bg-surface-container text-on-surface rounded-full hover:bg-surface-container-highest transition-colors active:scale-95 flex items-center justify-center">
                <Pencil size={18} />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-container-low p-6 flex flex-col rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center">
                <AlignEndHorizontal className="text-tertiary" size={24} />
              </div>
              <span className="text-on-surface-variant text-xs bg-surface-container px-3 py-1 rounded-full font-medium">Endurance</span>
            </div>
            <h3 className="text-2xl font-display font-bold mb-1">Legs</h3>
            <p className="text-on-surface-variant text-sm mb-8 font-medium">Quads, Hams &amp; Calves • 12 Exercises</p>
            <div className="flex gap-3 mt-auto">
              <button className="flex-1 bg-kinetic-gradient text-on-primary font-bold py-3 rounded-full active:scale-95 transition-transform flex items-center justify-center">
                Start
              </button>
              <button className="px-4 bg-surface-container text-on-surface rounded-full hover:bg-surface-container-highest transition-colors active:scale-95 flex items-center justify-center">
                <Pencil size={18} />
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-container-low p-6 flex flex-col rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-full bg-primary-dim/10 flex items-center justify-center">
                <Activity className="text-primary-dim" size={24} />
              </div>
              <span className="text-on-surface-variant text-xs bg-surface-container px-3 py-1 rounded-full font-medium">Strength</span>
            </div>
            <h3 className="text-2xl font-display font-bold mb-1">Pull Day</h3>
            <p className="text-on-surface-variant text-sm mb-8 font-medium">Back, Biceps &amp; Rear Delts • 9 Exercises</p>
            <div className="flex gap-3 mt-auto">
              <button className="flex-1 bg-kinetic-gradient text-on-primary font-bold py-3 rounded-full active:scale-95 transition-transform flex items-center justify-center">
                Start
              </button>
              <button className="px-4 bg-surface-container text-on-surface rounded-full hover:bg-surface-container-highest transition-colors active:scale-95 flex items-center justify-center">
                <Pencil size={18} />
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
