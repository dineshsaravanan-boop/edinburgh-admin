import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-surface h-screen w-screen overflow-hidden flex items-center justify-center p-0 md:p-12 font-body-md">
      
      {/* Container Card */}
      <main className="w-full max-w-[1000px] h-full md:h-[640px] flex flex-col md:flex-row bg-surface border border-outline-variant rounded-2xl overflow-hidden shadow-2xl relative">
        
        {/* Left Side: System Information Pane */}
        <section className="hidden md:flex md:w-1/2 bg-gradient-to-br from-[#e9ecff] via-[#f1f3ff] to-[#f8f9ff] relative overflow-hidden flex-col justify-center px-12 text-on-surface">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #4f46e5 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
          
          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full backdrop-blur-md">
              <span className="material-symbols-outlined text-[16px] text-primary animate-pulse">terminal</span>
              <span className="font-label-md text-label-md text-primary font-bold">Platform Operations Center</span>
            </div>
            
            <h1 className="font-display-lg text-display-lg text-on-surface font-extrabold leading-tight">
              Ecosystem Control <br />
              <span className="text-primary-container">Dashboard.</span>
            </h1>
            
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-sm">
              Unified administration systems managing global users, creators, content moderation, settlement transactions, and performance analytics.
            </p>
            
            <div className="pt-8 grid grid-cols-2 gap-6 border-t border-outline-variant/60">
              <div className="flex flex-col space-y-1">
                <span className="font-headline-md text-headline-md text-primary font-bold">99.98%</span>
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-[10px]">Uptime SLA</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="font-headline-md text-headline-md text-primary font-bold">45.8M</span>
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-[10px]">Ecosystem Users</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="font-headline-md text-headline-md text-primary font-bold">120K</span>
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-[10px]">Active Sellers</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="font-headline-md text-headline-md text-primary font-bold">12.8K</span>
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-[10px]">Active Creators</span>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </section>

        {/* Right Side: Authentication Form Pane */}
        <section className="flex-1 flex flex-col justify-center items-center px-6 md:px-12 py-12 bg-surface">
          <div className="w-full max-w-[380px] space-y-8">
            
            {/* Logo and Greeting */}
            <header className="flex flex-col items-center md:items-start space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-[#4f46e5] rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>shield_person</span>
                </div>
                <span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight">SuperApp Admin</span>
              </div>
              <div className="text-center md:text-left pt-2">
                <h2 className="font-title-lg text-title-lg text-on-surface font-bold">Welcome back</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">Please sign in with credentials to access terminal.</p>
              </div>
            </header>

            {/* Third Party Auth */}
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => navigate('/dashboard')}
                className="flex items-center justify-center space-x-2 py-2 px-3 border border-outline-variant hover:bg-surface-container-low rounded-xl font-label-md text-label-md text-on-surface-variant transition-all active:scale-95 cursor-pointer"
              >
                <img alt="Google" className="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ6H60H-H83PgaiAe2H8y8DqOctUf3Vo9DbhFJ0Zzmv5qMtGag4dsVBBrwnVF1FPd_mYyU14e6m2srH2Ktf7O5HodkYA_iJn4o__85Hk4AeWHtj8PXz6Pg-uUQK6mPGqUnEPYjWscFXrM_a1NGnQjbaSKG6bqjrWFpkDiFqLdzg_3Z3s7NjS2J6G_WkZZQuxb9_8XS0LyW3JtT9rWNp70FjPvA0XLBxEQ-vDcO8x0wHLo23VQQVCrX0H0x8t6LzRFpQN7dyf65-3Y" />
                <span>Google</span>
              </button>
              <button 
                onClick={() => navigate('/dashboard')}
                className="flex items-center justify-center space-x-2 py-2 px-3 border border-outline-variant hover:bg-surface-container-low rounded-xl font-label-md text-label-md text-on-surface-variant transition-all active:scale-95 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>apps</span>
                <span>Apple ID</span>
              </button>
            </div>
            
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-outline-variant"></div>
              <span className="flex-shrink mx-3 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest text-[9px]">or continue with email</span>
              <div className="flex-grow border-t border-outline-variant"></div>
            </div>

            {/* Email/Password Form */}
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
              <div className="space-y-1.5">
                <label className="font-label-md text-label-md text-on-surface-variant font-medium" htmlFor="email">Operator Email</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[18px]">mail</span>
                  <input 
                    className="w-full pl-11 pr-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-body-md text-body-md text-on-surface placeholder:text-outline" 
                    id="email" 
                    placeholder="name@company.com" 
                    type="email" 
                    defaultValue="alex.morgan@company.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="font-label-md text-label-md text-on-surface-variant font-medium" htmlFor="password">Security Password</label>
                  <a 
                    className="font-label-md text-label-md text-[#4f46e5] font-bold hover:underline" 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); alert('Operations Notice: Password recovery options require physical key fob verification or system administrator intervention.'); }}
                  >
                    Forgot?
                  </a>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[18px]">lock</span>
                  <input 
                    className="w-full pl-11 pr-11 py-2 bg-surface-container-lowest border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-body-md text-body-md text-on-surface placeholder:text-outline" 
                    id="password" 
                    placeholder="••••••••" 
                    type="password" 
                    defaultValue="password123"
                    required
                  />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors" type="button">
                    <span className="material-symbols-outlined text-[18px]">visibility_off</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <label className="flex items-center space-x-2 cursor-pointer group select-none">
                  <input className="peer h-4 w-4 border-outline-variant text-[#4f46e5] focus:ring-indigo-500/20 bg-surface rounded cursor-pointer" type="checkbox" defaultChecked />
                  <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface transition-colors">Authorize session for 12 hours</span>
                </label>
              </div>

              <button 
                type="submit"
                className="w-full py-2.5 bg-[#4f46e5] hover:bg-[#4338ca] text-white font-title-md text-title-md rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-indigo-500/10 flex items-center justify-center space-x-2 cursor-pointer font-semibold"
              >
                <span>Sign In</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </form>

            <footer className="text-center pt-2 text-on-surface-variant text-[11px] border-t border-outline-variant/40">
              <p>© 2024 SuperApp Enterprise System.</p>
              <div className="flex justify-center gap-3 mt-1.5 font-label-sm text-label-sm text-on-surface-variant/80 uppercase tracking-wide">
                <a className="hover:text-[#4f46e5] transition-colors" href="#" onClick={(e) => { e.preventDefault(); alert('Security policy loaded.'); }}>Security Policy</a>
                <span>•</span>
                <a className="hover:text-[#4f46e5] transition-colors" href="#" onClick={(e) => { e.preventDefault(); alert('Access logs loaded.'); }}>Access Logs</a>
              </div>
            </footer>
            
          </div>
        </section>
      </main>

      <div className="fixed top-12 left-12 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none"></div>
      <div className="fixed bottom-12 right-12 w-48 h-48 bg-[#4f46e5]/5 rounded-full blur-3xl pointer-events-none"></div>

    </div>
  );
}
