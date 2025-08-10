"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import emailjs from "emailjs-com"
import { FaEnvelope, FaUser, FaBuilding, FaMessage } from "react-icons/fa6"
import { IoMdCall } from "react-icons/io"
import styles from "./Contact.module.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("")

    try {
      // Initialize EmailJS with your public key
      emailjs.init("-oPp48i_4-WCdHHA3") // Replace with your EmailJS public key

      const templateParams = {
        from_name: formData.name,
        from_organization: formData.organization,
        message: formData.message,
        to_email: "parichay.rick18@gmail.com",
      }

      await emailjs.send(
        "service_22ymosb", 
        "template_21tyn1l", 
        templateParams,
      )

      setSubmitStatus("success")
      setFormData({ name: "", organization: "", message: "" })
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h1 className={styles.title}>Contact Me</h1>
          <p className={styles.subtitle}>Let's discuss your next project or opportunity</p>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className={styles.infoTitle}>Get In Touch</h2>
            <p className={styles.infoDescription}>
              I’m always excited to take on new challenges and collaborate on meaningful projects! 🌟
              I’m open to <b>internships</b>, <b>freelance opportunities</b>, and <b>full-time roles</b> where I can bring value, learn, and grow.
              Whether you have a project in mind, a question, or just want to connect, I’d love to hear from you—and I’ll do my best to get back to you quickly!
            </p>

            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <span>parichay.rick18@gmail.com</span>
              </div>
              <div className={styles.contactItem}>
                <IoMdCall  className={styles.contactIcon} />
                <span>(+91) 7337784453</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.formSection}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <div className={styles.inputContainer}>
                  <FaUser className={styles.inputIcon} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Name Here!"
                    className={styles.formInput}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.inputContainer}>
                  <FaBuilding className={styles.inputIcon} />
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Your Organization"
                    className={styles.formInput}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.inputContainer}>
                  <FaMessage className={styles.inputIcon} />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="write your message"
                    className={styles.formTextarea}
                    rows="6"
                    required
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>

              {submitStatus === "success" && (
                <motion.div
                  className={styles.successMessage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  className={styles.errorMessage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Failed to send message. Please try again or email me directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
