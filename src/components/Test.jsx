import React from 'react';
import trophy from "../assets/img/welcomeImg/trophy.png";

const suvIcon = trophy ; 

const Test = () => {

  const complexClippedShape = {
    clipPath: "polygon(0% 100%, 0% 35%, 15% 15%, 50% 0%, 85% 15%, 100% 35%, 100% 100%)"
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 p-10 font-sans">
      
      <div className="w-[600px] bg-zinc-900/50 p-8 rounded-xl border border-zinc-700 shadow-2xl relative">
        
        {/* Header */}
        <h1 className="text-zinc-400 text-3xl font-light tracking-wide mb-12 flex items-baseline gap-3 uppercase">
          SELECT VEHICLE: 
          <span className="text-lime-400 font-medium">OFF-ROAD</span>
        </h1>

        {/* ============================================================ */}
        {/* THE HOUSE-SHAPED BUTTON */}
        {/* ============================================================ */}
        <div className="relative group w-[450px] mx-auto cursor-pointer transition hover:-translate-y-2">
          
          {/* 1. Label with "Through-Line" effect */}
          <div className="absolute top-[8%] left-0 w-full flex items-center gap-2 px-6 z-20">
            {/* Left Line */}
            <div className="flex-1 h-[1.5px] bg-lime-400 transition duration-300 group-hover:shadow-[0_0_10px_#a3e635]"></div>
            
            {/* Label Text (Black badge background) */}
            <span className="bg-black px-4 py-1 text-base tracking-widest font-bold uppercase text-lime-400 border border-lime-400 rounded-sm">
              SUV
            </span>
            
            {/* Right Line */}
            <div className="flex-1 h-[1.5px] bg-lime-400 transition duration-300 group-hover:shadow-[0_0_10px_#a3e635]"></div>
          </div>


          {/* 2. THE "BORDER" LAYER */}
          <div 
            className="bg-lime-400 p-[3px] transition duration-300 group-hover:shadow-[0_0_30px_rgba(163,230,53,0.6)]"
            style={complexClippedShape}
          >
            {/* 3. THE "INNER" LAYER */}
            <div 
              className="bg-black flex flex-col items-center justify-center p-10 pt-24" // pt-24 provides room for the SUV label
              style={complexClippedShape}
            >
              {/* Internal Button */}
              <button className="w-full h-full flex flex-col items-center justify-center gap-4 transition duration-300">
                {/* SVG Icon */}
                <img 
                  src={suvIcon} 
                  alt="SUV Icon" 
                  className="w-28 h-28 object-contain transition duration-300 group-hover:scale-110" 
                />
              </button>
            </div>
          </div>

        {/* Pointer cursor icon */}
        <img 
          src="https://img.icons8.com/fluency-systems-filled/48/ffffff/cursor.png" 
          alt="cursor" 
          className="absolute -bottom-6 right-20 w-8 h-8 opacity-70 group-hover:opacity-100 transition z-30"
        />

        </div>
        {/* ============================================================ */}
        {/* THE HOUSE-SHAPED BUTTON END */}
        {/* ============================================================ */}

      </div>
    </div>
  );
};

export default Test;