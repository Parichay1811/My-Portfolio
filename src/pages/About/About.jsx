"use client"

import { motion } from "framer-motion"
import { FiCpu, FiUser, FiCode, FiGlobe } from "react-icons/fi"
import { RiRobot2Fill } from "react-icons/ri"
import { BsTerminalFill } from "react-icons/bs"
import styles from "./About.module.css"

const About = () => {
  const dataFields = [
    { label: "OPERATOR_ID", value: "Parichay Dutta Biswas", icon: <FiUser /> },
    { label: "ROLE", value: "Full Stack Developer", icon: <FiCode /> },
    { label: "STACK", value: "MERN · Java · Python · AWS", icon: <FiCpu /> },
    { label: "STATUS", value: "ACTIVE — SEEKING OPPORTUNITIES", icon: <FiGlobe />, highlight: true },
  ]

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>

        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.sectionTag}>
            <RiRobot2Fill className={styles.tagIcon} />
            <span>SYS.PROFILE</span>
          </div>
          <h1 className={styles.title}>ABOUT ME</h1>
          <div className={styles.titleBar}></div>
        </motion.div>

        {/* Content Grid */}
        <div className={styles.content}>

          {/* Left: Image with cyber frame */}
          <motion.div
            className={styles.imageSection}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.cyberFrame}>
              <div className={styles.cornerTL}></div>
              <div className={styles.cornerTR}></div>
              <div className={styles.cornerBL}></div>
              <div className={styles.cornerBR}></div>
              <div className={styles.scanBeam}></div>
              <motion.img
                src="/avatar.png"
                alt="Parichay Dutta Biswas"
                className={styles.profileImage}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className={styles.statusPanel}>
              <span className={styles.statusDot}></span>
              <span className={styles.statusText}>SYSTEM_ONLINE</span>
            </div>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            className={styles.infoSection}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Data fields */}
            <div className={styles.dataGrid}>
              {dataFields.map((field, i) => (
                <motion.div
                  key={i}
                  className={`${styles.dataRow} ${field.highlight ? styles.highlight : ""}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <span className={styles.dataIcon}>{field.icon}</span>
                  <div className={styles.dataContent}>
                    <span className={styles.dataLabel}>{field.label}</span>
                    <span className={styles.dataValue}>{field.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bio */}
            <motion.div
              className={styles.bioBlock}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <div className={styles.bioHeader}>
                <BsTerminalFill className={styles.bioIcon} />
                <span>bio.exe</span>
              </div>
              <p className={styles.bioText}>
                I am a motivated Full Stack Web Developer with 0–1 year of hands-on experience
                building responsive, scalable, and user-focused web applications. My core expertise
                lies in React.js, HTML5/CSS3, JavaScript, Node.js, and Express.js, along with strong
                fundamentals in Java and Python. I work confidently with REST APIs, MongoDB, Firebase,
                and AWS to deliver full-stack solutions that perform reliably in real environments.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
