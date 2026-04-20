import { useState } from "react";
import { useNavigate } from "react-router-dom";

import pieceballicon from "../assets/img/welcomeImg/pieceballicon.png";
import footballicon from "../assets/img/welcomeImg/footballicon.png";
import text1 from "../assets/img/homepageimg/text1.png"
import leftplayer from "../assets/img/welcomeImg/leftplayer.png";
import rightplayer from "../assets/img/welcomeImg/rightplayer.png";

import { User } from "lucide-react";
import { Settings } from "lucide-react";

export default function HomePage(){

    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const handlePlay = () => {
        console.log("asds");
        
        navigate("/"); // redirect
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
                    <div className="row-span-2 rounded-xl overflow-hidden shadow-lg flex flex-col">

                        <div className="bg-yellow-500 h-6"></div>

                        <div className="bg-gray-500 flex-1 p-4 flex flex-col justify-center">
                            <h3 className="font-bold text-lg">Play & Win</h3>
                            <p className="text-sm">Prediction Challenge</p>
                        </div>

                        <div className="bg-yellow-500 h-6"></div>

                    </div>

                    {/* Soccer Quiz Container */}
                    <div className="bg-green-400 rounded-xl p-4 shadow-lg">
                        <h3 className="font-bold">Soccer Quiz</h3>
                        <p className="text-sm">Play For Reward</p>
                    </div>

                    {/* Live Score Container */}
                    <div className="bg-yellow-500 rounded-xl p-4 shadow-lg">
                        <h3 className="font-bold">Live Score</h3>
                        <p className="text-sm">Match Result</p>
                    </div>

                    {/* Infotainment Container */}
                    <div className="bg-red-400 rounded-xl p-4 shadow-lg">
                        <h3 className="font-bold">Infotainment</h3>
                        <p className="text-sm">Watching for info</p>
                    </div>

                    {/* Free Game Container */}
                    <div className="bg-purple-500 rounded-xl p-4 shadow-lg">
                    <h3 className="font-bold">Free Game</h3>
                    <p className="text-sm">Play Zone</p>
                    </div>

                    {/* Profile Container */}
                    <div className="bg-gray-300 rounded-xl p-4 shadow-lg flex items-center justify-center md:justify-start gap-3 cursor-pointer hover:scale-102 transition">
                        <User className="w-6 h-6" />
                        <h3 className="font-bold">Profile</h3>
                    </div>

                    {/* Buy Coins Container */}
                    <div className="bg-blue-500 rounded-xl p-4 shadow-lg">
                        <h3 className="font-bold">Buy Coins</h3>
                        <p className="text-sm">Coin Shop</p>
                    </div>

                    {/* Setting Container */}
                    <div className="bg-gray-400 rounded-xl p-4 shadow-lg col-span-2 md:col-span-1 flex items-center gap-3 cursor-pointer hover:scale-105 transition">
                        <Settings className="w-6 h-6 text-black/70" />
                        <h3 className="font-bold">Setting</h3>
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