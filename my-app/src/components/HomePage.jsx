import { useState } from "react";
import { useNavigate } from "react-router-dom";

import pieceballicon from "../assets/img/welcomeImg/pieceballicon.png";
import footballicon from "../assets/img/welcomeImg/footballicon.png";
import text1 from "../assets/img/homepageimg/text1.png"
import leftplayer from "../assets/img/welcomeImg/leftplayer.png";
import rightplayer from "../assets/img/welcomeImg/rightplayer.png";

import vsleft from "../assets/img/homepageimg/leftp.png"
import vsright from "../assets/img/homepageimg/rightp.png"
import quiz from "../assets/img/homepageimg/quiz.png"
import whistle from "../assets/img/homepageimg/whistle.png"
import tv from "../assets/img/homepageimg/tv.png"
import buycoins from "../assets/img/homepageimg/buycoins.png"


import { User } from "lucide-react";
import { Settings } from "lucide-react";

export default function HomePage(){

    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const handlePlay = ()=> {
        // console.log("asds");
        
        navigate("/"); // redirect
    };

    const playandwinBtn = ()=>{
        navigate("/selectmode");
    };

    return(
        <>
            <div className="relative w-full min-h-screen flex flex-col bg-gradient-to-b from-blue-900 to-green-400">

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
                <section className="relative flex flex-col items-center text-center pt-6">

                    <h2 className="text-white text-xl tracking-wide">PIECES SPORT</h2>
                    <h1 className="text-white text-5xl font-bold mt-2">PLAY & WIN</h1>

                    <img src={text1} alt="text1" />


                    <div className="relative w-full flex items-center justify-center">
                    
                        <img src={leftplayer} alt="left" className="absolute left-0 bottom-0 w-[25vw] max-w-[220px] min-w-[120px]"/>
                    
                        <div className="max-w-[500px] min-w-[200px] z-10">
                            <img src={footballicon} alt="football" className="w-full h-auto object-contain" />
                        </div>

                        <img src={rightplayer} alt="right" className="absolute right-0 bottom-0 w-[25vw] max-w-[220px] min-w-[120px]"/>
                    
                    </div>




                </section>
                {/* TOP SECTION */}
                     
                {/* Bar Between Top and Bottom */}
                <div>
                    <div className="w-full h-6 bg-lime-400"></div>
                    <div className="w-full h-3 bg-lime-400 mt-1"></div>
                    
                    <div className="flex mt-1">
                        <span className="w-full h-1 bg-lime-400"></span>
                        <span className="w-full"></span>
                        <span className="w-full h-1 bg-lime-400"></span>
                    </div>
                </div>
                {/* Bar Between Top and Bottom */}

                {/* GRID SECTION */}
                <div className="flex-1 px-4 py-6 grid grid-cols-2 md:grid-cols-3 gap-4">

                    {/* Play & Win Container */}
                    <div onClick={playandwinBtn} className="relative row-span-2 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:scale-103 transition
                    bg-[linear-gradient(to_bottom,#997A00_0%,#eab308_12%,#353535_12%,#6b7280_88%,#997A00_88%,#eab308_100%)]">

                        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-2 p-2 pb-10 text-white">

                            <h3 className="text-lg font-bold text-center">Play & WIN</h3>

                            <div className="flex items-center justify-center gap-2 lg:gap-13 mb-3">
                                <img src={vsleft} alt="left" className="w-[18vw] max-w-[70px] min-w-[50px] h-auto object-contain" />
                                <span className="text-2xl font-bold">VS</span>
                                <img src={vsright} alt="right" className="w-[18vw] max-w-[70px] min-w-[50px] h-auto object-contain" />
                            </div>

                        </div>

                        <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col items-center pb-2">
                            <p className="text-md md:text-xl font-semibold text-white whitespace-nowrap drop-shadow">Prediction CHALLENGE</p>
                            <p className="text-xs md:text-sm font-bold text-white bg-black/80 px-6 py-1 whitespace-nowrap"
                            style={{ clipPath: "polygon(0 33%, 100% 33%, 84% 100%, 15% 100%)" }}
                            >
                                PIECES SPORT
                            </p>
                        </div>

                    </div>
                    

                    {/* <img src={test}  alt="bg" className="absolute inset-0 w-full  object-contain background-center" /> */}
                    

                    {/* Soccer Quiz Container */}
                    <div className="group relative rounded-2xl p-[1px] overflow-hidden cursor-pointer transition duration-300 hover:scale-105">
    
                        {/* Glow border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-lime-300 via-green-400 to-green-700 opacity-70 blur-md group-hover:opacity-100 transition"></div>

                        {/* Card container */}
                        <div className="relative rounded-2xl p-4 bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl overflow-hidden">
                            
                            <div className="absolute inset-0 bg-[#ABFC3A]/90"></div>

                            <div className="absolute inset-0 bg-gradient-to-br from-[#ABFC3A] via-[#8edc30] to-[#669623] opacity-90"
                                style={{
                                    clipPath: "polygon(100% 0%, 100% 100%, 60% 100%, 65% 0%)"
                                }}
                            ></div>


                            <div className="relative flex items-center justify-between z-10">
                                <div className="-ml-1 sm:ml-0">
                                    <h3 className="font-bold uppercase text-black/90 tracking-wide">Soccer Quiz</h3>
                                    <p className="text-sm font-semibold text-black/70">Play For Reward</p>
                                </div>                               
                                
                                <img src={quiz} alt="quiz" className="w-14 h-14 md:w-16 md:h-16 -mr-2 md:mr-5 drop-shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
                            </div>

                        </div>

                    </div>


                    {/* Live Score Container */}
                    <div className="group relative rounded-2xl p-[1px] overflow-hidden cursor-pointer transition duration-300 hover:scale-105">
    
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 opacity-70 blur-md group-hover:opacity-100 transition"></div>

                        <div className="relative rounded-2xl p-4 bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl overflow-hidden">
                            
                            <div className="absolute inset-0 bg-[#F4D328]/90"></div>

                            <div
                                className="absolute inset-0 bg-gradient-to-br from-[#F4D328] via-[#d4b625] to-[#8F7D1C] opacity-90"
                                style={{
                                    clipPath: "polygon(100% 0%, 100% 100%, 60% 100%, 65% 0%)"
                                }}
                            ></div>

                            {/* <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div> */}

                            <div className="relative flex items-center justify-between z-10">
                                <div className="-ml-1 sm:ml-0">
                                    <h3 className="font-bold uppercase text-black/90 tracking-wide">Live Score</h3>
                                    <p className="text-sm font-semibold text-black/70">Match Result</p>
                                </div>                               
                                
                                <img src={whistle} alt="whistle" className="w-14 h-14 md:w-16 md:h-16 -mr-2 md:mr-5 drop-shadow-lg transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                            </div>

                        </div>
                    </div>


                    {/* Infotainment Container */}
                    <div className="group relative rounded-2xl p-[1px] overflow-hidden cursor-pointer transition duration-300 hover:scale-105">
    
                        <div className="absolute inset-0 bg-gradient-to-r from-red-300 via-red-400 to-red-600 opacity-70 blur-md group-hover:opacity-100 transition"></div>

                        <div className="relative rounded-2xl p-4 bg-[#EB1B4C]/10 backdrop-blur-xl border border-[#EB1B4C]/20 shadow-xl overflow-hidden">
                            
                            <div className="absolute inset-0 bg-[#EB1B4C]/90"></div>

                            <div className="absolute inset-0 bg-gradient-to-br from-[#ff4d6d] via-[#EB1B4C] to-[#850F2B] opacity-90"
                                style={{
                                    clipPath: "polygon(100% 0%, 100% 100%, 60% 100%, 65% 0%)"
                                }}
                            ></div>

                            <div className="relative flex items-center justify-between z-10">
                                <div className="-ml-1 sm:ml-0">
                                    <h3 className="font-bold uppercase text-black/90 tracking-wide text-white">Infotainment</h3>
                                    <p className="text-sm font-semibold text-white/70">Watching for info</p>
                                </div>                               
                                
                                <img src={tv} alt="tv" className="w-14 h-14 md:w-16 md:h-16 md:mr-5 drop-shadow-lg transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                            </div>

                        </div>
                    </div>



                    {/* Free Game Container */}
                    <div className="group relative rounded-2xl p-[1px] overflow-hidden cursor-pointer transition duration-300 hover:scale-105">
    
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-purple-500 to-purple-700 opacity-70 blur-md group-hover:opacity-100 transition"></div>

                        <div className="relative rounded-2xl p-4 bg-[#8D2EED]/10 backdrop-blur-xl border border-[#8D2EED]/20 shadow-xl overflow-hidden">
                            
                            <div className="absolute inset-0 bg-[#8D2EED]/90"></div>

                            <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7] via-[#7e22ce] to-[#3b0764] opacity-90"
                                style={{
                                    clipPath: "polygon(100% 0%, 100% 100%, 60% 100%, 65% 0%)"
                                }}
                            ></div>

                            <div className="relative flex items-center justify-between z-10">
                                <div className="-ml-1 sm:ml-0">
                                    <h3 className="font-bold uppercase text-black/90 tracking-wide text-white">Free Game</h3>
                                    <p className="text-sm font-semibold text-white/70">Play Zone</p>
                                </div>                               
                                
                                <img src={tv} alt="tv" className="w-14 h-14 md:w-16 md:h-16 md:mr-5 drop-shadow-lg transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                            </div>

                        </div>
                    </div>



                    {/* Profile Container */}
                    <div className="group bg-gray-300/100 backdrop-blur-md border border-black/70 rounded-xl p-4 shadow-lg flex items-center justify-center md:justify-start gap-3 cursor-pointer hover:scale-102 transition">
                        <div className="border-2 border-black rounded-full p-1 group-hover:animate-bounce">
                            <User className="w-5 h-5 transition-transform duration-300 group-hover:scale-140" />
                        </div>
                        <h3 className="font-bold uppercase">Profile</h3>
                    </div>

                    {/* Buy Coins Container */}
                    <div className="group relative rounded-2xl p-[1px] overflow-hidden cursor-pointer transition duration-300 hover:scale-105">
    
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 opacity-70 blur-md group-hover:opacity-100 transition"></div>

                        <div className="relative rounded-2xl p-4 bg-[#244184]/10 backdrop-blur-xl border border-[#244184]/20 shadow-xl overflow-hidden">
                            
                            <div className="absolute inset-0 bg-[#244184]/90"></div>

                            <div className="absolute inset-0 bg-gradient-to-br from-[#60a5fa] via-[#244184] to-[#080F1E] opacity-90"
                                style={{
                                    clipPath: "polygon(100% 0%, 100% 100%, 60% 100%, 65% 0%)"
                                }}
                            ></div>

                            <div className="relative flex items-center justify-between z-10">
                                <div className="-ml-1 sm:ml-0">
                                    <h3 className="font-bold uppercase text-black/90 tracking-wide text-white">Buy Coins</h3>
                                    <p className="text-sm font-semibold text-white/70">Coin Shop</p>
                                </div>                               
                                
                                <img src={buycoins} alt="buycoins" className="w-14 h-14 md:w-16 md:h-16 md:mr-5 drop-shadow-lg transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                            </div>

                        </div>
                    </div>


                    {/* Setting Container */}
                    <div className="group bg-gray-300/70 backdrop-blur-md border border-white/40 rounded-xl p-4 shadow-lg col-span-2 md:col-span-1
                    flex items-center justify-center md:justify-start gap-3 cursor-pointer hover:scale-105 transition">
                        <Settings className="w-6 h-6 text-black/70 transition-transform duration-600 group-hover:rotate-180" />
                        <h3 className="font-bold uppercase">Setting</h3>
                    </div>

                </div>

                {/* FOOTER BAR */}
                <div className="bg-lime-500 w-full py-1 text-center font-bold border-t-2 border-green-600 mt-auto">
                    <p className="text-black text-xs tracking-wide">
                        &copy; {new Date().getFullYear()} by Illuminati — All Rights Reserved
                    </p>
                </div>

            </div>
        </>
    )
}