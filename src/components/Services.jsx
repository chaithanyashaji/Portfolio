import React from 'react';
import {
  SiC, SiPython, SiJavascript, SiReact, SiNodedotjs, SiExpress,
  SiPostgresql, SiHtml5, SiCss3, SiFigma, SiFlutter, SiFirebase
} from 'react-icons/si';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

// Define animation variants
const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 1.3, rotate: 15 }
};

const skills = [
  { name: 'C', icon: <SiC className='text-white hover:text-[#FF6F61]' /> },
  { name: 'Python', icon: <SiPython className='text-white hover:text-[#306998]' /> },
  { name: 'JavaScript', icon: <SiJavascript className='text-white hover:text-[#F7E018]' /> },
  { name: 'Flutter', icon: <SiFlutter className='text-white hover:text-[#02569B]' /> },
  { name: 'HTML', icon: <SiHtml5 className='text-white hover:text-[#E34F26]' /> },
  { name: 'CSS', icon: <SiCss3 className='text-white hover:text-[#1572B6]' /> },
  { name: 'React', icon: <SiReact className='text-white hover:text-[#61DAFB]' /> },
  { name: 'Node.js', icon: <SiNodedotjs className='text-white hover:text-[#68A063]' /> },
  { name: 'Express.js', icon: <SiExpress className='text-white hover:text-[#000000]' /> },
  { name: 'Postgres', icon: <SiPostgresql className='text-white hover:text-[#336791]' /> },
  { name: 'Firebase', icon: <SiFirebase className='text-white hover:text-[#FFCA28]' /> },
  { name: 'Figma', icon: <SiFigma className='text-white hover:text-[#F24E1E]' /> },
];

const Services = () => {
  return (
    <section className='py-16' id='services'>
      <div className='container mx-auto px-4 md:px-8 lg:px-16'>
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl lg:text-5xl text-accent font-primary font-semibold mb-6 mt-12'>
            My Skills
          </h2>
          <h3 className='text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-16'>
            Here are some of the skills I bring to the table.
          </h3>
        </motion.div>

        <motion.div
          variants={fadeIn('down', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex flex-wrap justify-center items-center'
        >
          {skills.map((skill, index) => (
            <motion.div
              className='m-6 text-center'
              key={index}
              initial='hidden'
              animate='visible'
              whileHover='hover'
              variants={iconVariants}
            >
              <div className='text-6xl md:text-8xl lg:text-9xl mb-4 transition-transform hover:text-[#b936ee]'>
                {skill.icon}
              </div>
              <h4 className='text-base md:text-lg lg:text-lg tracking-wide font-seconadry '>
                {skill.name}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
