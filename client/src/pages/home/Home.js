import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import { backgroundimage, instapic1, instapic2, instapic3, instapic4, instapic5, instapic6, instapic7, instapic8, instapic9 } from '../../assets/images';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
        >   
            <section className="home-first">
                <img 
                    src={ backgroundimage }
                    alt="hair-image" 
                    className="home-bg" 
                    loading="lazy"
                />
                <h1 className="home-title">HAIRTISTIC RSM</h1>
                <p className="home-text">Affordable and Quality Hair Salon in Orange County, CA</p>
            </section>

            <section className='home-second'>
                <h2 className='home-second-title'>WELCOME TO HAIRTISTIC!</h2>
                <p className='home-second-text'>
                    We are an affordable full service hair salon for women, men, <br />
                    children, and seniors. We are located in Orange County, CA <span className='break-at'>at</span>
                    <br className='desktop-only'></br>
                    <b>28562 Oso Pkwy Ste I, Rancho Santa Margarita, <span className='break-at'>CA 92688.</span></b>
                </p>
                <h3 className='home-third-title'>Appointments & Walk-Ins</h3>
                <p className='home-third-text'>
                    <b>Sunday: 9 am - 5 pm</b> <br />
                    <b>Monday - Saturday: 9 am - 6 pm</b>
                </p>
                <h4 className='home-fourth-title'>CALL (949)-858-5113</h4>
            </section>

            <section className='home-pictures'>
                <img src={instapic1} alt='hair-pic' loading="lazy" onClick={()=> window.open('https://www.instagram.com/hairtistic.rsm/p/CrrJp2kP9Su/')}/>
                <img src={instapic2} alt='hair-pic' loading="lazy" onClick={() => window.open('https://www.instagram.com/hairtistic.rsm/p/Cox1bqbPP_O/')}/>
                <img src={instapic3} alt='hair-pic' loading="lazy" onClick={()=> window.open('https://www.instagram.com/hairtistic.rsm/p/CudRr23pO1_/')}/>
                <img src={instapic4} alt='hair-pic' loading="lazy" onClick={()=> window.open('https://www.instagram.com/hairtistic.rsm/p/CM7bH5VlTgg/')}/>
                <img src={instapic5} alt='hair-pic' loading="lazy" onClick={()=> window.open('https://www.instagram.com/hairtistic.rsm/p/Cl_xKbEP3c0/')}/>

                {/* Additional images for mobile only */}
                <img className='mobile-only' src={instapic6} alt='hair-pic' loading="lazy" onClick={() => window.open('https://www.instagram.com/hairtistic.rsm/p/CMxoBCaFHrE/')} />
                <img className='mobile-only' src={instapic7} alt='hair-pic' loading="lazy"onClick={() => window.open('https://www.instagram.com/hairtistic.rsm/p/Cb0OpELlMYj/')} />
                <img className='mobile-only' src={instapic8} alt='hair-pic' loading="lazy"onClick={() => window.open('https://www.instagram.com/hairtistic.rsm/p/CYzcvo-P2Pl/')} />
                <img className='mobile-only' src={instapic9} alt='hair-pic' loading="lazy" onClick={() => window.open('https://www.instagram.com/hairtistic.rsm/p/CQpIceGpRz0/')} />
            </section>

        </motion.div>
    );
};

export default Home;
