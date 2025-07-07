import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import styles from '../styles/ActionClass.module.css';

const ActionClass = () => {
  const [message, setMessage] = useState('');
  const [dropText, setDropText] = useState('');
  const dragText = 'Bspark Software Technologies';

  const handleDoubleClick = () => {
    setMessage('Clicked Me Twice');
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', dragText);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    setDropText(data);
  };

  const handleDragOver = (e) => e.preventDefault();

  return (
    <PageLayout
      title="🎯 ACTION CLASS & DRAG-DROP"
      sidebarContent={
        <ul>
          <li>🖱️ Right Click, Double Click</li>
          <li>🎯 Action Class Dropdown Options</li>
          <li>📦 Drag & Drop with Animated UI</li>
        </ul>
      }
    >
      <div className={styles.row}>
        {/* ACTION CLASS SECTION */}
        <div className={styles.col}>
          <h3 className={styles.heading}>ACTION CLASS</h3>

          <div className={styles.actionRow}>
            {/* Left: Right Click */}
            <div className={styles.navBox}>
              <a
                className={styles.link}
                id="bst_anchor"
                name ="right_click"
                href="https://www.bsparksoftwaretechnologies.com/playwright-training-in-chennai"
                target="_blank"
                rel="noreferrer"
              >
                Right Click
              </a>
            </div>

            {/* Right: Dropdown */}
           <div className={styles.dropdownWrapper}>
  <div className={styles.dropdownButton}>ACTION CLASS OPTIONS</div>
  <ul className={styles.dropdownList} id="dropdown" name="bst_drop">
    <li><a id = "bst_alert" name="bst_alert" href="alert" className={styles.dropdownLink}>Alert</a></li>
    <li><a id = "bst_frames" name="bst_frames" href="frames" className={styles.dropdownLink}>Frames</a></li>
    <li><a id = "bst_ss" name="bst_ss" href="screenshot" className={styles.dropdownLink}>Screenshot</a></li>
  </ul>
</div>

          </div>

          <button id = "bst_btn" className={styles.doubleClickBtn} onDoubleClick={handleDoubleClick}>
            Double Click Me
          </button>
          <p id = "bst_para" className={styles.message}>{message}</p>
        </div>

        {/* DRAG & DROP SECTION */}
        <div className={styles.col}>
          <h3 className={styles.heading}>DRAG AND DROP</h3>

          <div
            className={styles.draggableBox}
            draggable
           
            onDragStart={handleDragStart}
            title="Drag this"
            id = "bst_dd"
          >
            {dragText}
          </div>

          <p className={styles.instruction} id = "bst" >
            Drag the box above and drop the content into the field below.
          </p>

          <textarea
            className={styles.dropArea}
            placeholder="Drop Here..."
            value={dropText}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            readOnly
            id = "bst_txtarea"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default ActionClass;
