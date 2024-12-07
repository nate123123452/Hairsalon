import React from 'react'
import './Reviews.css'

import { motion } from 'framer-motion'

const Reviews = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut",smooth: true}}
    >  
      <div>
        <h1 className = "reviews-title" >CUSTOMER REVIEWS</h1>
        
        <section className = "reviews-main">

          <section className = "reviews-left">
            <img src = "https://static.wixstatic.com/media/a7536c_4bef8c85f742413b8ab335547847c652~mv2.jpg/v1/fill/w_613,h_211,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202023-08-21%20at%204_43_edited_jp.jpg" alt='review1'></img>
            <img src = "https://static.wixstatic.com/media/a7536c_b53fcf1c5df64f908392372280fd4f7d~mv2.jpg/v1/fill/w_616,h_179,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202023-08-21%20at%204_43_edited_jp.jpg" alt='review2'></img>
            <img src = "https://static.wixstatic.com/media/a7536c_4b23dfeaa8f2422e86882e8b3c56e8a5~mv2.jpg/v1/fill/w_616,h_144,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202023-08-21%20at%204_54_edited_jp.jpg" alt='review3'></img>
            <img src = "https://static.wixstatic.com/media/a7536c_8c275930e7ef4a11936b0a2faa392ee8~mv2.jpg/v1/fill/w_617,h_130,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202023-08-21%20at%204_36_edited_jp.jpg" alt='review4'></img>
            <img src = "https://static.wixstatic.com/media/a7536c_e0f14d9cd140446cad16366bef72f945~mv2.png/v1/fill/w_610,h_554,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a7536c_e0f14d9cd140446cad16366bef72f945~mv2.png" alt='review5'></img>
          </section>

          <section className = "reviews-right">
            <img src = "https://static.wixstatic.com/media/a7536c_b31805336d934790b1a5a9f5494b28c7~mv2.png/v1/fill/w_576,h_445,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a7536c_b31805336d934790b1a5a9f5494b28c7~mv2.png" alt='review6'></img>
            <img src = "https://static.wixstatic.com/media/a7536c_a96f9e664bbb43a8b9b7edf706b651d2~mv2.png/v1/fill/w_573,h_430,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a7536c_a96f9e664bbb43a8b9b7edf706b651d2~mv2.png" alt='review7'></img>
            <img src = "https://static.wixstatic.com/media/a7536c_29ce564bce964acb85ecb68c4a54da62~mv2.png/v1/fill/w_571,h_414,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a7536c_29ce564bce964acb85ecb68c4a54da62~mv2.png" alt='review8'></img>
          </section>
   
        </section>
      </div>
    </motion.div>
  )
}

export default Reviews
