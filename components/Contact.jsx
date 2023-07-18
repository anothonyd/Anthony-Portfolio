'use client'

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';

import { styles } from "../app/styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // p-cHEcxvZ3DgdtB-I
    // template_5hgsucg
    // service_bgl8r9f
    emailjs.send(
      'service_bgl8r9f',
      'template_5hgsucg',
      {
        from_name: form.name,
        to_name: 'Anthony',
        from_email: form.email,
        to_email: 'anothony3247@gmail.com',
        message: form.message,
      },
      'p-cHEcxvZ3DgdtB-I'
    )
      .then(() => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');

        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false);

        console.log(error);

        alert('something went wrong');
      })
  };

  return (
    <div className="md:flex-row flex-col flex gap-10 w-full justify-between overflow-hidden">

      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[1] w-full green-pink-gradient p-[1px] rounded-[20px]"
      >
        <div className="bg-[#1E1E2F] px-3 md:px-5 p-5 w-full rounded-[20px]">
          <p className={`${styles.sectionSubText}  text-[#FAFAFA]`}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-3 flex flex-col gap-5"
          >
            <label
              className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-[#fafafa10] py-4 px-3
            placeholder:text-gray-300 text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <label
              className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-[#fafafa10] py-4 px-3
            placeholder:text-gray-300 text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <label
              className="flex flex-col">
              <span className="text-white font-medium mb-4">Leave a Message</span>
              <textarea
                rows="3"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want say?"
                className="bg-[#fafafa10] py-4 px-3
            placeholder:text-gray-300 text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="text-[#FAFAFA] bg-[#fafafa10] py-3 px-8 w-fit shadow-card outlined-none border-none font-bold rounded-xl"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="flex-[1] w-full rounded-[20px]"
      >
        <div className="flex flex-col me-8 h-full gap-5 items-start md:items-end justify-center pb-10">
        <h2 className="my-3 font-bold text-[30px] md:text-end text-gradient from-purple-to-pink">I would love to hear from you.</h2>
        <p className="text-[18px]">Quezon City, Philippines</p>
        <p className="text-[18px]">anthony.dulguime.dev@gmail.com</p>
        <p className="text-[18px]">0956-143-0477</p>
        </div>


      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact');