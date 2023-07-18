"use client";

import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import Image from "next/image";
import { styles } from "../app/styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.7, 1)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='green-pink-gradient shadow-card p-[1px] rounded-2xl sm:w-[360px] w-full'
      >
        <div className="bg-[#1E1E2F] p-5 rounded-2xl min-h-[280px] w-full">
          <div className='relative w-full h-[230px]'>
            <Image
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='bg-[#1E1E2F] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <Image
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain bg-[#'
                />
              </div>
            </div>
          </div>

          <div className='mt-5 sm:h-full md:h-36  '>
            <h3 className='text-[#FAFAFA] font-bold text-[24px]'>{name}</h3>
            <p className='text-[#FAFAFA] mt-2 text-[14px]'>{description}</p>
          </div>

          <div className='mt-4 flex flex-wrap align-self-end gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full hidden'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3x1 leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-5 flex flex-wrap w-full justify-center gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`}
            index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'projects');