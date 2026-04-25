"use client";
import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { ShieldCheck, Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      router.push('/admin');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#09090B] font-sans selection:bg-blue-500/30 overflow-hidden relative">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-zinc-800/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="w-full max-w-md px-6 relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="bg-white/5 p-4 rounded-[2rem] border border-white/10 backdrop-blur-xl shadow-2xl mb-6">
            <ShieldCheck size={40} className="text-blue-500" />
          </div>
          <h1 className="text-3xl font-black text-white tracking-tighter text-center">
            ADMIN<span className="text-blue-600">CORE</span>
          </h1>
        </div>

        {/* Login Card */}
        <div className="bg-white/5 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl premium-shadow">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-blue-500 transition-colors">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 text-white p-4 pl-12 rounded-2xl outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-sm placeholder:text-zinc-600"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Access Key</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-blue-500 transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 text-white p-4 pl-12 rounded-2xl outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-sm placeholder:text-zinc-600"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-widest py-4 rounded-2xl transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
            >
              {loading ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <>
                  Login 
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
