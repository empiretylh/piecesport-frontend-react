import { React, useState, useEffect, useRef } from "react";
import { ArrowLeft, ChevronDown, ShoppingCart } from "lucide-react";
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
import united from "../assets/img/footballmatchimg/manu.png";


// const matches = [
//   { home: "Crystal Palace", away: "Liverpool", homeimg: palace , awayimg: liverpool },
//   { home: "Arsenal", away: "Southampton", homeimg: arsenal , awayimg: south },
//   { home: "Brentford", away: "Man Utd", homeimg: brent , awayimg: manu },
//   { home: "Leicester", away: "Bournemouth", homeimg: palace , awayimg: liverpool },
//   { home: "Man City", away: "Fulham", homeimg: palace , awayimg: liverpool },
//   { home: "Leganes", away: "Valencia", homeimg: palace , awayimg: liverpool },
//   { home: "Union Berlin", away: "Dortmund", homeimg: palace , awayimg: liverpool },
//   { home: "Marseille", away: "Angers", homeimg: palace , awayimg: liverpool },
//   { home: "Marseille", away: "Angers", homeimg: palace , awayimg: liverpool },
//   { home: "Marseille", away: "Angers", homeimg: palace , awayimg: liverpool },
//   { home: "Marseille", away: "Angers", homeimg: palace , awayimg: liverpool },
//   { home: "Marseille", away: "Angers", homeimg: palace , awayimg: liverpool },
// ];

// const teamLogos = {
//   "Liverpool": liverpool,
//   "Crystal Palace": palace,
//   "Arsenal": arsenal,
//   "Southampton": south,
//   "Brentford": brent,
//   "Man Utd": manu
// };

