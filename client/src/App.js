import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
  
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

import './App.css'
import AnimatedRoutes from './components/AnimatedRoutes'


const App = () => {
  return (
    // Router component to enable routing
    <Router>
      {/* Navbar component */}
      <Navbar />
      {/* AnimatedRoutes component to handle route transitions */}
      <div className='route-wrapper'>
        <AnimatedRoutes />
      </div>
      {/* Footer component */}
      <Footer />
    </Router>
  )
}

export default App
