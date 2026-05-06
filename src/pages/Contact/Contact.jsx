"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import emailjs from "emailjs-com"
import { FaEnvelope, FaUser, FaBuilding } from "react-icons/fa"
import { FaMessage } from "react-icons/fa6"
import { IoMdCall } from "react-icons/io"
import { FiSend, FiTerminal } from "react-icons/fi"
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs"
import { RiRobot2Fill } from "react-icons/ri"
import styles from "./Contact.module.css"

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", organization: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("")

    try {
      emailjs.init("-oPp48i_4-WCdHHA3")

      const templateParams = {
        from_name: formData.name,
        from_organization: formData.organization,
        message: formData.message,
        to_email: "parichay.rick18@gmail.com",
      }

      await emailjs.send("service_22ymosb", "template_21tyn1l", templateParams)

      setSubmitStatus("success")
      setFormData({ name: "", organization: "", message: "" })
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactDetails = [
    { icon: <FaEnvelope />, label: "EMAIL", value: "parichay.rick18@gmail.com" },
    { icon: <IoMdCall />, label: "PHONE", value: "(+91) 7337784453" },
  ]

  return (
    <div className={styles.contact}>
      <div className={styles.container}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={styles.header}
        >
          <div className={styles.sectionTag}>
            <RiRobot2Fill className={styles.tagIcon} />
            <span>COMMS_CHANNEL.SYS</span>
          </div>
          <h1 className={styles.title}>CONTACT ME</h1>
          <div className={styles.titleBar}></div>
          <p className={styles.subtitle}>Establish a connection and transmit your message</p>
        </motion.div>

        {/* Content */}
        <div className={styles.content}>

          {/* Contact Info */}
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.infoTopBar}></div>
            <div className={styles.infoCornerTL}></div>
            <div className={styles.infoCornerBR}></div>

            <div className={styles.infoHeader}>
              <FiTerminal className={styles.infoIcon} />
              <h2 className={styles.infoTitle}>GET IN TOUCH</h2>
            </div>

            <p className={styles.infoDescription}>
              <span className={styles.descPrompt}>// </span>
              Always excited to take on new challenges and collaborate on meaningful
              projects. Open to <strong>internships</strong>, <strong>freelance opportunities</strong>,
              and <strong>full-time roles</strong>. I will get back to you quickly.
            </p>

            <div className={styles.contactDetails}>
              {contactDetails.map((item, i) => (
                <motion.div
                  key={i}
                  className={styles.contactItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                >
                  <span className={styles.contactIcon}>{item.icon}</span>
                  <div className={styles.contactItemContent}>
                    <span className={styles.contactLabel}>{item.label}</span>
                    <span className={styles.contactValue}>{item.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Status indicator */}
            <div className={styles.availabilityPanel}>
              <div className={styles.availDot}></div>
              <div>
                <div className={styles.availTitle}>AVAILABILITY_STATUS</div>
                <div className={styles.availValue}>OPEN TO OPPORTUNITIES</div>
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            className={styles.formSection}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className={styles.formTopBar}></div>
            <div className={styles.formHeader}>
              <FiTerminal className={styles.formTermIcon} />
              <span>TRANSMIT_MESSAGE.SYS</span>
            </div>

            <form onSubmit={handleSubmit} className={styles.contactForm}>
              {/* Name */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  <FaUser className={styles.labelIcon} />
                  INPUT_NAME
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name..."
                    className={styles.formInput}
                    required
                  />
                </div>
              </div>

              {/* Organization */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  <FaBuilding className={styles.labelIcon} />
                  INPUT_ORGANIZATION
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Your organization..."
                    className={styles.formInput}
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  <FaMessage className={styles.labelIcon} />
                  INPUT_MESSAGE
                </label>
                <div className={styles.inputWrapper}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className={styles.formTextarea}
                    rows="5"
                    required
                  />
                </div>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
              >
                {isSubmitting ? (
                  <>
                    <span className={styles.loadingDot}></span>
                    TRANSMITTING...
                  </>
                ) : (
                  <>
                    <FiSend className={styles.submitIcon} />
                    TRANSMIT_MESSAGE
                  </>
                )}
              </motion.button>

              {/* Status messages */}
              {submitStatus === "success" && (
                <motion.div
                  className={styles.successMessage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <BsCheckCircleFill className={styles.msgIcon} />
                  [SUCCESS] — Transmission received. Will respond shortly.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  className={styles.errorMessage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <BsXCircleFill className={styles.msgIcon} />
                  [ERROR] — Transmission failed. Try again or email directly.
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
