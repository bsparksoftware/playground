import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Footer.module.css';
import logo from '../assets/logo.png';
import logo_d from "../assets/Logo_light.png";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
  const usefulLinks = [
    { label: "Home", href: "https://www.bsparksoftwaretechnologies.com/" },
    { label: "About us", href: "https://www.bsparksoftwaretechnologies.com/about" },
    { label: "Bspark Play Ground", href: "https://playground.bsparksoftwaretechnologies.com/" },
    { label: "Services", href: "https://www.bsparksoftwaretechnologies.com/services" },
    { label: "Terms of service", href: "#" },
    { label: "Privacy policy", href: "#" },
  ];


  const devLinks = [
    { label: "Java", href: "https://www.bsparksoftwaretechnologies.com/java-training-in-chennai" },
    { label: "Python", href: "https://www.bsparksoftwaretechnologies.com/python-training-in-chennai" },
    { label: "HTML & CSS", href: "https://www.bsparksoftwaretechnologies.com/htmlcss-training-in-chennai" },
    { label: "React JS", href: "https://www.bsparksoftwaretechnologies.com/reactjs-training-in-chennai" },
    { label: "Node JS", href: "#" },
    { label: "Full Stack", href: "https://www.bsparksoftwaretechnologies.com/Fullstack-training-in-chennai" },
    { label: "SQL", href: "https://www.bsparksoftwaretechnologies.com/sql-training-in-chennai" },
    { label: "AWS", href: "https://www.bsparksoftwaretechnologies.com/aws-training-in-chennai" },
    { label: "Salesforce", href: "#" },
    { label: "Azure", href: "https://www.bsparksoftwaretechnologies.com/azure-training-in-chennai" },
    { label: "Appian", href: "#" },
  ];

  const testingLinks = [
    { label: "Selenium", href: "https://www.bsparksoftwaretechnologies.com/selenium-training-in-chennai" },
    { label: "API Automation", href: "https://www.bsparksoftwaretechnologies.com/restapi-training-in-chennai" },
    { label: "Mobile Appium", href: "https://www.bsparksoftwaretechnologies.com/appium-training-in-chennai" },
    { label: "JMeter", href: "https://www.bsparksoftwaretechnologies.com/jmeter-training-in-chennai" },
    { label: "ETL Testing", href: "#" },
    { label: "Software Testing", href: "https://www.bsparksoftwaretechnologies.com/manualtesting-training-in-chennai" },
    { label: "Playwright", href: "https://www.bsparksoftwaretechnologies.com/playwright-training-in-chennai" },
  ];
    const trendingLinks = [
    { label: "Selenium in Chennai", href: "https://www.bsparksoftwaretechnologies.com/selenium-training-in-chennai" },
    { label: "Playwright in Chennai", href: "https://www.bsparksoftwaretechnologies.com/playwright-training-in-chennai" },
    { label: "API Automation in Chennai", href: "https://www.bsparksoftwaretechnologies.com/restapi-training-in-chennai" },
   { label: "Software Testing in Chennai", href: "https://www.bsparksoftwaretechnologies.com/manualtesting-training-in-chennai" },
   
  ];

 const Section = ({ title, links }) => (
    <motion.div
      className={styles.footerColumn}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h4 className={styles.sectionTitle}>{title}</h4>
      <ul className={styles.linkList}>
        {links.map((link, index) => (
          <li key={index} className={styles.linkItem}>
            <FaChevronRight className={styles.icon} />
            <a href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.footerWrapper}>
        
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerContainer}>
          <motion.div
            className={styles.footerColumn}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={logo_d}
              alt="Bspark-logo"
              className={styles.logo}
            />
            <p className={styles.contact}>
              <a href="tel:+91-7200702908"><FaPhoneAlt /> +91-7200702908</a><br />
              <a href="mailto:info@bsparksoftwaretechnologies.com"><FaEnvelope /> info@bsparksoftwaretechnologies.com</a>
            </p>

            <div className={styles.socials}>
              <a href="https://www.facebook.com/bsparksoftwaretechnologies/" target="_blank"><FaFacebookF /></a>
              <a href="https://www.instagram.com/bsparksoftwaretechnologies" target="_blank" ><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/bspark-software-technologies" target="_blank"><FaLinkedinIn /></a>
            </div>
          </motion.div>

          <Section title="Useful Links" links={usefulLinks} />
          <Section title="Software Development" links={devLinks} />
          <Section title="Software Testing" links={testingLinks} />
          <Section title="Trending Course" links={trendingLinks} />
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2025 <strong>Bspark Software Technologies Pvt Ltd.</strong> All Rights Reserved</p>
        <button className={styles.scrollTop} onClick={scrollToTop}><FaArrowUp /></button>
      </div>
    </footer>
    </div>
  );
};

export default Footer;