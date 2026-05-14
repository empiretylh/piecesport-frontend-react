import { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown, ShoppingCart } from "lucide-react";

import pieceballicon from "../assets/img/welcomeImg/pieceballicon.png";
import titleone from "../assets/img/footballmatchimg/titleone.png";
import titletwo from "../assets/img/footballmatchimg/titletwo.png";
import titlethree from "../assets/img/footballmatchimg/titlethree.png";
import titlefour from "../assets/img/footballmatchimg/titlefour.png";

export default function BettingPage() {

  const { state } = useLocation();
  console.log(state);
  
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  if (!state) return <div>No match selected</div>;

  const [winnerPrediction, setWinnerPrediction] = useState(null);
  const [whoScorerPrediction, setWhoScorerPrediction] = useState(null);
  const [totalScorerPrediction, setTotalScorerPrediction] = useState(null);
  const [scorerPrediction, setScorerPrediction] = useState(null);
  const [isOpen, setIsOpen] = useState(false);


  const sectionTitleGradient = "bg-gradient-to-r from-blue-700 via-blue-600 to-yellow-400";
  const ruleButtonGradient = "bg-gradient-to-r from-blue-700 via-blue-600 to-yellow-500";


   const handleConfirm = ()=> {
    const betData = {
      matchKey: `${state.team1_name}_vs_${state.team2_name}`,
      winnerPrediction,
      whoScorerPrediction,
      totalScorerPrediction,
      scorerPrediction,
    };
  
    // Get existing bets
    const existingBets = JSON.parse(localStorage.getItem("bets")) || {};
  
    // Save / overwrite this match bet
    existingBets[betData.matchKey] = betData;
  
    localStorage.setItem("bets", JSON.stringify(existingBets));
  
    // Go back
    navigate(-1);
  };

  return (
    <div className="w-full min-h-screen bg-gray-200 flex justify-center">
      <div className="w-full max-w-[450px] min-h-screen overflow-hidden relative">

        <div className="h-screen w-full flex flex-col font-sans overflow-hidden" style={{ background: `linear-gradient(135deg, #4299E1 0%, #3182CE 20%, #48BB78 40%, #ECC94B 60%, #4299E1 80%, #3182CE 100%),#3182CE`}}>

          {/* Back Button */}
          <div className="absolute m-4 z-99">
            <button onClick={()=> navigate(-1)} className="bg-white/20 border-white/30 border p-2 rounded-lg
            cursor-pointer hover:bg-white/30 transition active:scale-95">
              <ArrowLeft className="text-white w-6 h-6" />
            </button>
          </div>

          {/*  HEADER SECTION  */}
          <header className="relative z-10 p-4 flex items-center justify-between select-none">

            <div className="w-full flex items-center justify-center">
            
              {/* Title logo */}
              <div className="w-100vw">
                <img src={pieceballicon} alt="pieceballicon" className=" md:w-46 md:h-auto" />
              </div>
            
              {/* DIAMOND */}
              <div ref={dropdownRef} className="w-24 sm:w-30 absolute top-0 right-2 z-50">
                    
                <div onClick={(e)=>{ e.stopPropagation();setIsOpen(prev=> !prev); }} className={`${ isOpen ? "h-[140px] sm:h-[160px]" : "h-[80px]" } 
                bg-yellow-400 text-black font-bold flex flex-col items-center justify-start pt-1 transition-all duration-300 
                ease-in-out overflow-hidden cursor-pointer`} style={{clipPath: "polygon(0% 0%, 100% 0%, 100% 65%, 50% 100%, 0% 65%)"}}>
                            
                  <div className="flex flex-col items-center mt-2">

                      <div className="flex items-end gap-1">
                          💎<span className="text-sm sm:text-base">9999</span>
                      </div>

                      <div className={`transition-transform duration-300 ${ !isOpen && "animate-pulse hover:scale-155" } ${ isOpen ? "rotate-180" : "rotate-0" } active:scale-95`}>
                          <ChevronDown className="w-6 h-6 shadow-lg shadow-yellow-300/50" />
                      </div>

                  </div>

                  <div className={`flex items-center justify-center gap-2 mt-2 transition-all duration-300 ${ isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2" }`}>
                      <ShoppingCart className="w-6 h-6 shadow-lg shadow-yellow-300/50"/>
                      <button onClick={()=>setIsOpen(false)} className="bg-black text-white text-xs px-3 py-1 rounded-full">Shop</button>
                  </div>

                </div>

              </div>
              {/* DIAMOND  */}
            
            </div>

          </header>

          {/*  TOP TEXT  */}
          <div className="relative z-10 w-full flex flex-col items-center text-center gap-1 -mt-12 animate-[scalePulse_1.5s_ease-in-out_infinite] select-none">

            <h3 className="text-blue-800 text-2xl sm:text-3xl font-bold drop-shadow-md my-Font">20000Ks</h3>
            <h2 className="text-yellow-300 text-4xl sm:text-5xl font-extrabold sugar-text">Challenge</h2>

          </div>

          {/*  Match Detail  */}
          <section className="relative z-10 px-4 pb-10 md:pb-20 md:px-12 flex flex-col h-[75%] max-w-xl mx-auto w-full mt-4">
          
            {/* The Main Container */}
            <div className="flex flex-col h-full relative rounded-[2.5rem] border border-white/20 shadow-2xl overflow-hidden group">
                
                <div className="absolute inset-0 backdrop-blur-2xl bg-black/40 pointer-events-none -z-10"></div>

                {/* Header Area */}
                <div className="relative z-20 w-full bg-white/10 backdrop-blur-md p-4 text-center border-b border-white/10">
                  <span className="text-white/90 text-sm font-bold tracking-widest uppercase">Correct Matches - Soon</span>
                </div>

                {/* MATCH PREDICTION AREA */}
                <div className="relative z-10 flex flex-col h-full min-h-0 p-6 space-y-8 overflow-y-auto scrollbars">
                
                  {/* VS SECTION */}
                  <div className="w-full flex items-center justify-center gap-8 border-b border-white/10 pb-4">
                      
                    <div className="flex flex-col items-center gap-1 text-center w-24">

                      <div className="w-10">
                        <img src={state.team1_logo || pieceballicon} alt={state.team1_name} className="w-full h-full object-contain" />
                      </div>
                      <span className="text-xs font-bold text-white uppercase tracking-tight truncate w-full">{state.team1_name}</span>

                    </div>

                    <span className="text-3xl font-black italic text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">VS</span>

                    <div className="flex flex-col items-center gap-1 text-center w-24">
                      
                      <div className="w-10">
                        <img src={state.team2_logo || pieceballicon} alt={state.team2_name} className="w-full h-full object-contain" />
                      </div>
                      <span className="text-xs font-bold text-white uppercase tracking-tight truncate w-full">{state.team2_name}</span>
                      
                    </div>

                  </div>
                  {/* VS SECTION */}

                  {/* WHO WILL WIN SECTION */}
                  <div className="w-full flex flex-col gap-2">

                      <div className={`${sectionTitleGradient} p-[2px] rounded-full shadow-lg`}>
                        <div className="bg-black/20 backdrop-blur-sm text-center py-2 px-6 rounded-full">
                          <span className="text-white font-black text-xl tracking-tighter uppercase italic">Who will win?</span>
                        </div>
                      </div>

                      <div className="space-y-2 px-2">
                      {[
                          { label: "Draw", value: "draw" },
                          { label: state.team1_name, value: "home" },
                          { label: state.team2_name, value: "away" },
                      ].map(option => (
                          <label key={option.value} className={`flex items-center justify-between gap-4 cursor-pointer p-3 rounded-2xl transition-all border ${winnerPrediction === option.value ? 'bg-white/20 border-white/40 shadow-lg' : 'bg-transparent border-transparent hover:bg-white/5'}`}>
                            
                            <div className="flex items-center gap-4">

                              <input type="radio" name="winnerPrediction" value={option.value} checked={winnerPrediction === option.value}
                              onChange={()=> setWinnerPrediction(option.value)}
                              className="w-5 h-5 accent-yellow-400 cursor-pointer scale-125"
                              />
                              <span className={`text-lg font-bold ${winnerPrediction === option.value ? 'text-yellow-400' : 'text-white'}`}>{option.label}</span>
                            
                            </div>

                            <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">သင့်အဖြေ</span>

                          </label>
                      ))}
                      </div>
                  </div>
                  {/* WHO WILL WIN SECTION */}

                  {/* WHO WILL SCORE FIRST SECTION */}
                  <div className="w-full flex flex-col gap-2">

                      <div className={`${sectionTitleGradient} p-[2px] rounded-full shadow-lg`}>

                        <div className="bg-black/20 backdrop-blur-sm text-center py-2 px-6 rounded-full">
                            <span className="text-white font-black text-xl tracking-tighter uppercase italic">
                            Who will score first?
                            </span>
                        </div>

                      </div>

                      <div className="space-y-2 px-2">
                        {[
                            { label: "None", value: "none" },
                            { label: state.team1_name, value: "home" },
                            { label: state.team2_name, value: "away" },
                        ].map(option => (
                            <label key={option.value} className={`flex items-center justify-between gap-4 cursor-pointer p-3 rounded-2xl transition-all border ${scorerPrediction === option.value ? 'bg-white/20 border-white/40 shadow-lg' : 'bg-transparent border-transparent hover:bg-white/5'}`}>
                              
                              <div className="flex items-center gap-4">
                                  <input type="radio" name="scorefirst" value={option.value} checked={scorerPrediction === option.value}
                                  onChange={() => setScorerPrediction(option.value)}
                                  className="w-5 h-5 accent-yellow-400 cursor-pointer scale-125"
                                  />
                                  <span className={`text-lg font-bold ${scorerPrediction === option.value ? 'text-yellow-400' : 'text-white'}`}>{option.label}</span>
                              </div>
                              <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">သင့်အဖြေ</span>

                            </label>
                        ))}
                      </div>

                  </div>
                  {/* WHO WILL SCORE FIRST SECTION */}

                </div>

                {/* 3. Confirm BUTTON */}
                <div className="relative z-20 flex-shrink-0 p-4 bg-black/20 backdrop-blur-md border-t border-white/10">
                    <button onClick={handleConfirm} className="relative w-full text-center py-4 px-6 rounded-2xl group transition duration-300 active:scale-95 overflow-hidden cursor-pointer">
                        
                      <div className={`${ruleButtonGradient} absolute inset-0 rounded-0 -z-10`}></div>
                      {/* <div className="absolute top-0 left-0 h-full w-[30%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-30deg] animate-glimmer z-10"></div> */}
                      <span className="relative z-30 text-white font-black text-2xl tracking-tighter uppercase italic drop-shadow-lg">Confirm Bet</span>

                    </button>
                </div>

            </div>

          </section>

        </div>

      </div>
    </div>
  );
}