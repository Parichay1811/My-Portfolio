"use client"
import { motion } from "framer-motion"
import styles from "./Skills.module.css"

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "JavaScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
        { name: "Python", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
        { name: "Java", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
        { name: "C", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
        
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "JavaScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
        { name: "React.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
        { name: "HTML", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
        { name: "CSS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
        { name: "Tailwind", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
        
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "MySQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS", logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg" },
        { name: "AWS EC2", logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
        { name: "AWS S3", logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
        { name: "AWS Lambda", logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
        { name: "Firebase", logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
        { name: "Docker", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
        { name: "GitHub", logo: "/github.png" },
        { name: "GitHub Actions", logo: "https://avatars.githubusercontent.com/u/44036562?s=200&v=4" },
        { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "Thunder Client", logo: "https://avatars.githubusercontent.com/u/73558520?s=200&v=4" },
      ],
    },
    {
      category: "AI & ML",
      skills: [
        { name: "TensorFlow", logo: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" },
        { name: "PyTorch", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg" },
        { name: "ChatGPT 4o", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
        { name: "Claude Sonnet 3", logo: "https://avatars.githubusercontent.com/u/129559962?s=200&v=4" },
      ],
    },
    {
      category: "Additional",
      skills: [
        { name: "REST APIs", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
        { name: "Chart.js", logo: "https://www.chartjs.org/media/logo-title.svg" },
        { name: "JWT Auth", logo: "https://jwt.io/img/pic_logo.svg" },
        { name: "Responsive Design", logo: "/res.png" },
        { name: "Chrome DevTools", logo: "/dev.png" },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <div className={styles.skills}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h1 className={styles.title}>Skills</h1>
          <p className={styles.subtitle}>Technologies and tools I work with</p>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.skillsGrid}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div key={categoryIndex} className={styles.skillCategory} variants={categoryVariants}>
                <h3 className={styles.categoryTitle}>{category.category}</h3>
                <div className={styles.skillsContainer}>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className={styles.skillCard}
                      variants={skillVariants}
                      whileHover={{
                        scale: 1.1,
                        y: -5,
                        transition: { duration: 0.2 },
                      }}
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

          <motion.div
            className={styles.imageSection}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className={styles.imageContainer}>
              <img
                src="/side.jpg"
                alt="Developer workspace"
                className={styles.skillsImage}
              />
              {/* <div className={styles.imageOverlay}></div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Skills
