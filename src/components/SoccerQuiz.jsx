import { React, useState, useEffect, useRef } from "react";
import { ArrowLeft, ChevronDown, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

import pieceballicon from "../assets/img/welcomeImg/pieceballicon.png";
import titleone from "../assets/img/footballmatchimg/titleone.png";
import titletwo from "../assets/img/footballmatchimg/titletwo.png";
import titlethree from "../assets/img/footballmatchimg/titlethree.png";
import titlefour from "../assets/img/footballmatchimg/titlefour.png";

import background1 from "../assets/img/footballmatchimg/bgcyber.png";
import background2 from "../assets/img/footballmatchimg/bg2.jpg";

export default function SoccerQuizPage() {

  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const backArrowClick = ()=> navigate(-1);  

  const [selectedMatch, setSelectedMatch] = useState(null);
  const [activeTab, setActiveTab] = useState("match");
  const [bets, setBets] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [matches, setMatches] = useState([]);

  const tabs = ["game", "leaderboard", "reward"];
  const activeIndex = tabs.indexOf(activeTab);

  console.log("TOKEN FROM STORAGE:", localStorage.getItem("token"));
  

  
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



  return (
    <div className="w-full min-h-screen bg-gray-200 flex justify-center">
        <div className="w-full max-w-[450px] min-h-screen overflow-hidden relative">

            <div className="h-screen w-full overflow-hidden flex flex-col items-center justify-between p-3 bg-gradient-to-br from-slate-400 via-blue-400 to-amber-400"
            >

                {/* Back Btn */}
                <div className="w-full flex items-center justify-between px-6 py-2 z-10">
                        
                    <button onClick={backArrowClick} className="bg-gray-600/50 p-2 rounded-md cursor-pointer transition hover:bg-gray-400/60 hover:scale-110">
                    <ArrowLeft size={20} />
                    </button>
                        
                </div>
                {/* Back Btn  */}

                {/* TOP BAR */}
                <div className="w-full flex items-center justify-center select-none">

                    {/* Title */}
                    <div className="text-yellow-400 text-4xl flex items-center justify-center -mt-8 my-Font">Soccer Quiz</div>

                    {/* DIAMOND */}
                    <div ref={dropdownRef} className="w-24 sm:w-30 absolute top-0 right-2 z-50">
                    
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
                            <button onClick={()=>setIsOpen(false)} className="bg-black text-white text-xs px-3 py-1 rounded-full">Shop</button>
                        </div>

                    </div>

                    </div>
                    {/* DIAMOND  */}

                </div>
                {/* TOP BAR */}    

                {/* TITLE + BADGES */}
                <div className="flex flex-col items-center w-full select-none">

                    {/* BADGES */}
                    <div className="flex justify-center sm:mt-6">
                    {[titletwo, titlethree, titlefour].map((i) => (
                        <div key={i} className="w-40 h-20 flex items-center justify-center my-3">
                            <img src={i} alt={i} className="animate-[scalePulse_1.5s_ease-in-out_infinite]" />
                        </div>
                    ))}
                    </div>

                </div>        
                {/* TITLE + BADGES */}

                {/* MATCH CARD */}
                <div className="w-full max-w-xl flex-1 flex flex-col bg-black/40 backdrop-blur-lg rounded-2xl overflow-hidden mb-4">
                    
                    {/* TABS */}
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

                    {/* MATCH CONTENT AREA */}
                    <div className="flex-1 flex flex-col min-h-0 px-3 py-2">

                        {/* MATCH LIST */}
                        <div className="flex-1 overflow-y-auto scrollbars">
                                                

                        </div>

                        {/* Play btn */}
                        <div className="flex-shrink-0 pt-2">
                            <button disabled={!selectedMatch}
                            className={`w-full py-3 rounded-xl text-white font-bold transition ${selectedMatch? "bg-gradient-to-r from-blue-600 to-yellow-400 hover:brightness-110 active:scale-95"
                            : "bg-gray-400 text-gray-700 cursor-not-allowed"}`}>
                            Play
                            </button>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>
    
  );
}