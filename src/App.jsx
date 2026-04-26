import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route,Router } from 'react-router'

import WelcomePage from './components/WelcomePage.jsx'
import HomePage from './components/HomePage.jsx'
import SelectModePage from './components/SelectModePage.jsx'
import FootballMatchPage from './components/FootballMatchPage.jsx'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<WelcomePage/>} />
        <Route path='/homepage' element={<HomePage/>} />
        <Route path='/selectmode' element={<SelectModePage/>} />
        <Route path='/footballmatchpage' element={<FootballMatchPage/>} />
      </Routes>
    </>
  )
}

export default App

