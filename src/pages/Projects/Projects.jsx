"use client"
import { motion } from "framer-motion"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import { FiCode, FiZap } from "react-icons/fi"
import { BsTerminalFill, BsPatchCheckFill } from "react-icons/bs"
import styles from "./Projects.module.css"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Food Express",
      subtitle: "Food Delivery App",
      description:
        "Responsive React.js app for searching cuisines, managing cart, placing orders, and viewing order history. Firebase handles authentication and profile management.",
      image: "/image copy.png",
      technologies: ["React.js", "Firebase", "HTML", "CSS", "JavaScript"],
      liveDemo: "https://food-delivery-app-murex-eight.vercel.app/",
      sourceCode: "https://github.com/Parichay1811/Food-delivery-app",
      status: "DEPLOYED",
    },
    {
      id: 2,
      title: "Expense Tracker",
      subtitle: "AI-Powered Finance Tool",
      description:
        "Track expenses, set budgets, and monitor balance. Features manual login, Gemini AI assistance, and spending visualizations via Chart.js.",
      image: "/et.png",
      technologies: ["HTML", "CSS", "JavaScript", "Gemini API"],
      liveDemo: "https://expense-tracker-green-theta.vercel.app/",
      sourceCode: "https://github.com/Parichay1811/Expense-tracker",
      status: "ACTIVE",
    },
    {
      id: 3,
      title: "Infinite Scroll Gallery",
      subtitle: "Dynamic Image Gallery",
      description:
        "Responsive React.js image gallery with infinite scrolling using Intersection Observer API. Fetches images from an external API with smooth UI transitions.",
      image: "/image copy 2.png",
      technologies: ["JavaScript", "React.js", "HTML", "CSS", "Unsplash API"],
      liveDemo: "https://infinite-scroll-kappa-jet.vercel.app/",
      sourceCode: "https://github.com/Parichay1811/Infinite-scroll",
      status: "LIVE",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className={styles.projects}>
      <div className={styles.container}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={styles.header}
        >
          <div className={styles.sectionTag}>
            <FiCode className={styles.tagIcon} />
            <span>PROJECT_LOG.EXE</span>
          </div>
          <h1 className={styles.title}>PROJECTS</h1>
          <div className={styles.titleBar}></div>
          <p className={styles.subtitle}>Deployed systems and active builds</p>
        </motion.div>

        <motion.div
          className={styles.projectsGrid}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {/* Terminal window header */}
              <div className={styles.terminalHeader}>
                <div className={styles.termDots}>
                  <span className={styles.dot} style={{ background: "#ff5f57" }}></span>
                  <span className={styles.dot} style={{ background: "#ffbd2e" }}></span>
                  <span className={styles.dot} style={{ background: "#28ca41" }}></span>
                </div>
                <div className={styles.termTitle}>
                  <BsTerminalFill className={styles.termIcon} />
                  <span>project_{String(index + 1).padStart(2, "0")}.exe</span>
                </div>
                <div className={styles.statusBadge}>
                  <BsPatchCheckFill className={styles.statusIcon} />
                  {project.status}
                </div>
              </div>

              {/* Corner decorators */}
              <div className={styles.cornerBL}></div>
              <div className={styles.cornerTR}></div>

              {/* Image */}
              <div className={styles.imageContainer}>
                <img src={project.image || "/placeholder.svg"} alt={project.title} className={styles.projectImage} />
                <div className={styles.imageOverlay}>
                  <div className={styles.overlayButtons}>
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className={styles.overlayButton}>
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                    <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className={styles.overlayButton}>
                      <FaGithub />
                      Source Code
                    </a>
                  </div>
                </div>
                <div className={styles.imageScanBeam}></div>
              </div>

              {/* Card Content */}
              <div className={styles.cardContent}>
                <div className={styles.projectMeta}>
                  <span className={styles.projectIndex}>/{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <span className={styles.projectSubtitle}>{project.subtitle}</span>
                  </div>
                </div>

                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.technologies}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} className={styles.techTag}>
                      <FiZap className={styles.techIcon} />
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.cardButtons}>
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
                    <FaExternalLinkAlt />
                    LAUNCH
                  </a>
                  <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>
                    <FaGithub />
                    SOURCE
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
