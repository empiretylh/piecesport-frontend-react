import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import trophy from "../assets/img/welcomeImg/trophy.png";
import footballicon from "../assets/img/welcomeImg/footballicon.png";
import pieceballicon from "../assets/img/welcomeImg/pieceballicon.png";
import leftplayer from "../assets/img/welcomeImg/leftplayer.png";
import rightplayer from "../assets/img/welcomeImg/rightplayer.png";

import background1 from "../assets/img/welcomeImg/background1.png";
import { ChevronDown, ShoppingCart } from "lucide-react";

export default function LoginPage() {

    const [isOpen, setIsOpen] = useState(false);
    const [number, setNumber] = useState("");
    const [mode, setMode] = useState("login");
    const [form, setForm] = useState({
        name: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });

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

    const handleChange = (field, value) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    useEffect(()=> {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return ()=> {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleRegister = async() => {
        try{
            const payload = {
                username: form.name,
                identifier: "+959" + form.phone, 
                password: form.password,
                confirmPassword: form.confirmPassword,
            };

            // const payload = {
            //     username: "john_doe_9999", 
            //     identifier: "+1234567890",
            //     password: "StrongP@ssw0rd",
            //     confirmPassword: "StrongP@ssw0rd",
            // };

            console.log("SENDING:", payload);

            const res = await fetch(
            "https://ps-api-stg.illuminati.com.mm/auth/register",
            {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            }
            );

            const data = await res.json();
            console.log("RESPONSE:", data);

            if (!res.ok) {
            alert(data.message || "Register failed");
            return;
            }

            alert("Registered successfully!");
            setMode("login");

        } catch(err){
            console.error("ERROR:", err);
            alert("Something went wrong");
        }
    };

    const handleLogin = async() => {

        try{

            if (!form.phone || !form.password) {
                alert("Fill all fields");
                return;
            }

            const identifier = "+959" + form.phone;
            
            const res = await fetch("https://ps-api-stg.illuminati.com.mm/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    identifier,
                    password: form.password,
                }),
            });

            const data = await res.json();
            console.log(data);

            if (!res.ok) {
                alert(data.message || "Login failed");
                return;
            }

            // SAVE TOKEN (VERY IMPORTANT)
            localStorage.setItem("token", data.access_token);

            alert("Login success");

            navigate("/homepage");

        }
        catch(err){
            console.error(err);
            alert("Something went wrong");
        }
        
    };

    const inputWrapper = "flex items-center bg-black rounded px-3 py-2";
    const inputField = "bg-transparent text-white outline-none w-full placeholder-white/60";

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col bg-gradient-to-b from-teal-400 via-blue-500 to-yellow-400 flex flex-col items-center">

        <div className="flex flex-col items-center">

            {/* Dia Count  */}
            <div ref={dropdownRef} className="w-24 sm:w-52 md:w-64 absolute top-0 right-2 z-50">
            
                <div onClick={(e)=>{ e.stopPropagation();setIsOpen(prev=> !prev); }} className={`${ isOpen ? "h-[140px] sm:h-[160px]" : "h-[80px]" } 
                bg-yellow-400 text-black font-bold flex flex-col items-center justify-start pt-1 transition-all duration-300 
                ease-in-out overflow-hidden cursor-pointer`} style={{clipPath: "polygon(0% 0%, 100% 0%, 100% 65%, 50% 100%, 0% 65%)"}}>
                    
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

                <div className="text-center -mt-10 sm:-mt-0">
                    <h3 className="text-blue-800 text-2xl lg:text-3xl font-bold drop-shadow-md my-Font">Weekly</h3>
                    <h2 className="text-yellow-300 text-4xl lg:text-5xl font-extrabold sugar-text">Challenge</h2>
                </div>

                <div className="w-100 sm:w-2/3 md:w-1/2 max-w-[250px] md:max-w-[300px] animate-[scalePulse_1.5s_ease-in-out_infinite] hidden sm:block">
                    <img src={footballicon} alt="footballicon" className="w-full h-auto object-contain" />
                </div>

                <div className="w-1/3 sm:w-1/5 lg:w-1/4 z-10 -mt-10 sm:-mt-0">
                    <img src={trophy} alt="trophy" className="w-full h-auto object-contain"/>
                </div>

            </div>
            
        </div>

        {/* Player Images Section */}
        <div className="relative w-full flex justify-center mt-10 sm:mt-6">

            <img src={leftplayer} alt="left" className="absolute left-0 -bottom-5 sm:-bottom-6 w-24 sm:w-28 md:w-32 lg:w-34 z-10"/>
            <div className="block sm:hidden z-99">
                <img src={footballicon} className="w-50 animate-[scalePulse_1.5s_ease-in-out_infinite]" />
            </div>
            <img src={rightplayer} alt="right" className="absolute right-0 -bottom-5 sm:-bottom-6 w-24 sm:w-28 md:w-32 lg:w-34 z-10"/>

        </div>
        {/* Player Images Section */}

        {/* Bars */}
        <div className="relative w-full -mt-4 sm:mt-6">

            <span className="absolute w-full h-5 bg-yellow-300 sm:-translate-y-12"></span>
            <span className="absolute w-full h-2 bg-blue-600 translate-y-7 sm:-translate-y-5"></span>
            
            <div className="flex">
            <span className="w-full h-1 bg-yellow-300 translate-y-10 sm:-translate-y-2"></span>
            <span className="w-full -translate-y-12"></span>
            <span className="w-full h-1 bg-yellow-300 translate-y-10 sm:-translate-y-2"></span>
            </div>

        </div>
        {/* Bars */}        

      {/* Bottom Section */}
        <div className="w-full flex flex-col flex-1 items-center justify-center gap-4 py-10 bg-no-repeat bg-cover bg-bottom"
        style={{ backgroundImage: `url(${background1})`}}>

            <div className="flex flex-col gap-3 w-72 md:w-88">

                {/* Toggle Buttons */}
                <div className="flex justify-between mb-2">
                    <button onClick={()=> setMode("login")} className={`flex-1 py-2 ${mode === "login" ? "bg-blue-700 text-white" : "bg-gray-300"}`}>Login</button>
                    <button onClick={()=> setMode("register")} className={`flex-1 py-2 ${mode === "register" ? "bg-blue-700 text-white" : "bg-gray-300"}`}>Register</button>
                </div>

                {/* REGISTER FORM */}
                {mode === "register" && (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-2">

                            {/* Name */}
                            <div className={inputWrapper}>
                                <input
                                placeholder="Name"
                                value={form.name}
                                onChange={(e) => handleChange("name", e.target.value)}
                                className={inputField}
                                />
                            </div>

                            {/* Phone */}
                            <div className={inputWrapper}>
                                <span className="text-white mr-1">09</span>
                                <input
                                placeholder="Phone"
                                value={form.phone}
                                onChange={(e) =>
                                    handleChange("phone", e.target.value.replace(/\D/g, ""))
                                }
                                className={inputField}
                                />
                            </div>

                            {/* Password */}
                            <div className={inputWrapper}>
                                <input
                                type="password"
                                placeholder="Password"
                                value={form.password}
                                onChange={(e) => handleChange("password", e.target.value)}
                                className={inputField}
                                />
                            </div>

                            {/* Confirm Password */}
                            <div className={inputWrapper}>
                                <input
                                type="password"
                                placeholder="Confirm Password"
                                value={form.confirmPassword}
                                onChange={(e) => handleChange("confirmPassword", e.target.value)}
                                className={inputField}
                                />
                            </div>

                        </div>

                        <button onClick={handleRegister} className="relative w-full h-12 mt-2 group active:scale-95 transition">

                            {/* <div className="absolute inset-0 bg-gradient-to-r from-lime-300 via-green-400 to-green-700 opacity-70 blur-md group-hover:opacity-100 transition"></div> */}

                            <div className="relative h-full flex items-center justify-center rounded-xl overflow-hidden border border-white/20 shadow-xl">

                                <div className="absolute inset-0 bg-[#ABFC3A]/90"></div>

                                <div className="absolute inset-0 bg-gradient-to-br from-[#ABFC3A] via-[#8edc30] to-[#669623] opacity-90"
                                style={{ clipPath: "polygon(100% 0%, 100% 100%, 60% 100%, 65% 0%)" }}></div>

                                <span className="relative z-10 font-bold text-black tracking-wide group-hover:tracking-wider group-hover:text-black/80 transition">Register</span>
                                
                            </div>

                        </button>
                    </>
                )}

                {/* LOGIN FORM */}
                {mode === "login" && (
                    <>
                        <div className={inputWrapper}>
                            <span className="text-white mr-1">09</span>
                            <input placeholder="Phone" value={form.phone} onChange={(e)=> handleChange("phone", e.target.value.replace(/\D/g, ""))} 
                            className={inputField}/>
                        </div>

                        <div className={inputWrapper}>
                            <input type="password" placeholder="Password" value={form.password} 
                            onChange={(e) => handleChange("password", e.target.value)} className={inputField}/>
                        </div>

                        <button onClick={handleLogin} className="relative w-full h-12 mt-2 group active:scale-95 transition">

                            <div className="relative h-full flex items-center justify-center rounded-xl overflow-hidden border border-white/20 shadow-xl">

                                <div className="absolute inset-0 bg-blue-400"></div>

                                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-800 opacity-90"
                                style={{ clipPath: "polygon(100% 0%, 100% 100%, 60% 100%, 65% 0%)" }}></div>

                                <span className="relative z-10 font-bold text-black tracking-wide group-hover:tracking-wider group-hover:text-black/80 transition">Login</span>
                                
                            </div>

                        </button>
                    </>
                )}

            </div>

        </div>

    </div>

    
  );
}
