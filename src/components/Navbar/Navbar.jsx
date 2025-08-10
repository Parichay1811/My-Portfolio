"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaBars, FaTimes } from "react-icons/fa"
import styles from "./Navbar.module.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact Me", path: "/contact" },
  ]

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/Parichay1811" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/parichay-dutta-biswas-0a40191b5/" },
    { icon: <BsTwitterX />, url: "https://x.com/parichay1811" },
    // { icon: <FaInstagram />, url: "https://instagram.com" },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link to="/"><img src="/public/image.png" alt="" /></Link>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Social Icons */}
        <div className={styles.socialIcons}>
          {socialLinks.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              {social.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className={styles.mobileMenuBtn} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <div className={styles.mobileNavLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`${styles.mobileNavLink} ${location.pathname === link.path ? styles.active : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className={styles.mobileSocialIcons}>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileSocialIcon}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
