/* eslint-disable react/no-unescaped-entities */
"use client";

import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../app/styles';
import { services } from '../constants';
import { fadeIn } from '../utils/motion';
import Image from 'next/image';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[230px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 *
          index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='dark rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <Image
            src={icon} alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("right", "spring", 0.8, 1.8)}
        className='mt-2 text-[17px] max-w-3x1 leading-[30px]'
      >
        I'm a web developer proficient in HTML, CSS,
        JavaScript, React.js, TypeScript, and the MERN stack
        (MongoDB, Express.js, React.js, Node.js). I specialize in
        building modern web applications with responsive designs using
        frameworks like Tailwind CSS and Bootstrap."
      </motion.p>

      <div className='mt-10 flex flex-wrap w-full justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')    