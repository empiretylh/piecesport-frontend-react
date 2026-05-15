import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import trophy from "../assets/img/welcomeImg/trophy.png";
import footballicon from "../assets/img/welcomeImg/footballicon.png";
import pieceballicon from "../assets/img/welcomeImg/pieceballicon.png";
import leftplayer from "../assets/img/welcomeImg/leftplayer.png";
import rightplayer from "../assets/img/welcomeImg/rightplayer.png";

import background1 from "../assets/img/welcomeImg/background1.png";
import background2 from "../assets/img/welcomeImg/background2.png";
import { ChevronDown, ShoppingCart } from "lucide-react";
import { Toaster, toast }from "react-hot-toast";

export default function LoginPage() {

    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
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

    const [swapPlayers, setSwapPlayers] = useState(false);
    const [fade, setFade] = useState(true);

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

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);

            setTimeout(() => {
                setSwapPlayers(prev => !prev);
                setFade(true);
            }, 500);

        }, 3000);

        return () => clearInterval(interval);
    }, []);

    
    const formatPhone = (phone) =>{
        let cleaned = phone.replace(/\D/g, "");

        if (cleaned.startsWith("09")) {
            cleaned = cleaned.slice(2);
        }

        if (cleaned.startsWith("9")) {
            return "+95" + cleaned;
        }

        return "+959" + cleaned;
    };

    const handleRegister = async() => {
        try{
            const payload = {
                username: form.name,
                identifier: formatPhone(form.phone),
                password: form.password,
                confirmPassword: form.confirmPassword,
            };

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

        if (loading) return;

        try{

            if (!form.phone || !form.password) {
                alert("Fill all fields");
                return;
            }

            setLoading(true);

            const identifier = formatPhone(form.phone);
            
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
                setLoading(false);
                return;
            }

            // SAVE TOKEN (VERY IMPORTANT)
            localStorage.setItem("token", data.access_token);

            toast.success("Login success");

            setTimeout(()=> {
                setLoading(false);
                navigate("/homepage");
            }, 800);

        }
        catch(err){
            console.error(err);
            alert("Something went wrong");
            setLoading(false);
        }
        
    };

    // const inputWrapper = "flex items-center bg-black/75 border border-[#0B54E2]/40 rounded px-3 py-2";
    const inputWrapper ="flex items-center bg-black/60 border border-white/10 rounded-xl p-3 transition-all duration-300 focus-within:border-[#0B54E2] focus-within:shadow-lg focus-within:shadow-blue-500/20";
    const inputField = "bg-transparent text-white outline-none w-full placeholder-white/60";

  return (
    <div className="w-full min-h-screen bg-gray-200 flex justify-center">

        <Toaster position="top-center" reverseOrder={false} />

        <div className="w-full max-w-[450px] min-h-screen overflow-hidden relative">
            
            <div className="relative w-full h-screen overflow-hidden flex flex-col bg-gradient-to-b from-black via-[#3a1f1f] to-[#FF6B6B] items-center"
            style={{ backgroundImage: `url(${background2})`, backgroundRepeat: `no-repeat`, backgroundPosition: `center`, backgroundSize: "cover"}}>

                <div className="flex flex-col items-center">

                    {/* Dia Count  */}
                    <div ref={dropdownRef} className="w-24 sm:w-30 absolute top-0 right-2 z-50">
                    
                        <div onClick={(e)=>{ e.stopPropagation();setIsOpen(prev=> !prev); }} className={`${ isOpen ? "h-[140px] sm:h-[160px]" : "h-[80px]" } 
                        bg-[#000000]/70 text-white font-bold flex flex-col items-center justify-start pt-1 transition-all duration-300 
                        ease-in-out overflow-hidden cursor-pointer`} style={{clipPath: "polygon(0% 0%, 100% 0%, 100% 65%, 50% 100%, 0% 65%)"}}>
                            
                            <div className="flex flex-col items-center mt-2">

                                <div className="flex items-end gap-1">
                                    💎<span className="text-sm sm:text-base">9999</span>
                                </div>

                                <div className={`transition-transform duration-300 ${ !isOpen && "animate-pulse hover:scale-155" } ${ isOpen ? "rotate-180" : "rotate-0" } active:scale-95`}>
                                    <ChevronDown className="w-6 h-6 shadow-lg shadow-[#000000]/50" />
                                </div>

                            </div>

                            <div className={`flex items-center justify-center gap-2 mt-2 transition-all duration-300 ${ isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2" }`}>
                                <ShoppingCart className="w-6 h-6 shadow-lg shadow-[#000000]/50"/>
                                <button onClick={()=>setIsOpen(false)} className="bg-gray-300 text-black text-xs px-3 py-1 rounded-full">Shop</button>
                            </div>

                        </div>

                    </div>
                    {/* Dia Count  */}

                    {/* Title Section */}          
                    <div className="flex items-center justify-center">
                        <img src={pieceballicon} alt="pieceballicon" />
                    </div>
                            
                    <div className="w-full flex items-center justify-center lg:justify-evenly">

                        <div className="text-center -mt-10">
                            <h3 className="text-[#FFFFFF] text-2xl drop-shadow-md my-Font">Weekly</h3>
                            <h2 className="text-[#FF6B6B] text-4xl font-extrabold sugar-text">Challenge</h2>
                        </div>

                        <div className="w-1/3 sm:w-1/4 z-10 -mt-10">
                            <img src={trophy} alt="trophy" className="w-full h-auto object-contain"/>
                        </div>

                    </div>
                    
                </div>

                {/* Player Images Section */}
                <div className="relative w-full flex justify-center mt-10">

                    <img src={swapPlayers ? rightplayer : leftplayer} alt="left" className={`absolute left-0 -bottom-5 sm:bottom-5 w-22 z-10 transition-opacity duration-500
                    ${fade ? "opacity-100" : "opacity-0"} ${swapPlayers ? "scale-x-[-1]" : ""}`}/>
                    <div className="block z-99 sm:-translate-y-2">
                        <img src={footballicon} className="w-50 animate-[scalePulse_1.5s_ease-in-out_infinite]" alt="footballicon"/>
                    </div>
                    <img src={swapPlayers ? leftplayer : rightplayer} alt="right" className={`absolute right-0 -bottom-5 sm:bottom-5 w-22 z-10 transition-opacity duration-500
                    ${fade ? "opacity-100" : "opacity-0"} ${swapPlayers ? "scale-x-[-1]" : ""}`}/>

                </div>
                {/* Player Images Section */}

                {/* Bars */}
                <div className="relative w-full -mt-4 sm:-mt-2">

                    <span className={`absolute w-full h-5 ${mode === "login" ? "bg-[#0B54E2]" : "bg-[#FF6B6B]"} transition duration-500 sm:-translate-y-3`}></span>
                    <span className={`absolute w-full h-2 ${mode === "login" ? "bg-[#0B54E2]/40" : "bg-[#FF6B6B]/40"} transition duration-500 translate-y-7 sm:translate-y-3`}></span>
                    
                    <div className="flex">
                    <span className={`w-full h-1 ${mode === "login" ? "bg-[#0B54E2]" : "bg-[#FF6B6B]"} transition duration-500 translate-y-10 sm:translate-y-6`}></span>
                    <span className="w-full translate-y-6"></span>
                    <span className={`w-full h-1 ${mode === "login" ? "bg-[#0B54E2]" : "bg-[#FF6B6B]"} transition duration-500 translate-y-10 sm:translate-y-6`}></span>
                    </div>

                </div>
                {/* Bars */}        

                {/* Bottom Section */}
                <div className="w-full flex flex-col flex-1 items-center justify-center gap-4 py-10 bg-no-repeat bg-cover bg-bottom"
                style={{ backgroundImage: `url(${background1})`}}>

                    <div className="flex flex-col gap-3 w-72 md:w-88">

                        {/* Toggle Buttons */}
                        <div className="relative flex bg-black/30 p-1 rounded-2xl mb-4 backdrop-blur-sm">

                            {/* Animated Background */}
                            <div className={`absolute top-1 bottom-1 w-[48%] rounded-xl transition-all duration-300 ease-in-out
                                ${mode === "login"
                                    ? "left-1 bg-[#0B54E2] scale-105"
                                    : "left-[50%] bg-[#FF6B6B] scale-105"
                                }`}
                            />

                            <button
                                onClick={() => setMode("login")}
                                className={`relative z-10 flex-1 py-2 rounded-xl font-bold transition-all duration-300
                                ${
                                    mode === "login"
                                        ? "text-white scale-105"
                                        : "text-gray-300 hover:text-white"
                                }`}
                            >
                                Login
                            </button>

                            <button
                                onClick={() => setMode("register")}
                                className={`relative z-10 flex-1 py-2 rounded-xl font-bold transition-all duration-300
                                ${
                                    mode === "register"
                                        ? "text-white scale-105"
                                        : "text-gray-300 hover:text-white"
                                }`}
                            >
                                Register
                            </button>

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

                                        <div className="absolute inset-0 bg-[#FF6B6B]/60"></div>

                                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B] via-[#ff7f7f] to-[#d94f4f] opacity-90"
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

                                <button onClick={handleLogin} disabled={loading} className={`relative w-full h-12 mt-2 group transition ${loading ? "opacity-70 cursor-not-allowed" : "active:scale-95"}`}>

                                    <div className="relative h-full flex items-center justify-center rounded-xl overflow-hidden border border-white/20 shadow-xl">

                                        <div className="absolute inset-0 bg-blue-400"></div>

                                        <div className="absolute inset-0 bg-gradient-to-br from-[#0B54E2] via-[#1565ff] to-[#0837a8] opacity-90"
                                        style={{ clipPath: "polygon(100% 0%, 100% 100%, 60% 100%, 65% 0%)" }}></div>

                                        <span className="relative z-10 font-bold text-black tracking-wide flex items-center justify-center gap-2 group-hover:tracking-wider group-hover:text-black/80 transition">
                                            {loading && (
                                                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                                            )}

                                            {loading ? "Loading..." : "Login"}
                                        </span>
                                        
                                    </div>

                                </button>
                            </>
                        )}

                        
                    </div>

                </div>

            </div>

        </div>
        

    </div>
  );
}
