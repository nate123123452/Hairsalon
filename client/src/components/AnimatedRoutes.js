import React from 'react'
import { Route, Routes, useLocation} from 'react-router-dom'

import Reviews from '../pages/reviews/Reviews'; 
import Home from '../pages/home/Home';
import Services from '../pages/services/Services';
import Policies from '../pages/policies/Policies'; 
import Careers from '../pages/careers/Careers'; 

import { AnimatePresence } from 'framer-motion'


function AnimatedRoutes() {
    // Get the current location
    const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route index element = {<Home />} />
                <Route path = '/home' element = {<Home />} />
                <Route path = '/services' element = {<Services />} />
                <Route path = '/reviews' element = {<Reviews />} />
                <Route path = '/policies' element = {<Policies />} />
                <Route path = '/careers' element = {<Careers />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes
