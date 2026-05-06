"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FiDownload, FiTerminal, FiCpu, FiCode } from "react-icons/fi"
import { RiRobot2Fill } from "react-icons/ri"
import { BsBracesAsterisk } from "react-icons/bs"
import styles from "./Home.module.css"

const Home = () => {
  const [line1, setLine1] = useState("")
  const [line2, setLine2] = useState("")
  const [showStats, setShowStats] = useState(false)
  const fullLine1 = "Hi, I'm Parichay"
  const fullLine2 = "Full Stack Developer"

  useEffect(() => {
    let index1 = 0
    let index2 = 0

    const timer1 = setInterval(() => {
      if (index1 < fullLine1.length) {
        setLine1(fullLine1.slice(0, index1 + 1))
        index1++
      } else {
        clearInterval(timer1)
        const timer2 = setInterval(() => {
          if (index2 < fullLine2.length) {
            setLine2(fullLine2.slice(0, index2 + 1))
            index2++
          } else {
            clearInterval(timer2)
            setTimeout(() => setShowStats(true), 400)
          }
        }, 80)
      }
    }, 80)

    return () => clearInterval(timer1)
  }, [])

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/Parichay Dutta Biswas.pdf"
    link.download = "Parichay Dutta Biswas.pdf"
    link.click()
  }

  const stats = [
    { icon: <FiCode />, value: "3+", label: "PROJECTS" },
    { icon: <FiCpu />, value: "8+", label: "SKILLS" },
    { icon: <BsBracesAsterisk />, value: "1+", label: "YRS EXP" },
    { icon: <RiRobot2Fill />, value: "2+", label: "COMPANIES" },
  ]

  return (
    <div className={styles.home}>
      {/* Background decorations */}
      <div className={styles.bgGrid}></div>
      <div className={styles.bgGlow}></div>

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Text Section */}
          <div className={styles.textSection}>
            {/* Terminal prefix line */}
            <motion.div
              className={styles.terminalLine}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FiTerminal className={styles.termIcon} />
              <span>INIT_SEQUENCE &gt;&gt; LOADING_PROFILE.EXE</span>
            </motion.div>

            <motion.h1
              className={styles.heading1}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className={styles.prompt}>&gt;_</span> {line1}
              {line2 === "" && <span className={styles.cursor}>█</span>}
            </motion.h1>

            <motion.h2
              className={styles.heading2}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              {line2}
              {line2.length > 0 && line2.length < fullLine2.length && (
                <span className={styles.cursor}>█</span>
              )}
              {line2 === fullLine2 && <span className={styles.cursorFinal}>█</span>}
            </motion.h2>

            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.6 }}
            >
              <span className={styles.descPrompt}>// </span>
              Crafting scalable, high-performance web solutions. A problem-solver
              who engineers code that inspires and influences.
            </motion.p>

            {/* Stats Row */}
            {showStats && (
              <motion.div
                className={styles.statsRow}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    className={styles.statItem}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <span className={styles.statIcon}>{stat.icon}</span>
                    <span className={styles.statValue}>{stat.value}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}

            <motion.div
              className={styles.buttonRow}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2.2 }}
            >
              <motion.button
                className={styles.cvButton}
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <FiDownload className={styles.btnIcon} />
                DOWNLOAD_CV.EXE
              </motion.button>
            </motion.div>

            <motion.p
              className={styles.menuHint}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.5 }}
            >
              &gt; Navigate via menu above to explore more.
            </motion.p>
          </div>

          {/* Image Section */}
          <motion.div
            className={styles.imageSection}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <div className={styles.imageFrame}>
              {/* Corner brackets */}
              <div className={styles.cornerTL}></div>
              <div className={styles.cornerTR}></div>
              <div className={styles.cornerBL}></div>
              <div className={styles.cornerBR}></div>
              {/* Scan effect */}
              <div className={styles.scanOverlay}></div>
              <picture>
                <source media="(max-width: 768px)" srcSet="/bg.png" />
                <img
                  src="/bg.png"
                  alt="Parichay - Full Stack Developer"
                  className={styles.profileImage}
                />
              </picture>
            </div>
            <div className={styles.imageCaption}>
              <span className={styles.captionDot}></span>
              <span>SYSTEM_ACTIVE</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home
