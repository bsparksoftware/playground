// src/pages/SendKeys.jsx
import React from 'react';
import PageLayout from '../components/PageLayout';
import styles from '../styles/SendKeys.module.css'; // only input styles

const SendKeys = () => {
  return (
    <PageLayout
      title="📝 TEXT BOX INTERACTIONS"
      sidebarContent={
        <ul>
          <li>✏️ Enter text by command <b>SendKeys</b></li>
          <li>➕ Append text using <b>SendKeys</b></li>
          <li>🔍 Use <b>getAttribute</b> to fetch default value</li>
          <li>🧹 Use <b>Clear</b> method to clear input</li>
        </ul>
      }
    >
      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <label htmlFor="email">EMAIL</label>
          <input type="email" id="email" name="bst_email" placeholder="xxxxx@xxxxx.com" />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="append">APPEND TEXT</label>
          <input type="text" id="append" name="bst_press" defaultValue="APPEND" />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="default_text">GET DEFAULT TEXT</label>
          <input type="text" id="default_text" name="bst_default" defaultValue="BALAMURUGAN" />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="clear_text">CLEAR TEXT !!!</label>
          <input type="text" id="clear_text" name="bst_clear" defaultValue="CLEAR ME !!!" />
        </div>
        <div className={styles.inputGroupFull}>
          <label htmlFor="disabled">TEXT FIELD IS DISABLED</label>
          <input type="text" id="disabled" name="bst_disabled" disabled />
        </div>
      </div>
    </PageLayout>
  );
};

export default SendKeys;
