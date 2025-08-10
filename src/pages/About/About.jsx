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
          Full Stack Web Developer with expertise in building scalable, high-performance, and user-focused web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Skilled at translating complex requirements into clean, maintainable, and efficient code across both front-end and back-end, with proficiency in JavaScript (ES6+), RESTful APIs, Git, Docker, and AWS. Adept at creating responsive, accessible, and visually engaging interfaces, optimizing application performance, and ensuring code quality through best practices. Experienced in Agile environments, collaborating with cross-functional teams to deliver innovative and future-ready digital solutions.
        </motion.p>

      </div>
    </section>
  )
}

export default About
