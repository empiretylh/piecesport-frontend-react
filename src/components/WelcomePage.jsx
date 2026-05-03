import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import trophy from "../assets/img/welcomeImg/trophy.png";
import footballicon from "../assets/img/welcomeImg/footballicon.png";
import pieceballicon from "../assets/img/welcomeImg/pieceballicon.png";
import leftplayer from "../assets/img/welcomeImg/leftplayer.png";
import rightplayer from "../assets/img/welcomeImg/rightplayer.png";

import background1 from "../assets/img/welcomeImg/background1.png";
import { ChevronDown, ShoppingCart } from "lucide-react";

export default function WelcomePage() {

  const [isOpen, setIsOpen] = useState(false);
  const [number, setNumber] = useState("");

  const dropdownRef = useRef(null);
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

    navigate("/homepage"); 
  };

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
    <div className="relative w-full h-screen overflow-hidden flex flex-col bg-gradient-to-b from-teal-400 via-blue-500 to-yellow-400 flex flex-col items-center">

      <div className="flex flex-col items-center">

        {/* Dia Count  */}
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
        {/* Dia Count  */}

        {/* Title Section */}          
        <div className="flex items-center justify-center">
          <img src={pieceballicon} alt="pieceballicon" />
        </div>
            
        <div className="w-full flex items-center justify-center lg:justify-evenly">

          <div className="text-center">
            <h3 className="text-blue-800 text-2xl lg:text-3xl font-bold drop-shadow-md my-Font">Weekly</h3>
            <h2 className="text-yellow-300 text-4xl lg:text-5xl font-extrabold sugar-text">Challenge</h2>
          </div>

          <div className="w-100 sm:w-2/3 md:w-1/2 max-w-[250px] md:max-w-[300px] animate-[scalePulse_1.5s_ease-in-out_infinite] hidden sm:block">
            <img src={footballicon} alt="footballicon" className="w-full h-auto object-contain" />
          </div>

          <div className="w-1/3 sm:w-1/5 lg:w-1/4 z-10">
            <img src={trophy} alt="trophy" className="w-full h-auto object-contain"/>
          </div>

        </div>
      
      </div>

      {/* Player Images Section */}
      <div className="relative w-full flex justify-center mt-10 sm:mt-6">

        <img src={leftplayer} alt="left" className="absolute left-0 -bottom-14 sm:-bottom-12 w-24 sm:w-28 md:w-32 lg:w-38 z-10"/>
        <div className="block sm:hidden">
          <img src={footballicon} className="w-50 animate-[scalePulse_1.5s_ease-in-out_infinite]" />
        </div>
        <img src={rightplayer} alt="right" className="absolute right-0 -bottom-14 sm:-bottom-12 w-24 sm:w-28 md:w-32 lg:w-38 z-10"/>

      </div>
      {/* Player Images Section */}

      {/* Bars */}
      <div className="relative w-full mt-14">

        <span className="absolute w-full h-5 bg-yellow-300 sm:-translate-y-12"></span>
        <span className="absolute w-full h-2 bg-blue-600 translate-y-7 sm:-translate-y-5"></span>
        
        <div className="flex">
          <span className="w-full h-1 bg-yellow-300 translate-y-10 sm:-translate-y-2"></span>
          <span className="w-full -translate-y-12"></span>
          <span className="w-full h-1 bg-yellow-300 translate-y-10 sm:-translate-y-2"></span>
        </div>

      </div>
      {/* Banner */}        

      {/* Bottom Section */}
      <div className="w-full flex flex-col flex-1 items-center justify-center gap-4 py-10 bg-no-repeat bg-cover bg-bottom"
      style={{ backgroundImage: `url(${background1})`}}>

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
        className="bg-blue-700 text-white text-6xl font-bold px-10 py-3 rounded-4xl shadow-lg active:scale-95 transition
        disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50">
          PLAY
        </button>
      </div>

    </div>

    
  );
}
