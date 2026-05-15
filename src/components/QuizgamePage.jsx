import { React, useState, useEffect, useRef } from "react";
import { ArrowLeft, ChevronDown, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

import pieceballicon from "../assets/img/welcomeImg/pieceballicon.png";

import liverpool from "../assets/img/footballmatchimg/liverpool.png";
import palace from "../assets/img/footballmatchimg/palace.png";
import arsenal from "../assets/img/footballmatchimg/arsenal.png";
import south from "../assets/img/footballmatchimg/south.png";
import brent from "../assets/img/footballmatchimg/brent.png";
import united from "../assets/img/footballmatchimg/manu.png";

import background1 from "../assets/img/footballmatchimg/bgcyber.png";
import background2 from "../assets/img/footballmatchimg/bg2.jpg";
import background3 from "../assets/img/welcomeImg/background2.png";

export default function QuizGamePage() {

    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    const backArrowClick = ()=> navigate(-1);  

    const [activeTab, setActiveTab] = useState("match");
    const [bets, setBets] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);
  
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [answers, setAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [showReview, setShowReview] = useState(false);
    const [timer, setTimer] = useState(60);

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

    useEffect(() => {
        if (showResult) return;

        if (timer === 0) {
            handleNext();
            return;
        }

        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return ()=> clearInterval(interval);
    }, [timer, showResult]);

    const handleNext = () => {
        const updatedAnswers = [
            ...answers,
            {
            question: quizData[currentQuestion].question,
            selected: selectedAnswer,
            correct: quizData[currentQuestion].answer,
            },
        ];

        setAnswers(updatedAnswers);

        if (currentQuestion + 1 < quizData.length) {
            setCurrentQuestion((prev) => prev + 1);
            setSelectedAnswer("");
            setTimer(60);
        } else {
            setShowResult(true);
        }
    };

    const handlePlayAgain = () => {
        setCurrentQuestion(0);
        setSelectedAnswer("");
        setAnswers([]);
        setShowResult(false);
        setShowReview(false);
        setTimer(60);
    };

    const score = answers.filter((a) => a.selected === a.correct).length;

    const quizData = [
        {
            question: "Which country won the FIFA World Cup 2022?",
            options: ["Argentina", "France", "Brazil"],
            answer: "Argentina",
        },
        {
            question: "Which club does Erling Haaland play for?",
            options: ["Manchester City", "Barcelona", "Liverpool"],
            answer: "Manchester City",
        },
        {
            question: "Who is known as CR7?",
            options: ["Messi", "Ronaldo", "Neymar"],
            answer: "Ronaldo",
        },
        {
            question: "Which match result end with 8-2 in Aug 28 2011 ?",
            options: ["Liverpool vs Man United", "Chelsea vs Brentford", "Man United vs Arsenal"],
            answer: "Man United vs Arsenal",
        },
        {
            question: "How many players are on the field per team?",
            options: ["9", "10", "11"],
            answer: "11",
        },
    ];



  return (
    <div className="w-full min-h-screen bg-gray-200 flex justify-center">
        <div className="w-full max-w-[450px] min-h-screen overflow-hidden relative">

            {/* <div className="absolute z-99 w-full h-50 mt-20 opacity-60" style={{ backgroundImage: `url(${background1})`, backgroundRepeat: `no-repeat`, backgroundPosition: `center`, backgroundSize: "cover"}}></div> */}

            <div className="h-screen w-full overflow-hidden flex flex-col items-center justify-between p-3 bg-gradient-to-br from-slate-400 via-blue-400 to-amber-400"
            style={{ backgroundImage: `url(${background3})`, backgroundRepeat: `no-repeat`, backgroundPosition: `center`, backgroundSize: "cover"}}>

                {/* Back Btn */}
                <div className="w-full flex items-center justify-between px-6 py-2 z-10">
                        
                    <button onClick={backArrowClick} className="bg-gray-600/50 p-2 rounded-md cursor-pointer transition hover:bg-gray-400/60 hover:scale-110">
                    <ArrowLeft size={20} />
                    </button>
                        
                </div>
                {/* Back Btn  */}

                {/* TOP BAR */}
                <div className="w-full flex items-center justify-center select-none">

                    {/* Title logo */}
                    <div className="flex items-center justify-center -mt-8">
                        <img src={pieceballicon} alt="pieceballicon" />
                    </div>

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

                {/* Quiz Card */}
                <div className="w-full max-w-xl flex-1 flex flex-col bg-black/40 backdrop-blur-lg rounded-2xl overflow-hidden mb-4">
                    
                    {/* Quiz Content AREA */}
                    <div className="flex-1 flex flex-col min-h-0 px-3 py-2">

                        {/* Quiz LIST */}
                        <div className="flex-1 overflow-y-auto scrollbars">

                        {!showResult ? (

                            <div className="h-full flex flex-col justify-between gap-4 py-2">

                                {/* TOP */}
                                <div className="flex items-center justify-between text-white">

                                    <div className="bg-white/10 px-4 py-2 rounded-xl text-sm font-semibold">Question {currentQuestion + 1} / {quizData.length}</div>

                                    <div className={`px-4 py-2 rounded-xl font-bold ${timer <= 10 ? "bg-red-500 text-white animate-pulse" 
                                    : "bg-yellow-400 text-black"}`}>{timer}s</div>

                                </div>

                                {/* QUESTION */}
                                <div className="bg-white/10 border border-white/10 rounded-2xl p-5 text-white text-center shadow-lg">

                                    <h2 className="text-xl font-bold leading-relaxed">
                                    {quizData[currentQuestion].question}
                                    </h2>

                                </div>

                                {/* OPTIONS */}
                                <div className="flex flex-col gap-3">

                                    {quizData[currentQuestion].options.map((option) => (

                                    <button key={option} onClick={() => setSelectedAnswer(option)} className={`w-full rounded-xl py-4 font-bold transition
                                    ${selectedAnswer === option ? "bg-gradient-to-r from-blue-600 to-pink-400 text-white scale-[1.02]"
                                    : "bg-white text-black hover:bg-gray-200"}`}>
                                        {option}
                                    </button>

                                    ))}

                                </div>

                                {/* NEXT BTN */}
                                <button disabled={!selectedAnswer} onClick={handleNext} className={`w-full py-4 rounded-xl font-bold transition
                                ${selectedAnswer ? "bg-gradient-to-r from-blue-600 to-pink-400 text-white hover:brightness-110"
                                : "bg-gray-400 text-gray-700 cursor-not-allowed"}`}>
                                    {currentQuestion + 1 === quizData.length ? "Finish" : "Next"}
                                </button>

                            </div>

                        ) : (

                            <div className="flex flex-col gap-4 py-4">

                            {/* RESULT BOX */}
                            <div className="bg-white rounded-2xl p-6 text-center shadow-xl">

                                <h2 className="text-2xl font-extrabold text-black">Your Score</h2>

                                <div className="text-5xl font-black text-blue-600 my-4">{score}/{quizData.length}</div>

                                <p className="text-gray-600 font-medium">
                                    {score === 5 ? "Elite Football Knowledge! 🐐" : score >=3 ? "Keep it up! Great effort player 👏" : "Don't give up! 👏"}
                                </p>

                            </div>
                            {/* RESULT BOX */}

                            {/* ACTIONS */}
                            <div className="flex flex-col gap-3">

                                <button onClick={() => setShowReview(!showReview)} className="w-full py-3 rounded-xl bg-pink-400 text-black font-bold cursor-pointer">
                                    {showReview ? "Hide Answers" : "Recheck My Answers"}
                                </button>

                                <button onClick={handlePlayAgain} className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold 
                                cursor-pointer">Play Again</button>

                                <button onClick={()=> navigate("/quiz")} className="w-full py-3 rounded-xl bg-gray-900 text-white font-bold
                                cursor-pointer">Exit</button>

                            </div>
                            {/* ACTIONS */}

                            {/* REVIEW */}
                            {showReview && (
                                <div className="flex flex-col gap-3 pt-2">

                                {answers.map((answer, i) => (

                                    <div key={i} className="bg-white/10 rounded-xl p-4 text-white">
                                        <div className="font-bold mb-2">
                                            {i + 1}. {answer.question}
                                        </div>

                                        <div className={`text-sm ${answer.selected === answer.correct ? "text-green-300" : "text-red-300"}`}>
                                            Your Answer: {answer.selected || "No Answer"}
                                        </div>

                                        <div className="text-sm text-yellow-300">
                                            Correct Answer: {answer.correct}
                                        </div>
                                    </div>

                                ))}

                                </div>
                            )}
                            {/* REVIEW */}

                            </div>

                        )}

                        </div>
                        {/* Quiz LIST */}
                        
                    </div>
                    {/* Quiz Content AREA */}

                </div>
                {/* Quiz Card */}

            </div>

        </div>
    </div>
    
  );
}