import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
  
import Navbar from './components/navbar/Navbar'

import './App.css'
import AnimatedRoutes from './components/AnimatedRoutes'


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='route-wrapper'>
        <AnimatedRoutes />
      </div>
    </Router>
  )
}

export default App
