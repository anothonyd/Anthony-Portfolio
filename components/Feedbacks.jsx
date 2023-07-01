"use client"

import { motion } from "framer-motion"


import Image from "next/image"
import { styles } from "../app/styles"
import { fadeIn, textVariant } from "../utils/motion"
import { testimonials } from "../constants"
import { SectionWrapper } from "../hoc"

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.6, 1.5)}
    className='bg-blue-100 p-10 rounded-3xl xs:max-w-[290px] w-full '
  >
    <p className='text-white font-black text-[48px]'>&quot;</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-black font-medium text-[16px]'>
            <span className='text-tertiary'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <Image
          src={image}
          alt={`feedback_by-${name}`}
          width={100}
          height={100}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-[#0A3E9D] shadow-card rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-t-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 sm:flex justify-center`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");