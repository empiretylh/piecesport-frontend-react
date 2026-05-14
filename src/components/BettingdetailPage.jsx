import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import pieceballicon from "../assets/img/welcomeImg/pieceballicon.png";
import titleone from "../assets/img/footballmatchimg/titleone.png";
import titletwo from "../assets/img/footballmatchimg/titletwo.png";
import titlethree from "../assets/img/footballmatchimg/titlethree.png";
import titlefour from "../assets/img/footballmatchimg/titlefour.png";

export default function BettingdetailPage() {

  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (state?.existingBet) {
      setWinnerPrediction(state.existingBet.winnerPrediction);
      setWhoScorerPrediction(state.existingBet.whoScorerPrediction);
      setTotalScorerPrediction(state.existingBet.totalScorerPrediction);
      setScorerPrediction(state.existingBet.scorerPrediction);
    }
  }, [state]);

  const handleConfirm = ()=> {
    const betData = {
      matchKey: `${state.home}_vs_${state.away}`,
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

  if (!state) return <div>No match selected</div>;

  const [winnerPrediction, setWinnerPrediction] = useState(null);
  const [whoScorerPrediction, setWhoScorerPrediction] = useState(null);
  const [totalScorerPrediction, setTotalScorerPrediction] = useState(null);
  const [scorerPrediction, setScorerPrediction] = useState(null);



  const sectionTitleGradient = "bg-gradient-to-r from-blue-700 via-blue-600 to-yellow-400";
  const ruleButtonGradient = "bg-gradient-to-r from-blue-700 via-blue-600 to-yellow-500";

  return (
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
          <div className="absolute top-0 right-2 z-50 w-24 sm:w-52 md:w-64">
                
                <div className="min-h-[80px] bg-yellow-400 text-black font-bold flex flex-col items-center justify-start pt-1"
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 65%, 50% 100%, 0% 65%)"
                  }}
                >
                  <div className="flex items-end gap-1 mt-3">
                    💎
                    <span className="text-sm sm:text-base">9999</span>
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
      <section className="relative z-10 px-4 pb-10 md:pb-12 md:px-12 flex flex-col flex-1 min-h-[70%] md:min-h-[70%] w-full mt-4">
      
        {/* The Main Container */}
        <div className="flex flex-col h-full min-h-0 relative rounded-[2.5rem] border border-white/20 shadow-2xl overflow-hidden">
            
            <div className="absolute inset-0 backdrop-blur-2xl bg-black/40 pointer-events-none -z-10"></div>

            {/* MATCH PREDICTION AREA */}
            <div className="flex flex-col md:flex-row flex-1 min-h-0">
                  
                {/* LEFT SIDE (Teams) */}
                <div className="md:w-[40%] flex flex-col md:items-center md:justify-center border-b md:border-b-0 md:border-r border-white/10 p-6">
    
                    {/* Header Area */}
                    <div className="relative z-20 w-full bg-white/10 backdrop-blur-md p-2 mb-4 md:mb-0 text-center border-b border-white/10">
                      <span className="text-white/90 text-sm font-bold tracking-widest uppercase">Correct Matches - Soon</span>
                    </div>

                    <div className="md:sticky md:top-0 md:h-full w-full flex items-center justify-center gap-8">
                      
                    <div className="flex flex-col items-center gap-2 text-center">
                        <img src={state.homeLogo || pieceballicon} className="w-16 h-16 object-contain" />
                        <span className="text-white font-bold">{state.home}</span>
                    </div>

                    <span className="text-4xl font-black text-yellow-400">VS</span>

                    <div className="flex flex-col items-center gap-2 text-center">
                        <img src={state.awayLogo || pieceballicon} className="w-16 h-16 object-contain" />
                        <span className="text-white font-bold">{state.away}</span>
                    </div>

                    </div>

                </div>


                {/* RIGHT SIDE (Scrollable Betting Options) */}
                <div className="md:w-[60%] flex flex-col overflow-y-auto p-6 space-y-8 scrollbars">

                  {/* WHO WILL WIN SECTION */}
                  <div className="w-full flex flex-col gap-6">

                      <div className={`${sectionTitleGradient} p-[2px] rounded-full shadow-lg`}>
                        <div className="bg-black/20 backdrop-blur-sm text-center py-2 px-6 rounded-full">
                          <span className="text-white font-black text-xl tracking-tighter uppercase italic">Who will win?</span>
                        </div>
                      </div>

                      <div className="space-y-2 px-2">
                      {[
                          { label: "Draw", value: "draw" },
                          { label: state.home, value: "home" },
                          { label: state.away, value: "away" },
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
                  <div className="w-full flex flex-col gap-6">

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
                            { label: state.home, value: "home" },
                            { label: state.away, value: "away" },
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

            </div>

            {/* 3. Confirm BUTTON */}
            <div className="flex-shrink-0 p-4 bg-black/20 backdrop-blur-md border-t border-white/10">
                <button onClick={handleConfirm} className="relative w-full text-center py-4 px-6 rounded-2xl group transition duration-300 active:scale-95 overflow-hidden cursor-pointer">
                    
                  <div className={`${ruleButtonGradient} absolute inset-0 rounded-0 -z-10`}></div>
                  {/* <div className="absolute top-0 left-0 h-full w-[30%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-30deg] animate-glimmer z-10"></div> */}
                  {/* <span className="relative z-30 text-white font-black text-2xl tracking-tighter uppercase italic drop-shadow-lg">Confirm Bet</span> */}
                    <span className="relative z-30 text-white font-black text-2xl tracking-wide uppercase italic drop-shadow-lg">
                      {state?.existingBet ? "Update Bet" : "Confirm Bet"}
                    </span>

                </button>
            </div>

        </div>

      </section>

    </div>
  );
}