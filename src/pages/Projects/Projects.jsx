"use client"
import { motion } from "framer-motion"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import styles from "./Projects.module.css"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Food delivery app (Food Express)",
      description:
        "Responsive React.js app for searching cuisines, managing cart, placing orders, and viewing order history. Firebase handles authentication and profile management.",
      image: "/image copy.png",
      technologies: ["React.js", "Firebase", "HTML", "CSS", "JavaScript"],
      liveDemo: "https://food-delivery-app-murex-eight.vercel.app/",
      sourceCode: "https://github.com/Parichay1811/Food-delivery-app",
    },
    {
      id: 2,
      title: "Expence Tracker",
      description:
        "Track expenses, set budgets, and monitor balance. Features manual login, Gemini AI assistance, and spending visualizations via Chart.js.",
      image: "/et.png",
      technologies: ["HTML", "CSS", "JavaScript, Gemini Api"],
      liveDemo: "https://expense-tracker-green-theta.vercel.app/",
      sourceCode: "https://github.com/Parichay1811/Expense-tracker"
    },
    {
      id: 3,
      title: "Infinite Scroll Gallery",
      description:
        "Responsive React.js image gallery with infinite scrolling using Intersection Observer API. Fetches images from an external API with smooth UI transitions.",
      image: "/image copy 2.png",
      technologies: ["JavaScript", "HTML", "CSS", "Intersection Observer API", "External Image API (e.g., Unsplash API)"],
      liveDemo: "https://infinite-scroll-kappa-jet.vercel.app/",
      sourceCode: "https://github.com/Parichay1811/Infinite-scroll",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <div className={styles.projects}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h1 className={styles.title}>Projects</h1>
          <p className={styles.subtitle}>A showcase of my recent work and achievements</p>
        </motion.div>

        <motion.div className={styles.projectsGrid} variants={containerVariants} initial="hidden" animate="visible">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.imageContainer}>
                <img src={project.image || "/placeholder.svg"} alt={project.title} className={styles.projectImage} />
                <div className={styles.imageOverlay}>
                  <div className={styles.overlayButtons}>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.overlayButton}
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.overlayButton}
                    >
                      <FaGithub />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.technologies}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.cardButtons}>
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryButton}
                  >
                    <FaGithub />
                    Source Code
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
