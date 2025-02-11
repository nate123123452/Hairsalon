import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';
import './Careers.css';
import { FaChevronDown } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Accessing environment variables
const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

const Careers = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        date: '',
        resumeLink: '',
    });

    const [touchedFields, setTouchedFields] = useState({});
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);

    
    
    // Handle form input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });

        // Validate email format
        if (id === 'email') {
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            setEmailError(!emailPattern.test(value));
        }

        // Validate phone number format (3 digits - 3 digits - 4 digits)
        if (id === 'phone') {
            const phonePattern = /^\d{3}-?\d{3}-?\d{4}$/; // Matches: 123-456-7890 or 1234567890
            setPhoneError(!phonePattern.test(value));
        }
    };

    // Handle input blur to mark field as touched
    const handleBlur = (e) => {
        setTouchedFields({ ...touchedFields, [e.target.id]: true });
    };

    // Handle date selection
    const handleDateChange = (selectedDate) => {
        if (selectedDate) {
            const formattedDate = selectedDate.toLocaleDateString('en-US', { timeZone: 'UTC' });
            setFormData({ ...formData, date: formattedDate });
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation before form submission
        if (Object.values(formData).some(field => field === '')) {
            toast.error('Please fill in all the required fields.');
            return;
        }

        // Check for email and phone errors
        if (emailError) {
            toast.error('Please enter a valid email address.');
            return;
        }

        if (phoneError) {
            toast.error('Please enter a valid phone number (format: 123-456-7890).');
            return;
        }

        try {
            const templateParams = {
                from_name: formData.firstName + ' ' + formData.lastName,
                from_email: formData.email,
                phone: formData.phone,
                position: formData.position,
                start_date: formData.date,
                resume_link: formData.resumeLink,
            };

            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_USER_ID);

            toast.success('Your application has been submitted successfully!');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                position: '',
                date: '',
                resumeLink: '',
            });
            setTouchedFields({});
            setEmailError(false);
            setPhoneError(false);
        } catch (error) {
            console.error('Error:', error);
            toast.error('There was an error submitting your application. Please try again.');
        }
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut", smooth: true }}
        >  
            <section className='careers-main'>
                <div className='left-container'>
                    <div className='careers-text'>
                        <h1>COME WORK WITH US</h1>
                        <p>Apply to Join The Team!</p>
                    </div>

                    <form className='careers-input' onSubmit={handleSubmit}>
                        <div className='input-grid'>
                            <input
                                type='text'
                                id='firstName'
                                placeholder='First Name'
                                value={formData.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={touchedFields.firstName && !formData.firstName ? 'input-error' : ''}
                                required
                            />
                            <input
                                type='text'
                                id='lastName'
                                placeholder='Last Name'
                                value={formData.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={touchedFields.lastName && !formData.lastName ? 'input-error' : ''}
                                required
                            />
                            <input
                                type='email'
                                id='email'
                                placeholder='Email'
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={(touchedFields.email && !formData.email) || emailError ? 'input-error' : ''}
                                required
                            />
                            <input
                                type='text'
                                id='phone'
                                placeholder='Phone'
                                value={formData.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={(touchedFields.phone && !formData.phone) || phoneError ? 'input-error' : ''}
                                required
                            />
                             {/* Position Dropdown */}
                            <div className='select-container'>
                                <select
                                    id='position'
                                    value={formData.position}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                >
                                    <option value='' disabled hidden>Position</option>
                                    <option value='Hair Stylist'>Hair Stylist</option>
                                </select>
                                <FaChevronDown className='select-icon' />
                            </div>
                            {/* DatePicker */}
                            <div className='datepicker-container'>
                                <DatePicker
                                    selected={formData.date ? new Date(formData.date) : null}
                                    onChange={handleDateChange}
                                    placeholderText="Available Start Date"
                                    className="datepicker-input"
                                    dateFormat="MM/dd/yyyy"
                                    required
                                />
                            </div>
                            <input
                                type='text'
                                id='resumeLink'
                                placeholder='Link to your Resume'
                                value={formData.resumeLink}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={touchedFields.resumeLink && !formData.resumeLink ? 'input-error' : ''}
                                required
                            />
                            <button type='submit' className='apply-button'>Apply Now</button>
                        </div>
                    </form>
                </div>
                <img src='https://static.wixstatic.com/media/11062b_505242b110ea46ee960e3ecaaa6a878f~mv2.jpg/v1/fill/w_720,h_566,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_505242b110ea46ee960e3ecaaa6a878f~mv2.jpg' alt='Careers' />
            </section>
            <ToastContainer />
        </motion.div>
    );
};

export default Careers;
