import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route,Router } from 'react-router'

import WelcomePage from './components/WelcomePage.jsx'
import HomePage from './components/HomePage.jsx'
import SelectModePage from './components/SelectModePage.jsx'
import FootballMatchPage from './components/FootballMatchPage.jsx'

import BettingPage from "./pages/Bettingdetail.jsx";
import Test3 from './components/Test3.jsx'
import Test4 from './components/Test4.jsx'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<WelcomePage/>} />
        <Route path='/homepage' element={<HomePage/>} />
        <Route path='/selectmode' element={<SelectModePage/>} />
        {/* <Route path='/footballmatchpage' element={<FootballMatchPage/>} /> */}
        <Route path='/footballmatchpage' element={<Test3/>} />
        {/* <Route path="/betting" element={<BetPage />} /> */}
        {/* <Route path="/betting" element={<BettingPage />} /> */}
        <Route path="/betting" element={<Test4 />} />
      </Routes>
    </>
  )
}

export default App

