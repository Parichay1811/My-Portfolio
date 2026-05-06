"use client"
import { motion } from "framer-motion"
import { FiBriefcase, FiCalendar, FiChevronRight } from "react-icons/fi"
import { BsTerminalFill, BsPatchCheckFill } from "react-icons/bs"
import { RiBuilding2Fill } from "react-icons/ri"
import styles from "./Experience.module.css"

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Viral Me",
      logo: "/Viral Me.jpg",
      position: "Junior Software Engineer",
      type: "FREELANCE",
      duration: "June 2023 - April 2024",
      description: [
        "Built and deployed responsive, real-time web applications using React.js, Node.js, and MongoDB.",
        "Improved app performance by 30% and reduced deployment times by 25% through effective CI/CD integration.",
        "Enhanced modularity in the backend architecture, improving scalability and maintainability.",
        "Collaborated in an Agile environment to meet project deadlines with high code quality.",
        "Used Docker, AWS EC2/S3, and GitHub Actions for seamless deployments and version control.",
      ],
    },
    {
      id: 2,
      company: "Geekster",
      logo: "/g.png",
      position: "Student Trainee",
      type: "TRAINING",
      duration: "May 2024 - Aug 2025",
      description: [
        "Built and deployed full-stack applications using MongoDB, Express.js, React.js, and Node.js",
        "Created and integrated REST APIs with responsive frontends.",
        "Managed databases, implemented JWT authentication, and tested APIs with Postman.",
        "Collaborated via Git/GitHub and deployed projects to Heroku, Vercel, and Netlify.",
      ],
    },
    {
      id: 3,
      company: "Futuresight Analytics",
      logo: "/flogo.png",
      position: "Web Development Consultant",
      type: "DEVELOPER",
      duration: "Aug 2025 - Present",
      description: [
        "Led development of an AI-powered learning platform improving accessibility for dyslexic users through simplified UI/UX and adaptive content delivery.",
        "Designed a modular React architecture, reducing component re-renders and improving frontend performance by 25%.",
        "Developed secure REST APIs using Node.js and Express with JWT-based authentication and RBAC, ensuring scalable and secure access control.",
        "Integrated LLM APIs to automate content generation and personalized learning flows, reducing manual effort by 40%.",
        "Resolved critical authentication and session issues, improving system reliability and reducing login failures."
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  }

  return (
    <div className={styles.experience}>
      <div className={styles.container}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={styles.header}
        >
          <div className={styles.sectionTag}>
            <FiBriefcase className={styles.tagIcon} />
            <span>WORK_LOG.SYS</span>
          </div>
          <h1 className={styles.title}>EXPERIENCE</h1>
          <div className={styles.titleBar}></div>
          <p className={styles.subtitle}>Professional mission history and deployments</p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className={styles.timeline}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Vertical line */}
          <div className={styles.timelineLine}></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={styles.timelineItem}
              variants={itemVariants}
            >
              {/* Timeline node */}
              <div className={styles.timelineNode}>
                <div className={styles.nodeDot}></div>
              </div>

              {/* Card */}
              <motion.div
                className={styles.experienceCard}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
              >
                {/* Card top bar */}
                <div className={styles.cardTopBar}></div>

                {/* Corner decorators */}
                <div className={styles.cornerTL}></div>
                <div className={styles.cornerBR}></div>

                {/* Card header */}
                <div className={styles.cardHeader}>
                  <div className={styles.companyInfo}>
                    <div className={styles.logoWrapper}>
                      <img
                        src={exp.logo || "/placeholder.svg"}
                        alt={`${exp.company} logo`}
                        className={styles.companyLogo}
                      />
                    </div>
                    <div className={styles.companyDetails}>
                      <div className={styles.companyMeta}>
                        <RiBuilding2Fill className={styles.metaIcon} />
                        <h3 className={styles.companyName}>{exp.company}</h3>
                        <span className={styles.typeBadge}>{exp.type}</span>
                      </div>
                      <h4 className={styles.position}>{exp.position}</h4>
                      <div className={styles.durationRow}>
                        <FiCalendar className={styles.durationIcon} />
                        <span className={styles.duration}>{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className={styles.cardBody}>
                  <div className={styles.bodyHeader}>
                    <BsTerminalFill className={styles.bodyIcon} />
                    <span>MISSION_REPORT</span>
                  </div>
                  <ul className={styles.descriptionList}>
                    {exp.description.map((item, idx) => (
                      <li key={idx} className={styles.descriptionItem}>
                        <FiChevronRight className={styles.bulletIcon} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Index label */}
                <div className={styles.cardIndex}>0{index + 1}</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Experience
