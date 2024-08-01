import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import image1 from '../assets/portfolioimg.jpg';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
              variants={fadeIn('up', 0.3)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{ once: false, amount: 0.7 }} 
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px] mb-12 lg:mb-8'
            >
              Chai<span className='text-gradient'>thanya</span>
            </motion.h1>
            <motion.div 
              variants={fadeIn('up', 0.4)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{ once: false, amount: 0.7 }} 
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'
            >
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation
                sequence={['Developer', 2000, 'Designer', 2000, 'Content-Writer', 2000]}
                speed={150}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p 
              variants={fadeIn('up', 0.5)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{ once: false, amount: 0.7 }} 
              className='mb-8 max-w-lg mx-auto lg:mx-0'
            >
              Combining technical expertise with creative flair to deliver innovative digital solutions. Let's transform ideas into reality!
            </motion.p>
            <motion.div 
              variants={fadeIn('up', 0.6)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{ once: false, amount: 0.7 }} 
              className='flex max-w-max gap-x-6 items-center mb-8 mx-auto lg:mx-0'
            >
              <button className='btn btn-lg'>
                <a href='/resume.pdf' download>
                  Resume
                </a>
              </button>
            </motion.div>
            <motion.div 
              variants={fadeIn('up', 0.7)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{ once: false, amount: 0.7 }} 
              className='flex text-[20px] gap-x-3 max-w-max mx-auto lg:mx-0'
            >
              <a 
                href='https://www.linkedin.com/in/chaithanya-shaji-2311a6258' 
                className='transform transition-transform hover:scale-110'
              >
                <FaLinkedin size={30} />
              </a>
              <a 
                href='https://github.com/chaithanyashaji' 
                className='transform transition-transform hover:scale-110'
              >
                <FaGithub size={30} />
              </a>
              <a 
                href='#' 
                className='transform transition-transform hover:scale-110'
              >
                <FaInstagram size={30} />
              </a>
            </motion.div>
          </div>
          <motion.div 
            variants={fadeIn('down', 0.5)} 
            initial="hidden" 
            whileInView={'show'} 
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto perspective-1000'
          >
            <div className='relative'>
              <img 
                src={image1} 
                alt='Avatar' 
                className='w-full h-full object-cover rounded-full opacity-80 transition-transform duration-300 ease-in-out transform hover:rotate-360 hover:scale-105 hover:shadow-xl hover:shadow-[#FF56F6]'
                style={{ 
                  boxShadow: '0 0 30px rgba(148, 0, 211, 0.9)' // Light pink glow

                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
