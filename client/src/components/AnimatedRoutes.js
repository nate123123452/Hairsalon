import React from 'react'
import { Route, Routes, useLocation} from 'react-router-dom'

import { Reviews, Home, Services, Policies, Careers} from '../pages'
import Footer from './footer/Footer'

import { AnimatePresence } from 'framer-motion'


function AnimatedRoutes() {
    const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location = {location} key = {location.pathname}>
                <Route index element = {<Home />} />
                <Route path = '/home' element = {<Home />} />
                <Route path = '/services' element = {<Services />} />
                <Route path = '/reviews' element = {<Reviews />} />
                <Route path = '/policies' element = {<Policies />} />
                <Route path = '/careers' element = {<Careers />} />
            </Routes>
            <Footer />
        </AnimatePresence>
    )
}

export default AnimatedRoutes
