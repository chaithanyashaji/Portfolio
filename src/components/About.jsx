import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { fadeIn } from '../variants';
import img2 from '../assets/portimg2.jpg';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='py-16 bg-transparent ' id='about' ref={ref}>
      <div className='container mx-auto min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16'>
        <div className='flex-1 flex flex-col items-center text-center'>
          <motion.h2
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className='text-4xl md:text-5xl lg:text-6xl font-primary font-semibold  text-accent mb-4'
          >
            About Me
          </motion.h2>
          <motion.h3
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className='text-2xl md:text-3xl lg:text-4xl font-primary text-black text-white mb-4'
          >
            I'm a Software Developer
          </motion.h3>
          <div className='w-full max-w-2xl p-6 rounded-md shadow-lg  bg-opacity-80'>
            <div className='flex justify-center mb-6'>
              <motion.img
                variants={fadeIn('down', 0.5)}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                src={img2}
                alt='About'
                className='w-32 h-32 rounded-full opacity-80'
                style={{
                  boxShadow: '0 0 30px rgba(148, 0, 211, 0.9)', // Darker shadow effect
                }}
              />
            </div>
            <motion.p
              variants={fadeIn('left', 0.6)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className='leading-relaxed text-justify text-white'
            >
              Hi, I’m Chaithanya, a full-stack developer from India with a dynamic blend of skills and a passion for innovation. My journey began in UI/UX design, where I honed my ability to create intuitive and impactful user experiences. As a fast learner and adaptable professional, I seamlessly transitioned into full-stack development, mastering technologies like React, Node.js, and Flutter to build engaging web and mobile applications. I am deeply interested in machine learning and AI, integrating these cutting-edge technologies to drive innovation and enhance functionality. With a versatile skill set and a keen eye for detail, I deliver solutions that are both technically robust and creatively compelling. Let’s connect and explore how we can create something extraordinary together.
            </motion.p>
          </div>
          <div className='flex justify-center mt-6'>
            <motion.button
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className='btn btn-lg text-white bg-black hover:bg-gray-800'
            >
              <ScrollLink
                to='contact'
                smooth={true}
                duration={500}
              >
                Contact Me
              </ScrollLink>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
