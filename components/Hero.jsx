/* eslint-disable react/no-unescaped-entities */
"use client"

import { motion } from "framer-motion";

import { styles } from "../app/styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`} >
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }} 
          className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#bf61ff]' />
          <div className='w-1 sm:h-80 h-40 pink-gradient' />
        </motion.div>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className={`${styles.heroHeadText}`}
          >
            Hi, I'm <span className="text-gradient from-purple-to-pink">Anthony</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.4 }}
            className={`${styles.heroSubText} mt-2`}
          >
            I develop websites, interfaces <br className='sm:block hidden' />
            and web applications
          </motion.p>

        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-blue-600 flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-blue-600 mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;