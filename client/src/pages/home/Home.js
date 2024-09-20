import React, { useEffect, useState } from 'react';
import './Home.css';
import { motion } from 'framer-motion';

const Home = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Get the message from localStorage
        const storedMessage = localStorage.getItem('submissionStatus');
        if (storedMessage) {
            setMessage(storedMessage);
            // Clear the message from localStorage after displaying it
            localStorage.removeItem('submissionStatus');
        }
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
        >
            <section className='home-first'>
                <h1 className='home-title'>HAIRTISTIC RSM</h1>
                <p className='home-text'>Affordable and Quality Hair Salon in Orange County, CA</p>
            </section>

            <section className='home-second'>
                <h2 className='home-second-title'>WELCOME TO HAIRTISTIC</h2>
                <p className='home-second-text'>
                    We are an affordable full service hair salon for women, men, <br />
                    children, and seniors. We are located in Orange County, CA at <br />
                    <b>28562 Oso Pkwy Ste I, Rancho Santa Margarita, CA 92688.</b>
                </p>
                <h3 className='home-third-title'>Appointments & Walk-Ins</h3>
                <p className='home-third-text'>
                    <b>Sunday: 9 am - 5 pm</b> <br />
                    <b>Monday - Saturday: 9 am - 6 pm</b>
                </p>
                <h4 className='home-fourth-title'>CALL (949)-858-6113</h4>
            </section>

            <section className='home-pictures'>
                <img src='https://static.wixstatic.com/media/a7536c_db8df0d9151847139480e344f11ff16b~mv2.jpg/v1/fill/w_309,h_386,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a7536c_db8df0d9151847139480e344f11ff16b~mv2.jpg' alt='hair-pic' />
                <img src='https://static.wixstatic.com/media/a7536c_04246382dd31452daab843c5f9d7ef15~mv2.jpg/v1/crop/x_11,y_0,w_1096,h_1371/fill/w_307,h_386,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/17880945974807579_edited.jpg' alt='hair-pic' />
                <img src='https://static.wixstatic.com/media/a7536c_ef30449ad98c4fbbba2a84b097a72716~mv2.jpg/v1/fill/w_315,h_386,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/17965395518529612_edited.jpg' alt='hair-pic' />
                <img src='https://static.wixstatic.com/media/a7536c_efe51a7340324092a3386110f111c8cf~mv2.jpg/v1/crop/x_0,y_1,w_1107,h_1434/fill/w_298,h_386,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/17966540546076210_edited_edited.jpg' alt='hair-pic' />
                <img src='https://static.wixstatic.com/media/a7536c_76658c7060b04d1ba589029f19ee89a7~mv2.jpg/v1/crop/x_0,y_0,w_944,h_1160/fill/w_313,h_386,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a7536c_76658c7060b04d1ba589029f19ee89a7~mv2.jpg' alt='hair-pic' />
            </section>

            {/* Display message from localStorage if available */}
            {message && <p className='submission-status'>{message}</p>}
        </motion.div>
    );
};

export default Home;
