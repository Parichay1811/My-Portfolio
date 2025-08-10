"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import styles from "./Home.module.css"

const Home = () => {
  const [line1, setLine1] = useState("")
  const [line2, setLine2] = useState("")
  const fullLine1 = "Hi I'm Parichay,"
  const fullLine2 = "Full Stack Web Developer"

  useEffect(() => {
    let index1 = 0
    let index2 = 0

    // Animate first line
    const timer1 = setInterval(() => {
      if (index1 < fullLine1.length) {
        setLine1(fullLine1.slice(0, index1 + 1))
        index1++
      } else {
        clearInterval(timer1)
        // Animate second line after first is done
        const timer2 = setInterval(() => {
          if (index2 < fullLine2.length) {
            setLine2(fullLine2.slice(0, index2 + 1))
            index2++
          } else {
            clearInterval(timer2)
          }
        }, 100)
      }
    }, 100)

    return () => {
      clearInterval(timer1)
    }
  }, [])

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/Parichay Dutta Biswas.pdf"
    link.download = "Parichay Dutta Biswas.pdf"
    link.click()
  }

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.textSection}>
            <motion.h1
              className={styles.animatedText}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {line1}
              <span className={styles.cursor}>|</span>
            </motion.h1>

            <motion.h2
              className={styles.animatedText}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {line2}
              <span className={styles.cursor}>|</span>
            </motion.h2>

            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              Passionate about creating innovative web solutions and bringing ideas to life through code.
            </motion.p>

            <motion.button
              className={styles.cvButton}
              onClick={handleDownloadCV}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.button>

            {/* Small screen hint */}
            <motion.p
              className={styles.menuHint}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              Click on the menu above to know more.
            </motion.p>
          </div>

          {/* Image Section */}
          <div className={styles.imageSection}>
            <picture>
              <source media="(max-width: 768px)" srcSet="/bg.png" />
              <img
                src="/bg.png"
                alt="Parichay - Full Stack Developer"
                className={styles.profileImage}
              />
            </picture>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home
