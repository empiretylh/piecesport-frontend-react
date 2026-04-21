import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route,Router } from 'react-router'

import Welcome from './components/welcome.jsx'
import HomePage from './components/HomePage.jsx'
import SelectModePage from './components/SelectModePage.jsx'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='/homepage' element={<HomePage/>} />
        <Route path='/selectmode' element={<SelectModePage/>} />
      </Routes>
    </>
  )
}

export default App

