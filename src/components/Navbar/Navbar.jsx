"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { BsTwitterX } from "react-icons/bs"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaBars, FaTimes } from "react-icons/fa"
import { RiSignalWifiFill } from "react-icons/ri"
import { FiTerminal } from "react-icons/fi"
import styles from "./Navbar.module.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "EXPERIENCE", path: "/experience" },
    { name: "SKILLS", path: "/skills" },
    { name: "PROJECTS", path: "/projects" },
    { name: "CONTACT", path: "/contact" },
  ]

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/Parichay1811", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/parichay-dutta-biswas-0a40191b5/", label: "LinkedIn" },
    { icon: <BsTwitterX />, url: "https://x.com/parichay1811", label: "Twitter" },
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      {/* Scan line effect */}
      <div className={styles.scanLine}></div>

      <div className={styles.navContainer}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link to="/">
            <img src="/image.png" alt="Logo" />
          </Link>
        </div>

        {/* Status badge */}
        <div className={styles.statusBadge}>
          <RiSignalWifiFill className={styles.statusIcon} />
          <span className={styles.statusDot}></span>
          <span className={styles.statusText}>AVAILABLE</span>
        </div>

        {/* Desktop Nav Links */}
        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ""}`}
            >
              <span className={styles.linkBracket}>[</span>
              {link.name}
              <span className={styles.linkBracket}>]</span>
            </Link>
          ))}
        </div>

        {/* Desktop Social Icons */}
        <div className={styles.socialIcons}>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <div className={styles.mobileHeader}>
          <FiTerminal className={styles.mobileTermIcon} />
          <span>MENU</span>
        </div>
        <div className={styles.mobileNavLinks}>
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              className={`${styles.mobileNavLink} ${location.pathname === link.path ? styles.active : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className={styles.mobileIndex}>0{index + 1}</span>
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
