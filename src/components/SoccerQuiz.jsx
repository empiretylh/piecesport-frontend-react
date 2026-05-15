import { React, useState, useEffect, useRef } from "react";
import { ArrowLeft, ChevronDown, ShoppingCart, Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";

import pieceballicon from "../assets/img/welcomeImg/pieceballicon.png";
import titleone from "../assets/img/footballmatchimg/titleone.png";
import titletwo from "../assets/img/footballmatchimg/titletwo.png";
import titlethree from "../assets/img/footballmatchimg/titlethree.png";
import titlefour from "../assets/img/footballmatchimg/titlefour.png";

import background1 from "../assets/img/footballmatchimg/bgcyber.png";
import background2 from "../assets/img/footballmatchimg/bg2.jpg";
import quizplaybtn from "../assets/img/footballmatchimg/soccerquiz.png";


export default function SoccerQuizPage() {

    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    const backArrowClick = ()=> navigate(-1);  

    const [activeTab, setActiveTab] = useState("game");
    const [isOpen, setIsOpen] = useState(false);

    const tabs = ["game", "leaderboard", "reward"];
    const activeIndex = tabs.indexOf(activeTab);

    //   console.log("TOKEN from storage:", localStorage.getItem("token"));

    const quizplayHandler =()=> navigate("/quiz/game");


    useEffect(()=> {
        const handleClickOutside = (event)=> {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return ()=> {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const leaderboardData = [
        { id: 1, rank: 1, phone: "+959 12XXXX01", points: 320 },
        { id: 2, rank: 2, phone: "+959 12XXXX02", points: 295 },
        { id: 3, rank: 3, phone: "+959 12XXXX03", points: 280 },
        { id: 4, rank: 4, phone: "+959 12XXXX04", points: 250 },
        { id: 5, rank: 5, phone: "+959 12XXXX05", points: 230 },
        { id: 6, rank: 6, phone: "+959 12XXXX06", points: 210 },
        { id: 7, rank: 7, phone: "+959 12XXXX07", points: 180 },
        { id: 8, rank: 8, phone: "+959 12XXXX08", points: 150 },
        { id: 9, rank: 9, phone: "+959 12XXXX09", points: 120 },
        { id: 10, rank: 10, phone: "+959 12XXXX10", points: 80 }
    ];

    const rewardsData = [
        { id: 1, rank: 1, tier: "Top 1", rewards: "300,000 MMK" },
        { id: 2, rank: 2, tier: "Top 2", rewards: "200,000 MMK" },
        { id: 3, rank: 3, tier: "Top 3", rewards: "100,000 MMK" },
        { id: 4, rank: 4, tier: "Top 4-8", rewards: "MPT Phone Bill 30,000" },
        { id: 5, rank: 5, tier: "Top 9-10", rewards: "MPT Phone Bill 10,000" },
    ];


  return (
    <div className="w-full min-h-screen bg-gray-200 flex justify-center">
        <div className="w-full max-w-[450px] min-h-screen overflow-hidden relative">

            <div className="h-screen w-full overflow-hidden flex flex-col items-center justify-between p-3 bg-gradient-to-br from-slate-400 via-blue-400 to-amber-400">

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
                    <div className="text-yellow-400 text-4xl flex items-center justify-center -mt-8 sugar-text">Soccer Quiz</div>

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

                        <div className="absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-blue-600 to-yellow-400 transition-all duration-300" 
                        style={{ width: `calc((100% - 0.5rem) / ${tabs.length})`,left:`calc(${activeIndex} * ((100% - 0.5rem) / ${tabs.length}) + 0.25rem )` }}></div>

                        {/* Btns */}
                        {tabs.map((tab) => (
                        <button key={tab} onClick={()=> setActiveTab(tab)} className={`relative z-10 flex-1 rounded-full py-1 capitalize transition font-medium
                            ${activeTab === tab ? "text-white" : "text-gray-700"}`}>{tab}
                        </button>
                        ))}

                    </div>

                    {/* MATCH CONTENT AREA */}
                    <div className="flex-1 flex flex-col min-h-0 px-3 py-2">

                        {/* MATCH LIST */}
                        <div className={`flex-1 ${activeTab !== "game" ? "overflow-y-auto scrollbars" : "overflow-hidden"}`}>

                            {/* Game */}
                            {activeTab === "game" && (
                            <div onClick={quizplayHandler} className="w-full h-full flex items-center justify-center p-2 transition duration-300 hover:scale-105 cursor-pointer">
                                <img src={quizplaybtn} alt="quizplaybtn" className="w-full h-auto max-h-full object-contain" />
                            </div>
                            )}             
                            {/* Game  */}

                            {/* Leaderboard  */}
                            {activeTab === "leaderboard" && (
                            <div className="flex flex-col gap-3">

                            {leaderboardData.map((player, index) => (
                                <div key={player.id} className={`flex items-center justify-between rounded-xl px-4 py-3 text-black shadow-md
                                ${index === 0? "bg-yellow-500": index === 1? "bg-gray-400": index === 2? "bg-amber-700 border-amber-900 text-white": "bg-white border-gray-200"}`}>

                                {/* Left */}
                                <div className="flex items-center gap-4">

                                    {/* Rank */}
                                    <div className={`w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center font-bold relative 
                                    ${index === 0 ? "bg-yellow-500 text-white" : index === 1 ? "bg-gray-400 text-white" : index === 2 ? "bg-amber-800 text-white": 
                                    "bg-black/40 text-white"}`}>
                                        {index === 0 && (
                                            <Crown size={18} className="absolute -top-3 text-yellow-700 fill-yellow-800" />
                                        )}
                                        #{player.rank}
                                    </div>

                                    {/* Phone */}
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold">{player.phone}</span>
                                    </div>

                                </div>

                                {/* Points */}
                                <div className="text-right">
                                    <div className={`text-lg font-extrabold ${index === 0 ? "text-yellow-700" : index === 1 ? "text-gray-700" : index === 2 ? "text-yellow-200" : "text-blue-600"}`}>{player.points}</div>
                                    <div className={`${index === 2 ? "text-gray-200" : "text-gray-600"} text-xs`}>Points</div>
                                </div>

                                </div>
                            ))}

                            </div>
                            )}             
                            {/* Leaderboard  */}

                            {/* Reward  */}
                            {activeTab === "reward" && (
                            <div className="flex flex-col gap-3">

                            {rewardsData.map((player, index) => (
                                <div key={player.id} className={`flex items-center justify-between rounded-xl px-4 py-3 text-black shadow-md
                                ${index === 0? "bg-yellow-500": index === 1? "bg-gray-400": index === 2? "bg-amber-700 border-amber-900 text-white": "bg-white border-gray-200"}`}>

                                {/* Left */}
                                <div className="flex items-center gap-4">

                                    {/* Rank */}
                                    <div className={`w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center font-bold relative 
                                    ${index === 0
                                        ? "bg-yellow-500 text-white"
                                        : index === 1
                                        ? "bg-gray-400 text-white"
                                        : index === 2
                                        ? "bg-amber-800 text-white"
                                        : "bg-black/40 text-white"
                                    }`}>
                                    {player.rank}
                                    </div>

                                    {/* Phone */}
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold">{player.tier}</span>
                                    </div>

                                </div>

                                {/* Points */}
                                <div className="text-right">
                                    <div className={`text-lg font-extrabold ${index === 0 ? "text-yellow-700" : index === 1 ? "text-gray-700" : index === 2 ? "text-yellow-200" : "text-black"}`}>{player.rewards}</div>
                                    <div className={`${index === 2 ? "text-gray-200" : "text-gray-600"} text-xs`}></div>
                                </div>

                                </div>
                            ))}

                            </div>
                            )}             
                            {/* Reward  */}

                        </div>

                        {/* Play btn */}
                        {/* {activeTab === "game" &&
                            <div className="flex-shrink-0 pt-2">
                                <button className={`w-full py-3 rounded-xl text-white font-bold transition bg-gradient-to-r from-blue-600 to-yellow-400 hover:brightness-110 active:scale-95`}>
                                Play
                                </button>
                            </div>
                        } */}
                        

                    </div>

                </div>

            </div>

        </div>
    </div>
    
  );
}