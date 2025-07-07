// src/pages/ButtonPage.jsx
import React from 'react';
import PageLayout from '../components/PageLayout';
import styles from '../styles/Button.module.css';

const ButtonPage = () => {
  const handlePosition = () => {
    const btn = document.getElementById('int155');
    const rect = btn.getBoundingClientRect();
    alert(`X: ${rect.left}, Y: ${rect.top}`);
  };

  const handleColor = () => {
    const color = window.getComputedStyle(document.getElementById('int177')).backgroundColor;
    alert(`Button color is: ${color}`);
  };

  const handleSize = () => {
    const btn = document.getElementById('int199');
    alert(`Width: ${btn.offsetWidth}px, Height: ${btn.offsetHeight}px`);
  };

  return (
    <PageLayout
      title="🧩 BUTTON INTERACTIONS"
      sidebarContent={
        <ul>
          <li>✏️ Navigate using <b>window.location</b></li>
          <li>📍 Find X, Y using <b>getBoundingClientRect()</b></li>
          <li>🎨 Fetch color using <b>getComputedStyle()</b></li>
          <li>📏 Get size using <b>offsetWidth</b> & <b>offsetHeight</b></li>
        </ul>
      }
    >
      <div className={styles.row}>
        <div className={styles.buttonGroup}>
          <label>CLICK BUTTON TO NAVIGATE TO HOMEPAGE</label>
          <button
            id="bst_btn1"
            name = "btn_home"
            onClick={() => window.location.href='https://www.bsparksoftwaretechnologies.com/selenium-training-in-chennai'}
          >
            GO TO HOME PAGE
          </button>
        </div>
        <div className={styles.buttonGroup}>
          <label>FIND THE POSITION OF BUTTON (X,Y)</label>
          <button id="bst_btn2" name = "btn_position" onClick={handlePosition}>GET POSITION</button>
        </div>
        <div className={styles.buttonGroup}>
          <label>FIND THE BUTTON COLOR</label>
          <button
            id="bst_btn3"
            name = "btn_color"
            style={{ backgroundColor: '#ffc400', color: '#fff' }}
            onClick={handleColor}
          >
            WHAT COLOR AM I ?
          </button>
        </div>
        <div className={styles.buttonGroup}>
          <label>FIND THE HEIGHT AND WIDTH</label>
          <button id="bst_btn4"
          name = "btn_size" onClick={handleSize}>WHAT IS MY SIZE ?</button>
        </div>
      </div>
    </PageLayout>
  );
};

export default ButtonPage;
