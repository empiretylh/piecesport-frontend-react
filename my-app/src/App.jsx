import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route,Router } from 'react-router'
import Welcome from './components/welcome.jsx'
import HomePage from './components/HomePage.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='/homepage' element={<HomePage/>} />
      </Routes>
    </>
  )
}

export default App

