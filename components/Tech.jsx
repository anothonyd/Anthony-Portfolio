import { TechOne, TechTwo } from "./TechStack"
import { motion } from "framer-motion"
import { textVariant } from '../utils/motion';
import { styles } from "../app/styles";
import { SectionWrapper } from "../hoc";



const Tech = () => {
  return (
    <section className="my-5">
      <motion.div className="my-5" variants={textVariant()}>
        <p className={styles.sectionSubText}>What i use</p>
        <h2 className={styles.sectionHeadText}>Tech Stacks.</h2>
      </motion.div>
      <div className="flex justify-center"><TechOne /></div>
      <div className="flex justify-center"><TechTwo /> </div>
    </section>
  )
}

export default SectionWrapper (Tech,'tech')
