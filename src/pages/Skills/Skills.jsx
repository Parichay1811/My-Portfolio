"use client"
import { motion } from "framer-motion"
import { FiCpu, FiCode, FiDatabase, FiCloud, FiTool, FiGlobe, FiLayers } from "react-icons/fi"
import { BsGrid3X3GapFill } from "react-icons/bs"
import { RiRobot2Fill } from "react-icons/ri"
import { FaBrain } from "react-icons/fa"
import styles from "./Skills.module.css"

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <FiLayers />,
      skills: [
        { name: "JavaScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
        { name: "Python", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
        { name: "Java", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
        { name: "C", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
      ],
    },
    {
      category: "Frontend",
      icon: <FiCode />,
      skills: [
        { name: "JavaScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
        { name: "React.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
        { name: "HTML", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
        { name: "CSS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
        { name: "Tailwind", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
        { name: "Framer Motion", logo: "/framer-motion.svg" },
        { name: "typescript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
      ],
    },
    {
      category: "Backend",
      icon: <FiGlobe />,
      skills: [
        { name: "Node.js", logo: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/nodejs-4.png" },
        { name: "Express.js", logo: "/express.jpg" },
        { name: "cors", logo: "https://icons.veryicon.com/png/o/miscellaneous/apisix/cors-1.png" },
      ],
    },
    {
      category: "Database",
      icon: <FiDatabase />,
      skills: [
        { name: "MySQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: <FiCloud />,
      skills: [
        { name: "AWS", logo: "/aws.png" },
        { name: "AWS EC2", logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
        { name: "AWS S3", logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
        { name: "AWS Lambda", logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
        { name: "Firebase", logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
        { name: "Docker", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
      ],
    },
    {
      category: "Tools & Others",
      icon: <FiTool />,
      skills: [
        { name: "Git", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
        { name: "GitHub", logo: "/github.png" },
        { name: "GitHub Actions", logo: "https://avatars.githubusercontent.com/u/44036562?s=200&v=4" },
        { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "jira", logo: "https://icons.veryicon.com/png/o/application/app-icon-7/jira-5.png" },
        { name: "Thunder Client", logo: "/thunder.jpg" },
        { name: "jenkins", logo: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/jenkins-2.png" },
        { name: "ci/cd", logo: "/cicd.svg" },
      ],
    },
    {
      category: "AI & ML",
      icon: <FaBrain />,
      skills: [
        { name: "TensorFlow", logo: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" },
        { name: "PyTorch", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg" },
        { name: "ChatGPT 4o", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
        { name: "Claude Sonnet 4.6", logo: "/claude.jpg" },
      ],
    },
    {
      category: "Additional",
      icon: <BsGrid3X3GapFill />,
      skills: [
        { name: "REST APIs", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
        { name: "Chart.js", logo: "https://www.chartjs.org/media/logo-title.svg" },
        { name: "JWT Auth", logo: "https://jwt.io/img/pic_logo.svg" },
        { name: "Responsive Design", logo: "https://icons.veryicon.com/png/o/application/application-and-product-feature-icons/responsive.png" },
        { name: "Chrome DevTools", logo: "/dev.png" },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.07 } },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
  }

  return (
    <div className={styles.skills}>
      <div className={styles.container}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={styles.header}
        >
          <div className={styles.sectionTag}>
            <FiCpu className={styles.tagIcon} />
            <span>TECH_STACK.SYS</span>
          </div>
          <h1 className={styles.title}>SKILLS</h1>
          <div className={styles.titleBar}></div>
          <p className={styles.subtitle}>Technologies and tools loaded into the system</p>
        </motion.div>

        {/* Content */}
        <div className={styles.content}>
          <motion.div
            className={styles.skillsGrid}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className={styles.skillCategory}
                variants={categoryVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                {/* Category header */}
                <div className={styles.categoryHeader}>
                  <span className={styles.categoryIcon}>{category.icon}</span>
                  <h3 className={styles.categoryTitle}>{category.category}</h3>
                  <span className={styles.categoryIndex}>MODULE_{String(categoryIndex + 1).padStart(2, "0")}</span>
                </div>

                <div className={styles.skillsContainer}>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className={styles.skillCard}
                      variants={skillVariants}
                      whileHover={{ scale: 1.08, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className={styles.skillLogo}
                      />
                      <span className={styles.skillName}>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Side image */}
          <motion.div
            className={styles.imageSection}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className={styles.imageContainer}>
              <div className={styles.imgCornerTL}></div>
              <div className={styles.imgCornerBR}></div>
              <div className={styles.imgScanBeam}></div>
              <img
                src="/side.png"
                alt="Developer workspace"
                className={styles.skillsImage}
              />
              <div className={styles.imgOverlay}></div>
            </div>
            <div className={styles.imageLabel}>
              <span className={styles.labelDot}></span>
              <span>DEV_WORKSPACE</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Skills
