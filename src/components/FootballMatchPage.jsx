import React from 'react';

// Sample match data. You can expand this.
const matches = [
  { home: "Crystal Palace", homeLog: "🦅", guest: "Liverpool", guestLog: "🔴" },
  { home: "Arsenal", homeLog: "🔫", guest: "Southampton", guestLog: "⚪" },
  { home: "Brentford", homeLog: "🐝", guest: "Wolves", guestLog: "🐺" },
  { home: "Leicester", homeLog: "🦊", guest: "Bournemouth", guestLog: "🍒" },
  { home: "Man City", homeLog: "🏙️", guest: "Fulham", guestLog: "🎩" },
  { home: "Leganes", homeLog: "🛡️", guest: "Valencia", guestLog: "🦇" },
  { home: "Union Berlin", homeLog: "🐻", guest: "Dortmund", guestLog: "🐝" },
  { home: "Marseille", homeLog: "⚓", guest: "Angers", guestLog: "⚫" },
];

const FootballMatchPage = () => {
  return (
    // MAIN CONTAINER: Full viewport height, no vertical scroll, complex background gradient
    <div 
      className="h-screen w-full flex flex-col font-sans overflow-hidden" 
      style={{
        background: `
          linear-gradient(135deg, #4299E1 0%, #3182CE 20%, #48BB78 40%, #ECC94B 60%, #4299E1 80%, #3182CE 100%),
          #3182CE`
      }}
    >
      {/* Background Sparkle Effect (Absolute positioned behind content) */}
      <div className="absolute inset-0 z-0 opacity-40 animate-spin-slow flex items-center justify-center pointer-events-none">
        <span className="text-white text-[15vw] font-bold">✨</span>
      </div>

      {/* ================= HEADER SECTION (Fixed Height) ================= */}
      <header className="relative z-10 p-4 sm:p-6 flex flex-col items-center gap-6">
        {/* Top Row: Back button & Diamond count */}
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          {/* PLACEHOLDER: Back Button Img */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 border-white/30 border rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/30 transition">
            <span className="text-white text-xl">←</span>
          </div>
          
          {/* Diamond Counter (Scaled visually based on screenshot) */}
          <div className="relative group cursor-pointer">
            <div className="bg-yellow-400 p-[2px] rounded-lg transition duration-300 group-hover:scale-105 group-hover:shadow-[0_0_15px_#fbbf24]">
              <div className="bg-black border border-gray-600 px-4 py-2 rounded-lg flex items-center gap-2">
                <span className="text-2xl">💎</span>
                <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">99999</span>
              </div>
            </div>
          </div>
        </div>

        {/* PLACEHOLDER: Main Logo Img ('PIECES BALL') */}
        <div className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-[400px] h-20 sm:h-24 md:h-28 bg-white/10 border-white/20 border-4 border-dashed rounded-xl flex items-center justify-center">
          <span className="text-white/70 font-mono text-sm uppercase tracking-wider p-4">Main Logo Placeholder</span>
        </div>
      </header>

      {/* ================= TROPHY SECTION (Scalable Height) ================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col flex-grow min-h-0">
        
        {/* PLACEHOLDER: Large Burmese Text Img */}
        <div className="w-full text-center p-4">
          <div className="w-[90%] sm:w-[80%] md:w-[60%] h-14 sm:h-20 bg-white/10 border-white/20 border-2 border-dashed rounded-lg mx-auto flex items-center justify-center">
            <span className="text-white/70 font-mono text-xs p-2">Burmese Text Placeholder</span>
          </div>
        </div>

        {/* Trophies Row: Responsive width and spacing */}
        <div className="w-full flex justify-center gap-4 sm:gap-10 p-4 max-w-5xl mx-auto flex-grow items-center">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex-1 max-w-[200px] aspect-[1/1.2] relative group">
              {/* Complex clipped shape (similar to SUV logic) */}
              <div 
                className="absolute inset-0 bg-yellow-400 p-[2.5px] transition duration-300 group-hover:shadow-[0_0_20px_#fbbf24] group-hover:-translate-y-1"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)" }}
              >
                {/* PLACEHOLDER: Trophy Img */}
                <div 
                  className="w-full h-full bg-black border border-gray-600 flex flex-col items-center justify-center p-2 text-center"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)" }}
                >
                  <span className="text-white/70 font-mono text-xs uppercase p-2">Trophy {index+1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MAIN INTERFACE PANEL (Fixed Height, scroll-y within) ================= */}
      <section className="w-full flex-shrink-0 z-10 px-4 sm:px-6 md:px-12 pb-4 sm:pb-6 relative flex flex-col h-[55%] sm:h-[60%] md:h-[65%]">
        
        {/* The 'Play' button gradient repeated here for the full panel border effect */}
        <div className="bg-gradient-to-r from-blue-700 to-yellow-500 p-[1.5px] rounded-2xl flex flex-col h-full shadow-2xl relative overflow-hidden transition hover:-translate-y-1 hover:shadow-cyan-400/50 hover:shadow-yellow-400/50 hover:shadow-2xl hover:shadow-[0_15px_30px_rgba(34,211,238,0.25)]">
          <div className="absolute inset-0 backdrop-blur-md bg-white/10 rounded-2xl pointer-events-none"></div>

          {/* 1. Top Navbar (Tab list) */}
          <nav className="relative z-20 w-full bg-white/20 p-2 sm:p-3 rounded-t-2xl flex justify-around items-center border-b border-white/10">
            {['Match', 'History', 'Reward'].map(tab => (
              <button 
                key={tab} 
                className={`relative flex-1 text-center py-2 sm:py-3 px-2 rounded-lg font-semibold text-lg sm:text-xl md:text-2xl transition duration-300 ${tab === 'Match' ? 'text-white' : 'text-white/60 hover:text-white'}`}
              >
                {tab === 'Match' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-lg -z-10 shadow-md"></div>
                )}
                {tab}
              </button>
            ))}
          </nav>

          {/* 2. Match Prediction Panel: Scrollable Content Area */}
          <div className="relative z-10 flex flex-col h-full min-h-0 bg-white/5 backdrop-blur-sm p-4 sm:p-5">
            {/* Week Label (Centered across list) */}
            <div className="text-center pb-4 text-white/90 text-sm sm:text-base font-medium tracking-wide uppercase">
              Prediction Week - 9
            </div>

            {/* MATCH LIST: The only scrollable area */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-1 sm:pr-2 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
              {matches.map((match, index) => (
                <article key={index} className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 border-b border-white/10 pb-4 last:border-0 hover:bg-white/5 rounded-xl transition cursor-pointer p-2 sm:p-3">
                  {/* Home Team */}
                  <div className="flex items-center gap-2 flex-1 justify-end">
                    <span className="text-xl sm:text-2xl">{match.homeLog}</span>
                    <span className="text-lg sm:text-xl font-medium text-white truncate max-w-[120px] sm:max-w-[200px] md:max-w-none">{match.home}</span>
                  </div>
                  
                  {/* VS Divider */}
                  <span className="text-xl sm:text-2xl font-bold text-yellow-400 whitespace-nowrap">VS</span>
                  
                  {/* Guest Team */}
                  <div className="flex items-center gap-2 flex-1 justify-start">
                    <span className="text-xl sm:text-2xl">{match.guestLog}</span>
                    <span className="text-lg sm:text-xl font-medium text-white truncate max-w-[120px] sm:max-w-[200px] md:max-w-none">{match.guest}</span>
                  </div>
                </article>
              ))}
            </div>

            {/* 3. The Large 'Play' Button (Bottom Fixed) */}
            <div className="pt-5 sm:pt-6">
              <button className="relative w-full text-center py-4 sm:py-5 px-6 rounded-2xl group transition duration-300 active:scale-95">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-yellow-500 rounded-2xl -z-10 group-hover:scale-105 transition duration-300"></div>
                {/* Glimmer effect (Z-index 20) */}
                <div className="absolute top-0 left-0 h-full w-[20%] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-30deg] animate-glimmer z-20 group-hover:scale-x-125 transition"></div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_20px_#fbbf24] opacity-50 group-hover:opacity-80 transition duration-300 pointer-events-none"></div>
                
                {/* Text Content */}
                <span className="relative z-30 text-white font-extrabold text-3xl sm:text-4xl tracking-tighter uppercase drop-shadow-md">
                  Play Now
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER AREA (Placeholder) */}
      <footer className="relative z-10 w-full p-4 flex justify-center flex-shrink-0">
        {/* Placeholder: Confetti/Stars (as requested) */}
        <div className="w-[80%] h-8 bg-white/10 border-white/20 border-2 border-dashed rounded-full flex items-center justify-center opacity-70">
          <span className="text-white/70 font-mono text-[10px] uppercase">Confetti/Background FX Placeholder</span>
        </div>
      </footer>
    </div>
  );
};

export default FootballMatchPage;