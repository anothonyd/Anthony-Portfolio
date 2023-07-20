/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { styles } from "../app/styles";
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4 }}
          className="flex flex-col justify-center items-center mt-5"
        >
          <div className="w-5 h-5 rounded-full bg-[#bf61ff]" />
          <div className="w-1 sm:h-80 h-40 pink-gradient" />
        </motion.div>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.1 }}
            className={`${styles.heroHeadText}`}
          >
            Hi, I'm{" "}
            <span className="text-gradient from-purple-to-pink">Anthony</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className={`${styles.heroSubText} my-2 sm:my-0`}
          >

            <Typewriter
              options={{
                strings: [
                  "I'm a Full-stack Developer", 
                  "A Front-end Developer", 
                  "I develop websites",
                  "I develop web interfaces", 
                  "I create web applications"],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed:20,
              }}
            />


          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.3 }}
            className="my-5 green-pink-gradient p-[1px]"
          >
            <p className="transition ease-in-out delay-50 duration-200 bg-[#1E1E2F] hover:bg-[#1e1e2f37] p-3 text-[18px] text-[#FAFAFA]">
              <a
                href="https://drive.google.com/file/d/1_mW-VZKyPN2doNxbQ6YrgBrsd_7vxNUD/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </p>
          </motion.button>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#5D98D290] flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#5D98D290] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
