import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route,Router } from 'react-router'

// import WelcomePage from './components/WelcomePage.jsx'
import LoginPage from './components/LoginPage.jsx'
import HomePage from './components/HomePage.jsx'
import SelectModePage from './components/SelectModePage.jsx'

import BettingPage from "./pages/Bettingdetail.jsx";
import FootballMatchPage from './components/FootballMatchPage.jsx'
import BettingdetailPage from './components/BettingdetailPage.jsx'
import SoccerQuizPage from './components/SoccerQuiz.jsx'


function App() {

  return (
    <>
      <Routes>
        {/* <Route path='/' element={<WelcomePage/>} /> */}
        <Route path='/' element={<LoginPage/>} />
        <Route path='/homepage' element={<HomePage/>} />
        <Route path="/quiz" element={<SoccerQuizPage />} />
        <Route path='/selectmode' element={<SelectModePage/>} />
        <Route path='/footballmatchpage' element={<FootballMatchPage/>} />
        <Route path="/betting" element={<BettingPage />} />
        <Route path="/betting" element={<BettingPage />} />
        {/* <Route path="/betting" element={<BettingdetailPage />} /> */}
      </Routes>
    </>
  )
}

export default App

