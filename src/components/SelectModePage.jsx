import { useState, React } from 'react'
import { BrowserRouter,Routes,Route,Router } from 'react-router'
import { useNavigate } from "react-router-dom";

import { ArrowLeft } from "lucide-react";

import titlebmbar from "../assets/img/selectgame/titlebmbar.png";
import footballchar from "../assets/img/homepageimg/leftp.png";
import mmachar from "../assets/img/selectgame/mmacharacter.png";
import footballselect from "../assets/img/selectgame/footballselect.png";
import mmaselect from "../assets/img/selectgame/mmaselect.png";

import bgselect from "../assets/img/selectgame/bgselect.png";
import football from "../assets/img/selectgame/football.png";
import mma from "../assets/img/selectgame/mma.png";



export default function SelectModePage() {

  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const backArrowClick = ()=> navigate("/homepage");  
  const goFootball = () => navigate("/footballmatchpage");
  const goMMA = () => navigate("/mma");

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-b from-red-700 via-red-800 to-black flex flex-col items-center text-white relative">

      <div className='absolute inset-0 bg-cover bg-center bg-no-repeat z-0' style={{ backgroundImage: `url(${bgselect})` }}></div>

      <div className="w-full flex items-center justify-between px-6 py-4 z-10">
        
        <button onClick={backArrowClick} className="bg-gray-600/50 p-2 rounded-md cursor-pointer transition hover:bg-gray-400/60 hover:scale-110">
          <ArrowLeft size={20} />
        </button>
        
      </div>

      <div className='z-10'>
        
        {/* Title */}
        <div className="w-full text-center">

          <h1 className="text-3xl md:text-5xl text-center font-extrabold tracking-wider mt-1 sm:mt-2 font-[Sekuya]">
            SELECT GAME
          </h1>
          <img src={titlebmbar} alt="titlebmbar" className="w-full h-4 object-contain" />

        </div>


        <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-40 mt-10">

          {/* Football Block */}
          <div className="flex flex-col items-center gap-6 transition hover:-translate-y-2">

            <img src={footballchar} alt="football" className="w-40 h-40 sm:w-80 sm:h-80 object-contain" />

            <div className="relative w-fit group hover:scale-105 transition">
              
              <div className='hidden sm:block'>

                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black px-3 text-xs tracking-widest 
                font-bold text-lime-400 border border-lime-400 rounded group-hover:-translate-y-2 transition">
                  Football
                </span>

                <div className="bg-black border border-gray-500 p-[2px] rounded-xl transition duration-300
                group-hover:border-lime-400 group-hover:shadow-[0_0_20px_#84cc16]" >
                  
                  <button onClick={goFootball} className="bg-black border border-gray-500 px-8 py-6 rounded-xl flex items-center justify-center 
                  transition duration-300 hover:border-lime-400 hover:shadow-[0_0_20px_#84cc16] hover:scale-105">
                    <img src={footballselect} alt="soccer" className="w-24 h-14 object-contain" />
                  </button>

                </div>

              </div>

              <img onClick={goFootball} src={football} alt="football" className="block sm:hidden w-50 object-contain" />


              {/* <div className="bg-gray-500 p-[2px] transition duration-300 group-hover:bg-lime-400 group-hover:shadow-[0_0_20px_#84cc16]"
              style={{ clipPath: "polygon(31% 0%, 100% 0%, 100% 100%, 0 100%, 0 35%)" }}>
                
                <div className="bg-black flex items-center justify-center"
                style={{ clipPath: "polygon(31% 0%, 100% 0%, 100% 100%, 0 100%, 0 35%)" }}>
                  <button className="px-8 py-6 flex items-center justify-center transition duration-300 hover:scale-110">
                    <img src={footballselect} alt="soccer" className="w-24 h-14 object-contain" />
                  </button>
                </div>

              </div> */}

            </div>

          </div>
          {/* Football Block */}


          {/* Middle bar */}
          <div className='hidden md:block w-[2px] h-60 bg-white opacity-40'></div>
          {/* Middle bar */}


          {/* MMA Block */}
          <div className="flex flex-col items-center gap-6 opacity-50">

            <img src={mmachar} alt="mma" className="w-40 h-40 sm:w-80 sm:h-80 object-contain grayscale" />

            <div className="hidden sm:block relative w-fit">

              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black px-3 text-xs tracking-widest 
              font-bold text-gray-400 border border-gray-500 rounded">COMING SOON</span>

              <button disabled className="bg-black border border-gray-600 px-8 py-6 rounded-xl flex items-center 
              justify-center cursor-not-allowed opacity-60">
                <img src={mmaselect} alt="mma" className="w-24 h-14 object-contain grayscale"/>
              </button>

            </div>

            <img src={mma} alt="mma" className="block sm:hidden w-40 object-contain" />

          </div>
          {/* MMA Block */}

        </div>

      </div>

    </div>
  );
}
