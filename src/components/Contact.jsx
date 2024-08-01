import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State for success message
  const [successMessage, setSuccessMessage] = useState('');

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log('Success:', result);
      setSuccessMessage('Your message has been sent successfully!');
      // Reset form after submission (optional)
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('There was an error sending your message. Please try again.');
    }
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div 
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h2 className='uppercase text-accent font-secondary font-semibold mb-2 tracking-wide'>Get in Touch</h2>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br/> together!</h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
            onSubmit={handleSubmit}
          >
            <input 
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
              type="text"
              placeholder='Your name'
            />
            <input 
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
              type="text"
              placeholder='Your email'
            />
            <textarea 
              name='message'
              value={formData.message}
              onChange={handleChange}
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' 
              placeholder="Your message"
            ></textarea>
            <button type='submit' className='btn btn-lg'>Send message</button>
            {successMessage && (
              <p className='mt-4 text-green-500'>{successMessage}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
