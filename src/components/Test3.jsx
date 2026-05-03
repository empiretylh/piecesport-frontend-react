import { React, useState, useEffect } from "react";
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
import south from "../assets/img/footballmatchimg/south.png";
import brent from "../assets/img/footballmatchimg/brent.png";
import manu from "../assets/img/footballmatchimg/manu.png";



const matches = [
  { home: "Crystal Palace", away: "Liverpool", homeimg: palace , awayimg: liverpool },
  { home: "Arsenal", away: "Southampton", homeimg: arsenal , awayimg: south },
  { home: "Brentford", away: "Man Utd", homeimg: brent , awayimg: manu },
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
  "Southampton": south,
  "Brentford": brent,
  "Man Utd": manu
};

export default function Test3() {

  const navigate = useNavigate();
  const backArrowClick = ()=> navigate("/selectmode");  

  const [selectedMatch, setSelectedMatch] = useState(null);
  const [activeTab, setActiveTab] = useState("match");
  const [bets, setBets] = useState({});

  const tabs = ["match", "history", "reward"];
  const activeIndex = tabs.indexOf(activeTab);

  useEffect(() => {
    const storedbets = JSON.parse(localStorage.getItem("bets")) || {};
    setBets(storedbets);
  }, []);

  function Match({ m, isBetted, selectedMatch, setSelectedMatch, teamLogos }){
    return (

      <div onClick={() =>setSelectedMatch({ ...m, homeLogo: teamLogos[m.home], awayLogo: teamLogos[m.away]})}
      className={`grid grid-cols-3 items-center text-white text-sm cursor-pointer transition border-b p-4 border-white/30 ${
      isBetted ? "bg-green-400/40" : selectedMatch?.home === m.home && selectedMatch?.away === m.away ? "bg-yellow-400/40" : 
      "hover:bg-gray-400/40"}`}>

        {/* HOME */}
        <div className="flex items-center justify-between gap-2">
          <span className="truncate">{m.home}</span>
          <img src={m.homeimg} className="w-6 h-6" />
        </div>

        <div className="text-center font-bold">VS</div>

        {/* AWAY */}
        <div className="flex items-center justify-between gap-2">
          <img src={m.awayimg} className="w-6 h-6" />
          <span className="truncate text-right">{m.away}</span>
        </div>

      </div>
      
    );
  }

  const handlePlayClick = () => {

    if (!selectedMatch) return;

    const matchKey = `${selectedMatch.home}_vs_${selectedMatch.away}`;
    const existingBet = bets[matchKey];

    navigate("/betting", {
      state: {
        ...selectedMatch,
        existingBet,
      },
    });

  };


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
      <div className="w-full flex items-center justify-center select-none">

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
      <div className="flex flex-col items-center gap-4 w-full select-none">

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
      <div className="w-full max-w-xl flex-1 flex flex-col bg-black/40 backdrop-blur-lg rounded-2xl overflow-hidden mb-4">
        
        {/* TABS */}
        {/* <div className="flex flex-shrink-0 bg-white/80 rounded-full m-3 p-1 text-sm">

          {
            ["match", "history", "reward"].map(tab => (

              <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 rounded-full py-1 capitalize transition 
              ${activeTab === tab? "bg-gradient-to-r from-blue-600 to-yellow-400 text-white": "text-gray-700"}`}>
                {tab}
              </button>
              
          ))
        }

        </div> */}
        <div className="relative flex flex-shrink-0 bg-white/80 rounded-full m-3 p-1 text-sm overflow-hidden">

          <div className="absolute top-1 bottom-1 left-1 rounded-full bg-gradient-to-r from-blue-600 to-yellow-400 transition-all duration-300" 
          style={{ width: `calc(100% / ${tabs.length} - 0.5rem)`,transform: `translateX(${activeIndex * 100}%)`,}}></div>

          {/* Btns */}
          {tabs.map((tab) => (
            <button key={tab} onClick={()=> setActiveTab(tab)} className={`relative z-10 flex-1 rounded-full py-1 capitalize transition font-medium
            ${activeTab === tab ? "text-white" : "text-gray-700"}`}>
              {tab}
            </button>
          ))}

        </div>



        {/* HEADER */}
        <div className="mx-3 flex-shrink-0 rounded-xl bg-gradient-to-r from-blue-600 to-yellow-400 text-white text-center py-2 text-sm">
          Prediction Week - 9
        </div>

        {/* MATCH CONTENT AREA */}
        <div className="flex-1 flex flex-col min-h-0 px-3 py-2">

          {/* MATCH LIST */}
          {/* <div className="flex-1 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-white/20"> */}
          <div className="flex-1 overflow-y-auto scrollbars">
              
            {matches.map((m, index) => {

              const matchKey = `${m.home}_vs_${m.away}`;
              const isBetted = bets[matchKey];

              return(
                <Match key={index} m={m} isBetted={isBetted} selectedMatch={selectedMatch} setSelectedMatch={setSelectedMatch} teamLogos={teamLogos} />
              )

            })}
          </div>

          {/* Play btn */}
          {/* <div className="flex-shrink-0 pt-2">
            <button disabled={!selectedMatch} onClick={()=> navigate("/betting", { state:selectedMatch })} 
            className={`w-full py-3 rounded-xl text-white font-bold transition ${selectedMatch
            ? "bg-gradient-to-r from-blue-600 to-yellow-400 text-white hover:brightness-110 active:scale-95"
            : "bg-gray-400 text-gray-700 cursor-not-allowed"}`}>
              Play
            </button>
          </div> */}


          {/* <div className="flex-shrink-0 pt-2">
            <button disabled={!selectedMatch} onClick={()=> {
              const matchKey = `${selectedMatch.home}_vs_${selectedMatch.away}`;
              const existingBet = bets[matchKey];

              navigate("/betting", {
                state: {
                  ...selectedMatch,
                  existingBet, 
                },
              });
            }}
            className={`w-full py-3 rounded-xl text-white font-bold transition ${selectedMatch ? "bg-gradient-to-r from-blue-600 to-yellow-400 text-white hover:brightness-110 active:scale-95"
            : "bg-gray-400 text-gray-700 cursor-not-allowed"}`}>
              Play
            </button>
          </div> */}

          <div className="flex-shrink-0 pt-2">
            <button disabled={!selectedMatch} onClick={handlePlayClick}
            className={`w-full py-3 rounded-xl text-white font-bold transition ${selectedMatch? "bg-gradient-to-r from-blue-600 to-yellow-400 hover:brightness-110 active:scale-95"
            : "bg-gray-400 text-gray-700 cursor-not-allowed"}`}>
              Play
            </button>
          </div>



        </div>

      </div>


    </div>
  );
}