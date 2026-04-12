import Link from 'next/link';
import { Zap, ArrowRight, Activity, Dumbbell, Share2, Globe } from 'lucide-react';

export default function Login() {
  return (
    <div className="fixed inset-0 z-[100] bg-background w-full h-full overflow-y-auto selection:bg-primary-container selection:text-on-primary-container">
      {/* Hero Wrapper */}
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">

        {/* Background Asset (Asymmetric Positioning) */}
        <div className="absolute -top-[20%] -right-[10%] w-[80%] h-[120%] opacity-20 pointer-events-none">
          <img
            className="w-full h-full object-cover rounded-xl grayscale"
            alt="dramatic low-angle shot of a high-performance athlete preparing for a lift in a dark industrial gym with cool blue volumetric lighting"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbJfpfF3C_gOHRPj_zkxStduAmTFieAXTfJ1T1qcXzHIsn8RGNJMuxSIH54i8nF-I3ECMFZUs_M_K8o3MBDjcXN8xFJUc6kdZYn-10Dy2sbNRwHk8CFq3SXXxctp4QL4SCG82IPWtdbwqCU0wXOJV38n3jIsOt43C_eynXTvvrDGINcqebFznR2w1pmkEJn2IfM7-gIesLFYIpMjB7xDD0pD27otZiy-vZzeWd79dgjKG0Jl5tnacoC6L7Rouudyz_VqkoFq19gWM"
          />
        </div>

        {/* Animated Ambient Glows */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-tertiary/10 blur-[150px] rounded-full pointer-events-none"></div>

        {/* Main Content Area */}
        <main className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col items-start gap-12 py-20">

          {/* Brand Anchor */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-kinetic-gradient rounded-full flex items-center justify-center">
              <Zap className="text-on-primary w-7 h-7 fill-current" />
            </div>
            <h1 className="font-display text-3xl font-black tracking-tighter text-on-surface">MySplit</h1>
          </div>

          {/* Hero Text Section */}
          <div className="max-w-4xl">
            <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-on-surface mb-8">
              Track Every <span className="text-primary italic">Rep,</span><br />
              Hit Every <span className="text-primary">Goal.</span>
            </h2>
            <p className="font-sans text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
              Precision engineering for the modern athlete. Optimize your biomechanics and dominate your progression with industrial-grade analytics.
            </p>
          </div>

          {/* Interaction Core */}
          <div className="w-full max-w-md flex flex-col gap-4 mt-8">

            {/* Primary Actions */}
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <button className="flex-1 h-16 bg-kinetic-gradient text-on-primary font-display font-bold text-lg rounded-full flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20">
                Sign Up
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex-1 h-16 bg-surface-container-high border border-outline-variant/30 text-on-surface font-display font-bold text-lg rounded-full hover:bg-surface-container-highest transition-all active:scale-95">
                Login
              </button>
            </div>

            {/* Guest Mode Bridge */}
            <div className="relative mt-4 group">
              <Link href="/" className="w-full p-6 glass-panel border border-outline-variant/20 rounded-xl flex flex-col gap-3 text-left hover:border-tertiary/40 transition-all active:scale-[0.98] block">
                <div className="flex items-center justify-between w-full">
                  <span className="font-display font-bold text-lg text-on-surface">Continue as Guest</span>
                  <div className="px-3 py-1 bg-tertiary-container rounded-full flex items-center gap-2">
                    <div className="w-2 h-2 bg-on-tertiary-container rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-bold text-on-tertiary uppercase tracking-widest">Local Session</span>
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant leading-snug">
                  Start training immediately. Your data is stored <span className="text-tertiary font-medium">
                    <span className="hidden sm:inline">locally in your browser</span>
                    <span className="sm:hidden">locally on your device</span>
                  </span>. Register later to sync across devices.
                </p>
              </Link>
            </div>
          </div>

          {/* Bento Stats Preview (Asymmetric Visual Support) */}
          <div className="hidden lg:grid grid-cols-2 gap-4 absolute bottom-20 right-12 w-[450px]">
            <div className="bg-surface-container-low p-8 rounded-lg flex flex-col gap-2 transform translate-y-8">
              <Activity className="text-primary w-10 h-10" />
              <span className="font-display text-4xl font-bold text-on-surface">99.8%</span>
              <span className="text-sm text-on-surface-variant uppercase tracking-widest font-semibold">Precision Rating</span>
            </div>
            <div className="bg-surface-container p-8 rounded-lg flex flex-col gap-2">
              <Dumbbell className="text-tertiary w-10 h-10" />
              <span className="font-display text-4xl font-bold text-on-surface">12k+</span>
              <span className="text-sm text-on-surface-variant uppercase tracking-widest font-semibold">Active Athletes</span>
            </div>
          </div>
        </main>

        {/* Footer Decoration */}
        <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-center opacity-40">
          <div className="flex flex-col md:flex-row gap-6 text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
            <span>© 2026 Kinetic Systems</span>
            <span>Privacy Protocol</span>
            <span>Terms of Force</span>
          </div>
          <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent mx-12"></div>
          <div className="flex gap-4">
            <Share2 className="text-on-surface-variant w-5 h-5" />
            <Globe className="text-on-surface-variant w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
