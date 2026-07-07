"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { FiTerminal } from "react-icons/fi"
import styles from "./Loader.module.css"

const BOOT_LINES = ["Loading portfolio...", "Preparing assets...", "Almost there...", "Ready"]

const Loader = ({ onDone }) => {
  const reducedMotion = useReducedMotion()
  const [progress, setProgress] = useState(0)
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {
    if (reducedMotion) {
      const t = setTimeout(onDone, 150)
      return () => clearTimeout(t)
    }

    const duration = 1300
    const start = performance.now()
    let raf

    const tick = (now) => {
      const pct = Math.min(100, ((now - start) / duration) * 100)
      setProgress(pct)
      setLineIndex(Math.min(BOOT_LINES.length - 1, Math.floor((pct / 100) * BOOT_LINES.length)))
      if (pct < 100) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(onDone, 250)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reducedMotion, onDone])

  return (
    <motion.div
      className={styles.loader}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className={styles.grid}></div>
      <div className={styles.ring}>
        <div className={styles.ringOuter}></div>
        <div className={styles.ringInner}></div>
        <FiTerminal className={styles.ringIcon} />
      </div>
      <div className={styles.bootText}>
        <span className={styles.prompt}>&gt;_</span> {BOOT_LINES[lineIndex]}
      </div>
      <div className={styles.progressTrack}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }}></div>
      </div>
      <div className={styles.progressLabel}>{Math.floor(progress)}%</div>
    </motion.div>
  )
}

export default Loader
