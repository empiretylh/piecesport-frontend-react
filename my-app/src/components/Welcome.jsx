import { useState } from "react";
import { useNavigate } from "react-router-dom";

import trophy from "../assets/img/welcomeImg/trophy.png";
import footballicon from "../assets/img/welcomeImg/footballicon.png";
import pieceballicon from "../assets/img/welcomeImg/pieceballicon.png";
import leftplayer from "../assets/img/welcomeImg/leftplayer.png";
import rightplayer from "../assets/img/welcomeImg/rightplayer.png";


import background1 from "../assets/img/welcomeImg/background1.png";



export default function Welcome() {

  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  const handlePlay = () => {
    if (number.length === 0) {
      alert("Please enter your number first");
      return;
    }

    if (number.length < 9) {
      alert("Number must be 9 digits");
      return;
    }

    const fullNumber = "09" + number;

    console.log(fullNumber); 

    navigate("/homepage"); // redirect
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-gradient-to-b from-teal-400 via-blue-500 to-yellow-400 flex flex-col items-center">

      <div className="flex flex-col items-center">

        {/* Dia Count  */}
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
        {/* Dia Count  */}

        {/* Header Section */}          
        <div className="flex items-center justify-center">
          <img src={pieceballicon} alt="pieceballicon" />
        </div>
            
        <div className="w-full flex flex-col items-center mt-[-15px]">

          <div className="text-white text-center">
            <h2 className="text-md tracking-wide">SPORT FUN ZONE</h2>
            <h1 className="text-5xl font-bold mt-2">PLAY & WIN</h1>
          </div>

          <div className="mt-3 text-center">
            <h3 className="text-blue-800 text-4xl font-bold drop-shadow-md my-Font">Weekly</h3>
            <h2 className="text-yellow-300 text-6xl font-extrabold sugar-text">Challenge</h2>
          </div>

        </div>
      
      </div>

      {/* Middle Images Section */}
      <div className="relative w-full flex justify-center mt-6">

        <img src={leftplayer} alt="left" className="absolute left-0 -bottom-38 w-32 sm:w-40 md:w-48 lg:w-56 z-10"/>

        <div className="w-2/3 max-w-[260px] z-10">
          <img src={trophy} alt="trophy" className="w-full h-auto object-contain"/>
        </div>

        <img src={rightplayer} alt="right" className="absolute right-0 -bottom-38 w-32 sm:w-40 md:w-48 lg:w-56 z-10"/>

      </div>


      {/* Banner */}
      <div className="w-100 sm:w-2/3 md:w-1/2 max-w-[400px] -translate-y-12 z-10">
        <img src={footballicon} alt="footballicon" className="w-full h-auto object-contain" />
      </div>

      <div className="relative w-full">

        <span className="absolute w-full h-5 bg-yellow-300 -translate-y-12"></span>
        <span className="absolute w-full h-2 bg-blue-600 -translate-y-5"></span>
        
        <div className="flex">
          <span className="w-full h-1 bg-yellow-300 -translate-y-2"></span>
          <span className="w-full -translate-y-12"></span>
          <span className="w-full h-1 bg-yellow-300 -translate-y-2"></span>
        </div>

      </div>


      {/* Bottom Section */}
      <div
        className="w-full flex flex-col flex-1 items-center justify-end gap-4 py-10 bg-no-repeat bg-cover bg-bottom"
        style={{ backgroundImage: `url(${background1})` }}
      >

        <div className="flex items-center bg-black rounded-full px-4 py-2">
          <span className="text-white text-sm mr-2">MPT No :</span>

          <span className="text-white mr-1">09</span>

          <input type="text" inputMode="numeric" placeholder="XXXXXXXXX" value={number}
            onChange={(e) => {
              let value = e.target.value.replace(/\D/g, "");

              if (value.length <= 9) {
                setNumber(value);
              }
            }}
            className="bg-transparent outline-none text-white flex-1 placeholder-white/60"
          />
          
        </div>

        {number.length > 0 && number.length < 9 && (
            <p className="text-red-500 text-md font-bold">
              Must be 9 digits
            </p>
          )}

        <button onClick={handlePlay} disabled={number.length !== 9}
        className="bg-blue-700 text-white text-6xl font-bold px-10 py-4 rounded-4xl shadow-lg active:scale-95 transition
        disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50">
          PLAY
        </button>
      </div>

    </div>

    
  );
}
