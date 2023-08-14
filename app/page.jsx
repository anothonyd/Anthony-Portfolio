"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { About, Contact, Feedbacks, Hero, Tech, Works, NavBar } from "../components";
import BarLoader from "react-spinners/BarLoader";
import { Switch } from "@material-tailwind/react";

const Page = () => {
  const [loading, setLoading] = useState(false);

  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);



  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500)
  }, [])

  return (
    <div className={`App ${theme}`}>
      {
        loading ?


          <div className='loader'>
            <BarLoader
              loading={loading}
              color={'#fff'}
              size={450}
              aria-label="Loading Spinner"
            />
          </div>

          :

          <main className='relative z-0'>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.9 }}
              className='bg-cover bg-no-repeat bg-center p-1'>
              <NavBar />
              <div className='fixed top-2 right-6 z-50 sm:top-[38px]'>
                <Switch defaultChecked  color='deep-purple' onClick={toggleTheme} />
              </div>
            </motion.div>

            <Hero />

            <About />
            <Tech />
            <Works />
            <Feedbacks />
            <div className='relative z-0'>
              <Contact />
            </div>
          </main>
      }
    </div>
  );
};

export default Page;
