import { TechOne, TechTwo } from "./TechStack"
import { motion } from "framer-motion"
import { textVariant } from '../utils/motion';
import { styles } from "../app/styles";
import { SectionWrapper } from "../hoc";



const Tech = () => {
  return (
    <section className="h-auto mx-0 my-5 text-center ">
      <motion.div className="my-5" variants={textVariant()}>
        <p className={styles.sectionSubText}>What i use</p>
        <h2 className={styles.sectionHeadText}>Tech Stacks.</h2>
      </motion.div>
      <div className="bg-[#1E1E2F] py-10 rounded-[15px]">
        <div className="flex justify-center"><TechOne /></div>
        <div className="flex justify-center"><TechTwo /> </div>
      </div>
    </section>
  )
}

export default SectionWrapper(Tech, 'tech')
