"use client"
import { motion } from "framer-motion"
import styles from "./Experience.module.css"

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Geekster",
      logo: "/g.png",
      position: "Student Trainee",
      duration: "May 2024 - Present",
      description: [
        "Built and deployed full-stack applications using MongoDB, Express.js, React.js, and Node.js",
        "Created and integrated REST APIs with responsive frontends.",
        "Managed databases, implemented JWT authentication, and tested APIs with Postman.",
        "Collaborated via Git/GitHub and deployed projects to Heroku, Vercel, and Netlify.",
      ],
    },
    {
      id: 2,
      company: "Viral Me",
      logo: "/Viral Me.jpg",
      position: "Junior Software Engineer (Freelance)",
      duration: "June 2023 - April 2024",
      description: [
        "Built and deployed responsive, real-time web applications using React.js, Node.js, and MongoDB.",
        "Improved app performance by 30% and reduced deployment times by 25% through effective CI/CD integration",
        "Enhanced modularity in the backend architecture, improving scalability and maintainability.",
        "Collaborated in an Agile environment to meet project deadlines with high code quality and performance standards.",
        "Used Docker, AWS EC2/S3, and GitHub Actions for seamless deployments and version control."
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
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
    <div className={styles.experience}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h1 className={styles.title}>Experience</h1>
          <p className={styles.subtitle}>My professional journey and achievements</p>
        </motion.div>

        <motion.div className={styles.experienceList} variants={containerVariants} initial="hidden" animate="visible">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={styles.experienceCard}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.companyInfo}>
                  <img
                    src={exp.logo || "/placeholder.svg"}
                    alt={`${exp.company} logo`}
                    className={styles.companyLogo}
                  />
                  <div className={styles.companyDetails}>
                    <h3 className={styles.companyName}>{exp.company}</h3>
                    <h4 className={styles.position}>{exp.position}</h4>
                    <p className={styles.duration}>{exp.duration}</p>
                  </div>
                </div>
              </div>

              <div className={styles.cardBody}>
                <ul className={styles.descriptionList}>
                  {exp.description.map((item, idx) => (
                    <li key={idx} className={styles.descriptionItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Experience
