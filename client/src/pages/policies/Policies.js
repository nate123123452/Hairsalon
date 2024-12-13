import React from 'react'
import './Policies.css'

import { motion } from 'framer-motion'

const Policies = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut",smooth: true}}
    >  
        <section className = 'policies-main'>
            <img src = 'https://static.wixstatic.com/media/11062b_f59a6f91aea34a81a4327b0d1c750a71~mv2.jpg/v1/fill/w_576,h_610,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_f59a6f91aea34a81a4327b0d1c750a71~mv2.jpg' alt='policyimage'></img>
            <div className = 'policies-text'>
                <h1>Policies</h1>
                <p>
                    As your stylists, your happiness is our number one priority, so we want to make sure you are 100% satisfied with your hair. <br></br>
                </p>
                <p>
                    In the event you are unsatisfied with the services performed, please contact us and we'd be more than happy to schedule a complimentary redo <b className='shadow'>within 3 days of your HAIRCUT service date or within 7 days of your COLOR service date.</b>
                </p>
                <p>
                    If you choose to see another salon or stylist during this redo period or if the redo period has passed, we will not be held liable for any adjustments made and you will be charged full price for any services requested.
                </p>
                <p>
                    We stand by our work and will never let a client leave if we ourselves are not 100% satisfied with the results, so with that being said, we will <b className='shadow'>not offer any refunds for services performed.</b>
                </p>
            </div>
        </section>
    </motion.div>
  )
}

export default Policies
