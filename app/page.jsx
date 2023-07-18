"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { About, Contact, Feedbacks, Hero, Tech, Works, NavBar } from "../components";
import BarLoader from "react-spinners/BarLoader";

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
              transition={{ delay: 0.1, duration: 1 }}
              className='bg-cover bg-no-repeat bg-center z-10 p-1'>
              <button
                className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'} fixed text-[10px] top-1 right-1 z-30 font-bold py-1 px-3 rounded`}
                onClick={toggleTheme}
              >
                {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
              </button>
              <NavBar />
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
