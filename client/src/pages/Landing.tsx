import { Download, Gamepad2, Zap, Trophy } from 'lucide-react';
import { useLocation } from 'wouter';

export default function Landing() {
  const [, navigate] = useLocation();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block px-6 py-2 border border-cyan-500/30 bg-slate-800/50 backdrop-blur rounded-full text-cyan-400 text-sm font-semibold">
            🎮 Next-Gen Gaming
          </div>
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            PS3 / PS4 GAMES
          </h1>
          <p className="text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
            The next generation of PlayStation gaming. Thousands of titles from two legendary consoles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button onClick={() => navigate('/games')} className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all">
              <Download className="inline mr-2 w-5 h-5" /> BROWSE GAMES
            </button>
            <button onClick={() => navigate('/guides')} className="px-8 py-4 bg-slate-700/50 backdrop-blur text-white font-bold text-lg border border-slate-600 rounded-lg hover:border-cyan-500 transition-all">
              <Zap className="inline mr-2 w-5 h-5" /> LEARN MORE
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="p-6 rounded-xl bg-slate-800/50 backdrop-blur border border-slate-700">
              <div className="text-3xl font-bold text-cyan-400 mb-2">8K+</div>
              <div className="text-sm text-slate-400">Games</div>
            </div>
            <div className="p-6 rounded-xl bg-slate-800/50 backdrop-blur border border-slate-700">
              <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
              <div className="text-sm text-slate-400">Free</div>
            </div>
            <div className="p-6 rounded-xl bg-slate-800/50 backdrop-blur border border-slate-700">
              <div className="text-3xl font-bold text-cyan-400 mb-2">HD+</div>
              <div className="text-sm text-slate-400">Quality</div>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t border-slate-700 py-8 px-4 text-center text-slate-400 text-sm">
        <p>© 2026 Gamesiteonline • Fahad • Tanzania</p>
      </footer>
    </div>
  );
}
