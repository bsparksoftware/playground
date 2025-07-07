// src/pages/UsernameInput.jsx
import React, { useState } from 'react';
import styles from '../styles/UsernameInput.module.css';

const UsernameInput = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (username.trim()) {
      setMessage(`Welcome, ${username}!`);
    } else {
      setMessage('Please enter your name.');
    }
  };

  return (
    <div className={styles.frameContainer}>
      <label htmlFor="nameInput" className={styles.label}>ENTER USERNAME</label>
      <input
        type="text"
        id="nameInput"
        name='lname'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Your name here"
        className={styles.input}
      />
      <button onClick={handleSubmit} className={styles.button} id="bst_btn" name='submit'>Submit</button>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default UsernameInput;
