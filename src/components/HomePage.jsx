import { useState } from "react";
import { useNavigate } from "react-router-dom";

import footballicon from "../assets/img/welcomeImg/footballicon.png";
import text1 from "../assets/img/homepageimg/text1.png";
import leftplayer from "../assets/img/welcomeImg/leftplayer.png";
import rightplayer from "../assets/img/welcomeImg/rightplayer.png";

import vsleft from "../assets/img/homepageimg/leftp.png";
import vsright from "../assets/img/homepageimg/rightp.png";
import quiz from "../assets/img/homepageimg/quiz.png";
import whistle from "../assets/img/homepageimg/whistle.png";
import tv from "../assets/img/homepageimg/tv.png";
import buycoins from "../assets/img/homepageimg/buycoins.png";

import { User, Settings } from "lucide-react";

export default function Test() {

    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handlePlay = () => navigate("/");
    const playandwinBtn = () => navigate("/selectmode");

    return (
        <div className="relative w-full h-screen overflow-hidden flex flex-col bg-gradient-to-b from-blue-900 to-green-400 pt-2 md:pt-16">

            {/* Logout Btn  */}
            <div className="md:block absolute top-4 left-0 z-20">

                <div onClick={() => setOpen(!open)} className="relative z-30 cursor-pointer bg-white/30 backdrop-blur-md p-3 rounded-r-full shadow-md flex items-center justify-center">
                    <span className={`text-white text-xl transition-transform duration-300 ${
                        open ? "rotate-180" : "rotate-0"
                    }`}
                    >
                    ➤
                    </span>
                </div>

                        
                <div className={`absolute top-0 left-0 h-full flex items-center transition-transform duration-500 z-10 ${
                    open ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <button onClick={handlePlay} className="ml-12 bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-600 transition">
                        Logout
                    </button>
                </div>
                    
            </div>
            {/* Logout Btn  */}

            {/* TOP SECTION */}
            <section className="relative shrink-0 flex flex-col items-center text-center pt-10 sm:pt-2 gap-1">

                <div className="mb-10 md:-mt-6">
                    <h2 className="text-white text-sm md:text-lg tracking-widest">PIECES SPORT</h2>
                    <h1 className="text-white text-3xl md:text-6xl font-bold leading-tight">PLAY & WIN</h1>
                </div>               

                <div className="relative w-full h-[25vh] max-h-[200px] sm:max-h-[150px] flex items-end justify-center">
                    <img src={leftplayer} alt="left" className="absolute left-0 -bottom-6 sm:bottom-0 h-[26vh] max-h-[260px] md:h-[60vh] md:max-h-[320px] w-auto object-contain"/>
                    <div className="w-full flex justify-center sm:justify-evenly h-[14vh] max-h-[100px] min-h-[60px] mb-10 md:mb-12 z-10 ">
                        <img src={text1} alt="text1" className="h-25 md:h-35 w-auto object-contain animate-bounce [animation-duration:1.5s] [animation-delay:0.5s]" />
                        <img src={footballicon} alt="football" className="h-25 md:h-35 w-auto object-contain" />
                    </div>
                    <img src={rightplayer} alt="right" className="absolute right-0 -bottom-6 sm:bottom-0 h-[26vh] max-h-[260px] md:h-[60vh] md:max-h-[320px] w-auto object-contain"/>
                </div>

            </section>

            {/* Bars */}
            <div className="shrink-0 mt-6 sm:mt-0">
                <div className="w-full h-3 bg-lime-400"></div>
                <div className="w-full h-2 bg-lime-400 mt-[2px]"></div>
                <div className="flex mt-[2px]">
                    <span className="w-full h-[2px] bg-lime-400"></span>
                    <span className="w-full"></span>
                    <span className="w-full h-[2px] bg-lime-400"></span>
                </div>
            </div>

            {/* GRID SECTION — KEY FIX 7: flex-1 + overflow-hidden keeps it inside remaining space */}
            <div className="flex-1 overflow-hidden px-3 py-3 grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-fr">

                {/* Play & Win */}
                <div onClick={playandwinBtn} className="relative row-span-2 rounded-xl shadow-lg overflow-hidden cursor-pointer
                hover:scale-[1.03] transition bg-[linear-gradient(to_bottom,#997A00_0%,#eab308_12%,#353535_12%,#6b7280_88%,#997A00_88%,#eab308_100%)]"
                >
                    <div className="relative z-10 flex flex-col items-center justify-center h-full sm:gap-2 -mt-5 sm:-mt-0 pb-2 sm:pb-10 text-white">
                        <h3 className="text-lg md:text-xl lg:text-3xl font-bold text-center">Play &amp; WIN</h3>
                        <div className="flex items-center justify-center gap-2 lg:gap-6">
                            <img src={vsleft} alt="left" className="w-[14vw] max-w-[100px] min-w-[80px] h-auto object-contain" />
                            <span className="text-xl font-bold">VS</span>
                            <img src={vsright} alt="right" className="w-[14vw] max-w-[100px] min-w-[80px] h-auto object-contain" />
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col items-center mb-2 md:mb-5">
                        <p className="text-sm md:text-md lg:text-lg font-semibold text-white drop-shadow md:mb-0">Prediction CHALLENGE</p>
                        <p className="text-xs font-bold text-white bg-black/80 px-5 pt-3 pb-1 mb-2 sm:mb-0 whitespace-nowrap"
                            style={{ clipPath: "polygon(0 33%, 100% 33%, 84% 100%, 15% 100%)" }}
                        >
                            PIECES SPORT
                        </p>
                    </div>
                </div>

                {/* Reusable small card wrapper — inline for clarity */}

                {/* Soccer Quiz */}
                <div className="group relative rounded-xl p-[1px] overflow-hidden cursor-pointer transition duration-300 hover:scale-105">
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-lime-300 via-green-400 to-green-700 opacity-70 blur-md group-hover:opacity-100 transition"></div>
                    
                    <div className="relative rounded-xl px-2 bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl overflow-hidden h-full">
                        
                        <div className="absolute inset-0 bg-[#ABFC3A]/90"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ABFC3A] via-[#8edc30] to-[#669623] opacity-90" style={{ clipPath: "polygon(100% 0%, 100% 100%, 60% 100%, 65% 0%)" }}></div>
                        <div className="relative flex items-center justify-between h-full z-10">
                            
                            <div>
                                <h3 className="font-bold uppercase text-black/90 tracking-wide text-md sm:text-xl">Soccer Quiz</h3>
                                <p className="text-sm sm:text-md font-semibold text-black/70">Play For Reward</p>
                            </div>
                            <img src={quiz} alt="quiz" className="w-10 h-10 md:w-12 md:h-12 drop-shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />

                        </div>

                    </div>

                </div>

                {/* Live Score */}
                <div className="group relative rounded-xl p-[1px] overflow-hidden cursor-pointer transition duration-300 hover:scale-105">
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 opacity-70 blur-md group-hover:opacity-100 transition"></div>
                    
                    <div className="relative rounded-xl px-2 bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl overflow-hidden h-full">
                        <div className="absolute inset-0 bg-[#F4D328]/90"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#F4D328] via-[#d4b625] to-[#8F7D1C] opacity-90" style={{ clipPath: "polygon(100% 0%, 100% 100%, 60% 100%, 65% 0%)" }}></div>
                        <div className="relative flex items-center justify-between h-full z-10">
                           
                            <div>
                                <h3 className="font-bold uppercase text-black/90 tracking-wide text-md sm:text-xl">Live Score</h3>
                                <p className="text-sm sm:text-md font-semibold text-black/70">Match Result</p>
                            </div>
                            <img src={whistle} alt="whistle" className="w-10 h-10 md:w-12 md:h-12 drop-shadow-lg transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />

                        </div>
                    </div>

                </div>

                {/* Infotainment */}
                <div className="group relative rounded-xl p-[1px] overflow-hidden cursor-pointer transition duration-300 hover:scale-105">
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-red-300 via-red-400 to-red-600 opacity-70 blur-md group-hover:opacity-100 transition"></div>
                    
                    <div className="relative rounded-xl px-2 bg-[#EB1B4C]/10 backdrop-blur-xl border border-[#EB1B4C]/20 shadow-xl overflow-hidden h-full">
                        
                        <div className="absolute inset-0 bg-[#EB1B4C]/90"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ff4d6d] via-[#EB1B4C] to-[#850F2B] opacity-90" style={{ clipPath: "polygon(100% 0%, 100% 100%, 60% 100%, 65% 0%)" }}></div>
                        <div className="relative flex items-center justify-between h-full z-10">
                            
                            <div>
                                <h3 className="font-bold uppercase text-white text-md sm:text-xl tracking-wide">Infotainment</h3>
                                <p className="text-sm sm:text-md font-semibold text-white/70">Watching for info</p>
                            </div>
                            <img src={tv} alt="tv" className="w-10 h-10 drop-shadow-lg transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />

                        </div>

                    </div>
                </div>

                {/* Free Game */}
                <div className="group relative rounded-xl p-[1px] overflow-hidden cursor-pointer transition duration-300 hover:scale-105">
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-purple-500 to-purple-700 opacity-70 blur-md group-hover:opacity-100 transition"></div>
                    
                    <div className="relative rounded-xl px-2 bg-[#8D2EED]/10 backdrop-blur-xl border border-[#8D2EED]/20 shadow-xl overflow-hidden h-full">
                        
                        <div className="absolute inset-0 bg-[#8D2EED]/90"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7] via-[#7e22ce] to-[#3b0764] opacity-90" style={{ clipPath: "polygon(100% 0%, 100% 100%, 60% 100%, 65% 0%)" }}></div>
                        <div className="relative flex items-center justify-between h-full z-10">
                            
                            <div>
                                <h3 className="font-bold uppercase text-white text-lg sm:text-xl tracking-wide">Free Game</h3>
                                <p className="text-sm sm:text-md font-semibold text-white/70">Play Zone</p>
                            </div>
                            <img src={tv} alt="tv" className="w-10 h-10 drop-shadow-lg transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />

                        </div>

                    </div>

                </div>

                {/* Profile */}
                <div className="group bg-gray-300 backdrop-blur-md border border-black/70 rounded-xl px-2 shadow-lg 
                flex items-center justify-center gap-3 md:gap-6 cursor-pointer hover:scale-[1.02] transition">
                    
                    <div className="border-2 border-black rounded-full p-1 group-hover:animate-bounce">
                        <User className="md:w-6 md:h-6" />
                    </div>
                    <h3 className="font-bold uppercase text-xl md:text-2xl">Profile</h3>

                </div>

                {/* Buy Coins */}
                <div className="group relative rounded-xl p-[1px] overflow-hidden cursor-pointer transition duration-300 hover:scale-105">
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 opacity-70 blur-md group-hover:opacity-100 transition"></div>
                    
                    <div className="relative rounded-xl px-2 bg-[#244184]/10 backdrop-blur-xl border border-[#244184]/20 shadow-xl overflow-hidden h-full">
                        
                        <div className="absolute inset-0 bg-[#244184]/90"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#60a5fa] via-[#244184] to-[#080F1E] opacity-90" 
                        style={{ clipPath: "polygon(100% 0%, 100% 100%, 60% 100%, 65% 0%)" }}></div>
                        <div className="relative flex items-center justify-between h-full z-10">

                            <div>
                                <h3 className="font-bold uppercase text-white text-lg sm:text-xl tracking-wide">Buy Coins</h3>
                                <p className="text-sm sm:text-md font-semibold text-white/70">Coin Shop</p>
                            </div>
                            <img src={buycoins} alt="buycoins" className="w-12 h-12 drop-shadow-lg transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />

                        </div>

                    </div>

                </div>

                {/* Settings */}
                <div className="group bg-gray-300/70 backdrop-blur-md border border-white/40 rounded-xl px-2 shadow-lg col-span-2 md:col-span-1
                    flex items-center justify-center gap-3 md:gap-6 cursor-pointer hover:scale-105 transition">
                    
                    <Settings className="md:w-10 md:h-10 text-black/80 transition-transform duration-300 group-hover:rotate-180" />
                    <h3 className="font-bold uppercase text-xl md:text-2xl">Setting</h3>

                </div>

            </div>

            {/* FOOTER */}
            <div className="shrink-0 bg-lime-500 w-full py-1 text-center font-bold border-t-2 border-green-600">
                <p className="text-black text-xs tracking-wide">
                    &copy; {new Date().getFullYear()} by Illuminati &mdash; All Rights Reserved
                </p>
            </div>
        </div>
    );
}