export default function Test3() {

  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const backArrowClick = ()=> navigate("/selectmode");  

  const [selectedMatch, setSelectedMatch] = useState(null);
  const [activeTab, setActiveTab] = useState("match");
  const [bets, setBets] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [matches, setMatches] = useState([]);

  const tabs = ["match", "history", "reward"];
  const activeIndex = tabs.indexOf(activeTab);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const token = localStorage.getItem("token"); 
        console.log("TOKEN:", token);
        setLoading(true);

        const res = await fetch("https://ps-api-stg.illuminati.com.mm/matches", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // if (!res.ok) {
        //   throw new Error("Failed to fetch matches");
        // }
        
        const data = await res.json();

        console.log(data);

        // setMatches(data.data); 
        if (res.ok && data.data?.length > 0) {
          setMatches(data.data);
        } else {

          //-------- Temporary Dummy Datas --------
          setMatches([
            {
              id: 1,
              team1_name: "Liverpool",
              team2_name: "Arsenal",
              team1_logo: liverpool,
              team2_logo: arsenal,
            },
            {
              id: 2,
              team1_name: "Man Utd",
              team2_name: "Brentford",
              team1_logo: united,
              team2_logo: brent,
            },
          ]);
          //-------- Temporary Dummy Datas --------

        }
      } catch (err) {
        console.error(err);

        // Temporary Dummy Datas if API failed
        setMatches([
          {
            id: 1,
            team1_name: "Liverpool",
            team2_name: "Arsenal",
            team1_logo: liverpool,
            team2_logo: arsenal,
          },
          {
            id: 2,
            team1_name: "Man Utd",
            team2_name: "Brentford",
            team1_logo: united,
            team2_logo: brent,
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  
  useEffect(() => {
    const storedbets = JSON.parse(localStorage.getItem("bets")) || {};
    setBets(storedbets);
  }, []);

  useEffect(()=> {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  function Match({ m, isBetted, selectedMatch, setSelectedMatch }){
    return (

      <div onClick={()=> setSelectedMatch(m)} className={`grid grid-cols-3 items-center text-white text-sm cursor-pointer transition 
      border-b p-4 border-white/30 ${ isBetted ? "bg-green-400/40" : selectedMatch?.team1_name === m.team1_name && selectedMatch?.team2_name === m.team2_name ? 
      "bg-yellow-400/40" : "hover:bg-gray-400/40"}`}>

        {/* Home */}
        <div className="flex items-center justify-between gap-2">
          <span className="truncate">{m.team1_name}</span>
          <img src={m.team1_logo} className="w-6 h-6" />
        </div>

        <div className="text-center font-bold">VS</div>

        {/* Away */}
        <div className="flex items-center justify-between gap-2">
          <img src={m.team2_logo} className="w-6 h-6" />
          <span className="truncate text-right">{m.team2_name}</span>
        </div>

      </div>
      
    );
  }

  // const handlePlayClick = () => {

  //   if (!selectedMatch) return;

  //   const matchKey = `${selectedMatch.home}_vs_${selectedMatch.away}`;
  //   const existingBet = bets[matchKey];

  //   navigate("/betting", {
  //     state: {
  //       ...selectedMatch,
  //       existingBet,
  //     },
  //   });

  // };
  const handlePlayClick = () => {
    if (!selectedMatch) return;
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    const matchKey = `${selectedMatch.team1_name}_vs_${selectedMatch.team2_name}`;
    const existingBet = bets[matchKey];

    setShowConfirm(false);

    navigate("/betting", {
      state: {
        ...selectedMatch,
        existingBet,
      },
    });
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  const getBetCost = () => {
    if (!selectedMatch) return 0;

    const matchKey = `${selectedMatch.team1_name}_vs_${selectedMatch.team2_name}`;
    return bets[matchKey] ? 100 : 1000; 
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
        <div ref={dropdownRef} className="w-24 sm:w-52 md:w-64 absolute top-0 right-2 z-50">
        
          <div onClick={(e)=>{ e.stopPropagation();setIsOpen(prev=> !prev); }} className={`${ isOpen ? "h-[140px] sm:h-[160px]" : "h-[80px]" } 
          bg-yellow-400 text-black font-bold flex flex-col items-center justify-start pt-1 transition-all duration-300 
          ease-in-out overflow-hidden cursor-pointer`}
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 65%, 50% 100%, 0% 65%)"
          }}>
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
              <button onClick={()=>setIsOpen(false)} className="bg-black text-white text-xs px-3 py-1 rounded-full">
                Shop
              </button>
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
        <div className="mx-3 flex-shrink-0 rounded-xl bg-gradient-to-r from-blue-600 to-yellow-400 text-white text-center py-2 text-sm">Prediction Week - 9</div>

        {/* MATCH CONTENT AREA */}
        <div className="flex-1 flex flex-col min-h-0 px-3 py-2">

          {/* MATCH LIST */}
          {/* <div className="flex-1 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-white/20"> */}
          <div className="flex-1 overflow-y-auto scrollbars">
              
            {loading ? (
              <div className="text-white text-center py-4">Loading matches...</div>
            ) : matches.length === 0 ? (
              <div className="text-white text-center py-10">No Matches Available</div>
            ) : (
              matches.map((m, index) => {

                const matchKey = `${m.team1_name}_vs_${m.team2_name}`;
                const isBetted = bets[matchKey];
                
                return(
                  // <Match key={index} m={{
                  //   id: m.id,
                  //   home: m.team1_name,
                  //   away: m.team2_name,
                  //   homeimg: m.team1_logo,
                  //   awayimg: m.team2_logo
                  // }} isBetted={isBetted} selectedMatch={selectedMatch} setSelectedMatch={setSelectedMatch} />
                  <Match key={index} m={m} isBetted={isBetted} selectedMatch={selectedMatch} setSelectedMatch={setSelectedMatch} />
                )

              })
            )}

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


{showConfirm && (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999] ">

    <div className="bg-gray-900 text-white rounded-2xl w-[85%] max-w-sm p-6 relative text-center animate-[scaleIn_0.2s_ease-out]">

      {/* BIG ICON */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-yellow-400 text-black w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-lg">
        {/* 💰 */}
        💎
      </div>

      {/* TITLE */}
      <h2 className="mt-12 text-lg font-bold">
        {getBetCost()} coins will cost
      </h2>

      {/* DESC Text */}
      <p className="text-sm text-gray-300 mt-2">
        {getBetCost() === 100 ? "Editing your bet will cost less" : "Placing a new bet"}
      </p>

      {/* BUTTONS */}
      <div className="flex gap-3 mt-6">
        <button onClick={handleCancel} className="flex-1 py-2 rounded-lg bg-gray-600 hover:bg-gray-500 transition">
          Decline
        </button>

        <button onClick={handleConfirm} className="flex-1 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-yellow-400 text-white font-bold hover:brightness-110 transition" >
          Continue
        </button>
      </div>

    </div>
  </div>
)}


    </div>

    
  );
}