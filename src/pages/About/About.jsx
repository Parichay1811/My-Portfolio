"use client"

import { motion } from "framer-motion"
import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>

        {/* Profile Image */}
        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src="/avatar.png" // public folder files don't need /public in the path
            alt="Parichay Dutta Biswas"
            className={styles.profileImage}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          About Me😉
        </motion.h1>

        {/* Description */}
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          I am a motivated Full Stack Web Developer with 0–1 year of hands-on experience in building responsive, scalable, and user-focused web applications. My core expertise lies in React.js, HTML5/CSS3, JavaScript, Node.js, and Express.js, along with strong fundamentals in Java and Python. I work confidently with REST APIs, MongoDB, Firebase, and AWS to deliver full-stack solutions that perform reliably in real.
        </motion.p>

      </div>
    </section>
  )
}

export default About
