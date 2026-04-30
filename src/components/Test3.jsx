import { React, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";


import pieceballicon from "../assets/img/welcomeImg/pieceballicon.png";
import titleone from "../assets/img/footballmatchimg/titleone.png";
import titletwo from "../assets/img/footballmatchimg/titletwo.png";
import titlethree from "../assets/img/footballmatchimg/titlethree.png";
import titlefour from "../assets/img/footballmatchimg/titlefour.png";

import liverpool from "../assets/img/footballmatchimg/liverpool.png";
import palace from "../assets/img/footballmatchimg/palace.png";
import arsenal from "../assets/img/footballmatchimg/arsenal.png";



const matches = [
  { home: "Crystal Palace", away: "Liverpool", homeimg: palace , awayimg: liverpool },
  { home: "Arsenal", away: "Southampton", homeimg: arsenal , awayimg: liverpool },
  { home: "Brentford", away: "Wolves", homeimg: palace , awayimg: liverpool },
  { home: "Leicester", away: "Bournemouth", homeimg: palace , awayimg: liverpool },
  { home: "Man City", away: "Fulham", homeimg: palace , awayimg: liverpool },
  { home: "Leganes", away: "Valencia", homeimg: palace , awayimg: liverpool },
  { home: "Union Berlin", away: "Dortmund", homeimg: palace , awayimg: liverpool },
  { home: "Marseille", away: "Angers", homeimg: palace , awayimg: liverpool },
  { home: "Marseille", away: "Angers", homeimg: palace , awayimg: liverpool },
  { home: "Marseille", away: "Angers", homeimg: palace , awayimg: liverpool },
  { home: "Marseille", away: "Angers", homeimg: palace , awayimg: liverpool },
  { home: "Marseille", away: "Angers", homeimg: palace , awayimg: liverpool },
];

const teamLogos = {
  "Liverpool": liverpool,
  "Crystal Palace": palace,
  "Arsenal": arsenal,
};

export default function Test3() {

  const navigate = useNavigate();
  const backArrowClick = ()=> navigate("/selectmode");  

  const [selectedMatch, setSelectedMatch] = useState(null);

  return (
    <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-400 via-blue-400 to-amber-400 flex flex-col items-center justify-between p-3">

      {/* Back Btn  */}
      <div className="w-full flex items-center justify-between px-6 py-2 z-10">
              
        <button onClick={backArrowClick} className="bg-gray-600/50 p-2 rounded-md cursor-pointer transition hover:bg-gray-400/60 hover:scale-110">
          <ArrowLeft size={20} />
        </button>
              
      </div>
      {/* Back Btn  */}


      {/* TOP BAR */}
      <div className="w-full flex items-center justify-center">

        {/* Title logo */}
        <div className="flex items-center justify-center -mt-8">
          <img src={pieceballicon} alt="pieceballicon" className="md:w-46 md:h-auto" />
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


      {/* TITLE + BADGES */}
      <div className="flex flex-col items-center gap-4 w-full">

        {/* TITLE IMAGE */}
        <div className="w-full max-w-md h-16 flex items-center justify-center -mt-4 block sm:hidden">
          <img src={titleone} alt="chatchinpouk" className="animate-[scalePulse_1.5s_ease-in-out_infinite]" />
        </div>

        {/* BADGES */}
        <div className="flex md:gap-20 justify-center sm:mb-6">
          {[titletwo, titlethree, titlefour].map((i) => (
            <div key={i} className="w-40 h-20 md:w-40 md:h-20 flex items-center justify-center sm:-mt-6">
              <img src={i} alt={i} className="md:w-50 md:h-40 sm:animate-[scalePulse_1.5s_ease-in-out_infinite]" />
            </div>
          ))}
        </div>

      </div>

      {/* MATCH CARD */}
      {/* <div className="w-full max-w-xl flex-1 flex flex-col bg-black/40 backdrop-blur-lg rounded-2xl overflow-hidden">

        <div className="flex bg-white/80 rounded-full m-3 p-1 text-sm">
          <button className="flex-1 bg-gradient-to-r from-blue-600 to-yellow-400 text-white rounded-full py-1">
            Match
          </button>
          <button className="flex-1 text-gray-700">History</button>
          <button className="flex-1 text-gray-700">Reward</button>
        </div>

        <div className="mx-3 rounded-xl bg-gradient-to-r from-blue-600 to-yellow-400 text-white text-center py-2 text-sm">
          Prediction Week - 9
        </div>

        <div className="flex-1 px-3 py-2 flex flex-col">

          <div className="flex-1 overflow-y-auto pr-1 space-y-2">
            {matches.map((m, index) => (

              <div key={index} className="grid grid-cols-3 items-center text-white text-sm border-b border-white/30 pb-2">

                <div className="flex items-center justify-between">
                  <span className="truncate">{m.home}</span>
                  <div className="w-6 h-6"> 
                    <img src={liverpool} alt="liverpool" />
                  </div>
                </div>

                <div className="text-center font-bold">VS</div>

                <div className="flex items-center justify-between">
                  <div className="w-6 h-6"> 
                    <img src={palace} alt="palace" />
                  </div>
                  <span className="truncate">{m.away}</span>
                </div>
              </div>

            ))}
          </div>

          <button className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-yellow-400 text-white font-bold">
            Play
          </button>
        </div>
        
      </div> */}
      {/* MATCH CARD */}
      <div className="w-full max-w-xl flex-1 flex flex-col bg-black/40 backdrop-blur-lg rounded-2xl overflow-hidden mb-4">
        
        {/* TABS */}
        <div className="flex flex-shrink-0 bg-white/80 rounded-full m-3 p-1 text-sm">
          <button className="flex-1 bg-gradient-to-r from-blue-600 to-yellow-400 text-white rounded-full py-1">
            Match
          </button>
          <button className="flex-1 text-gray-700">History</button>
          <button className="flex-1 text-gray-700">Reward</button>
        </div>

        {/* HEADER (Stay Fixed) */}
        <div className="mx-3 flex-shrink-0 rounded-xl bg-gradient-to-r from-blue-600 to-yellow-400 text-white text-center py-2 text-sm">
          Prediction Week - 9
        </div>

        {/* MATCH CONTENT AREA */}
        <div className="flex-1 flex flex-col min-h-0 px-3 py-2">

          {/* MATCH LIST */}
          {/* <div className="flex-1 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-white/20"> */}
          <div className="flex-1 overflow-y-auto scrollbars">
            {matches.map((m, index) => (
              <div key={index} onClick={()=>setSelectedMatch({ ...m, homeLogo: teamLogos[m.home],awayLogo: teamLogos[m.away],})}
              className={`grid grid-cols-3 items-center text-white text-sm cursor-pointer transition
              border-b p-4 border-white/30 ${ selectedMatch?.home === m.home && selectedMatch?.away === m.away? "bg-yellow-400/40": "hover:bg-gray-400/40"}`}>
                
                {/* HOME */}
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate">{m.home}</span>
                  <div className="w-6 h-6 flex-shrink-0"> 
                    <img src={m.homeimg} alt="logo" className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* VS */}
                <div className="text-center font-bold">VS</div>

                {/* AWAY */}
                <div className="flex items-center justify-between gap-2">
                  <div className="w-6 h-6 flex-shrink-0"> 
                    <img src={m.awayimg} alt="logo" className="w-full h-full object-contain" />
                  </div>
                  <span className="truncate text-right">{m.away}</span>
                </div>
                
              </div>

            ))}
          </div>

          {/* Play btn */}
          <div className="flex-shrink-0 pt-2">
            <button disabled={!selectedMatch} onClick={()=> navigate("/betting", { state:selectedMatch })} 
            className={`w-full py-3 rounded-xl text-white font-bold transition ${selectedMatch
            ? "bg-gradient-to-r from-blue-600 to-yellow-400 text-white hover:brightness-110 active:scale-95"
            : "bg-gray-400 text-gray-700 cursor-not-allowed"}`}>
              Play
            </button>
          </div>

        </div>

      </div>


    </div>
  );
}