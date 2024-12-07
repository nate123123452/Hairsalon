import React from 'react'
import './Services.css'

import { motion } from 'framer-motion'

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut",smooth: true}}
    >  
        <section className = 'services-page'>
            <img src = 'https://static.wixstatic.com/media/a7536c_8298fe2cd8214de58f524724feb98edb~mv2.png/v1/fill/w_631,h_817,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Hairtistic%20(1).png' className = 'services-image' alt='prices'></img>
        </section>
    </motion.div>
  )
}

export default Services
