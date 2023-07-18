"use client"

import React, { useState } from "react";

import Image from 'next/image'
import Link from 'next/link'
import { logo, menu, close } from '../assets'
import { styles } from '../app/styles'
import { navLinks } from '../constants'

const NavBar = () => {
  const [active, setActive] = useState(""); // Define the active state variable
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} fixed w-full h-24 py-5 flex items-center z-10 top-0 backdrop-blur`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          href="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0)
          }}
        >
          <Image
            src={logo}
            width={40}
            height={40}
            alt='logo'
            className='object-contain my-6'
          />
          <p className='text-[18px] font-bold cursor-pointer'>Anthony Dulguime</p>
        </Link>
        <ul className='list-none hidden md:flex flex-row gap-6'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title
                ? 'text-[#00cea8]'
                : ''
                } font-poppins font-medium cursor-pointer text-[18px]`}
              onClick={() => {
                setToggle(!toggle);
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>


        <div className="md:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer rounded-2xl p-1 bg-[]"
            onClick={() => setToggle(!toggle)}
          />

          {/* mobile navigation */}
          <div className={`${!toggle ? 'hidden' : 'flex'}  black-gradient p-6 absolute top-20 right-0 mx-4 my-2 min-w-[120px] z-30 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4 '>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title
                    ? 'text-blue-100'
                    : 'text-white'
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}

            </ul>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default NavBar
