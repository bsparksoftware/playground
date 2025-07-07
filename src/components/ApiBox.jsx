// src/components/ApiBox.jsx
import React from 'react';
import styles from '../styles/ApiTesting.module.css';

const ApiBox = ({ method, title, onClick }) => {
  return (
    <div className={styles.apiBox} onClick={onClick}>
      <span className={`${styles.badge} ${styles[method.toLowerCase()]}`}>
        {method}
      </span>
      <span className={styles.apiTitle}>{title}</span>
    </div>
  );
};

export default ApiBox;
