import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import note from '../assets/notes.png';
import secret from '../assets/secret.png';
import capital from '../assets/capital.png';
import travel from '../assets/traveltracker.png';
import simon from '../assets/simon_game.png';
import eon from '../assets/eventON.jpg';
import iris from '../assets/iris.jpg';
import slot from '../assets/slotmachine.jpg';
import vitta from '../assets/vittacare.png';
import port from '../assets/port.jpg';
import math from '../assets/math.png';
import help from '../assets/helpora1.jpg';
import ecommerce from '../assets/ecommerce.png';
import ekalooms from '../assets/ekalooms.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const projects = [
  {
    img: ekalooms,
    title: 'Ekalooms Website',
    frontend: 'React,Tailwind CSS',
    backend: 'Node.js with Express.js,MongoDB',
    description: 'A comprehensive Full-Stack E-commerce platform designed for the startup Ekalooms, featuring seamless payment integration, a robust admin panel, and a scalable infrastructure to support business growth. Website Link :https://ekalooms.com',
    githubLink: 'https://ekalooms.com'
  },
  {
    img: math,
    title: 'Math Notes New.O',
    frontend: 'React,TypeScript',
    backend: 'Python, Gemini API',
    description: 'Responsive tool for drawing math expressions and geometric figures using mouse or touch input, inspired by Apple’s MathNotes. ',
    githubLink: 'https://mathnotes-nine.vercel.app'
  },
  
  {
    img: eon,
    title: 'EventON',
    frontend: 'Flutter',
    backend: 'Firebase',
    description: 'A comprehensive app designed to manage and host technical community events, featuring an integrated chatbot for seamless interaction. This mini-project, developed as part of my college coursework, will soon be available on the Play Store.',
    githubLink: 'https://github.com/chaithanyashaji/EventON'
  },
  {
    img: help,
    title: 'Helpora',
    frontend: 'Flutter',
    backend: 'Firebase',
    description: 'A Flutter and Firebase-based app connecting users with part-time domestic jobs.',
    githubLink: 'https://github.com/chaithanyashaji/Helpora'
  },
  {
    img: port,
    title: 'Portfolio',
    frontend: 'React, Tailwind CSS',
    backend: 'Node.js, Express.js, PostgreSQL',
    description: 'My personal portfolio website',
    githubLink: 'https://github.com/chaithanyashaji/Portfolio-full-stack-'
  },
  {
    img: note,
    title: 'Notes App',
    frontend: 'React',
    backend: 'Node.js, Express.js, PostgreSQL',
    description: 'An app designed to add and remove notes',
    githubLink: 'https://github.com/chaithanyashaji/MyNotes-App'
  },
  {
    img: iris,
    title: 'IRIS A.I',
    frontend: '',
    backend: 'Python',
    description: 'A personalized desktop AI that streamlines your daily tasks with powerful voice commands, making your computing experience smarter and more efficient.',
    githubLink: 'https://github.com/chaithanyashaji/IRIS-AI'
  },
  {
    img: simon,
    title: 'Simon Game',
    frontend: 'HTML, CSS',
    backend: 'JavaScript',
    description: 'A color sequencing memorizing game. Click the arrow button to play the game!',
    githubLink: 'https://chaithanyashaji.github.io/Simon_game/'
  },
  {
    img: travel,
    title: 'Travel Tracker',
    frontend: 'EJS, CSS',
    backend: 'Node.js, Express.js, PostgreSQL',
    description: 'A website intended to track visited countries of each individual',
    githubLink: 'https://github.com/chaithanyashaji/Familytraveltracker'
  },
  {
    img: capital,
    title: 'Capital Quiz',
    frontend: 'EJS, CSS',
    backend: 'Node.js, Express.js, PostgreSQL',
    description: 'A website intended to track visited countries of each individual',
    githubLink: 'https://github.com/chaithanyashaji/FindTheCapital'
  },
  {
    img: secret,
    title: 'Secret APP',
    frontend: 'EJS, CSS',
    backend: 'Node.js, Express.js, PostgreSQL',
    description: ' Developed a secure app with login and registration features, utilizing OAuth for authentication and bcrypt for password security.',
    githubLink: 'https://github.com/chaithanyashaji/Secrets_app'
  },
  {
    img: slot,
    title: 'Slot Machine',
    frontend: '',
    backend: 'Python',
    description: ' A simple text-based slot machine game implemented in Python. The game allows players to deposit money, place bets on multiple lines, and spin the slot machine to try their luck.',
    githubLink: 'https://github.com/chaithanyashaji/Slot_machine'
  },
  {
    img: vitta,
    title: 'VittaCare',
    frontend: 'HTML, CSS',
    backend: 'PHP',
    description: 'A Hospital management system - My first project',
    githubLink: 'https://github.com/chaithanyashaji/hospitalmanagement'
  },
];

const Work = () => {
  return (
    <section className='section ' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center gap-y-16 mt-10 mb-10'>
          <div className='text-center'>
            <motion.h2 
              variants={fadeIn('down', 0.5)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{ once: false, amount: 0.7 }}
              className='text-4xl md:text-5xl lg:text-7xl text-accent font-primary font-semibold mb-8 mt-12'
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
            >
              My Projects
            </motion.h2>
          </div>
          <motion.div 
            variants={fadeIn('up', 0.5)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{ once: false, amount: 0.7 }}
            className='overflow-x-auto w-full mb-12'
          >
            <div className='flex gap-x-10 min-w-max'>
              {projects.map((project, index) => (
                <div key={index} className='relative w-[350px] group'>
                  <div className='relative overflow-hidden border-2 border-white/50 rounded-xl'>
                    <img 
                      className='group-hover:scale-125 transition-all duration-500 w-full h-[300px] object-cover rounded-t-xl' 
                      src={project.img} 
                      alt={project.title}
                      loading='lazy' 
                    />
                    <div className='absolute top-0 right-0 p-2 flex flex-col items-end'>
                      <a 
                        href={project.githubLink} 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        className='btn w-9 h-9 flex justify-center items-center z-50'
                      >
                        <BsArrowUpRight />
                      </a>
                    </div>
                    <div className='absolute inset-0 group-hover:bg-black/70 transition-all duration-300'></div>
                    <div className='absolute inset-0 flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      <div className='absolute -bottom-full left-4 group-hover:bottom-40 transition-all duration-500 z-50'>
                        <span className='text-gradient text-l font-bold' style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)' }}>{project.title}</span>
                      </div>
                      <div className='text-white'>
                        <p className='text-sm'>{project.description}</p>
                        <div className='text-sm mt-2'>
                          <span><strong>Front-end:</strong> {project.frontend}</span><br />
                          <span><strong>Back-end:</strong> {project.backend}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='text-center mt-2 text-lg font-bold text-gradient' style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)' }}>
                    {project.title}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
