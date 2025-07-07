import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>


    <div className={`${styles.right} ${menuOpen ? styles.showMenu : ''}`}>
            <a href="/" className={styles.link}>Home</a>
            <a href="#" className={styles.link}>About</a>
            <a href="#" className={styles.link}>Contact</a>
          </div>
     
       <div className={styles.center}>Play And Learn</div>

      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`${styles.bar} ${menuOpen ? styles.rotate1 : ''}`}></div>
        <div className={`${styles.bar} ${menuOpen ? styles.hide : ''}`}></div>
        <div className={`${styles.bar} ${menuOpen ? styles.rotate2 : ''}`}></div>
      </div>

    </nav>
  );
};

export default Navbar;
