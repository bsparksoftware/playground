import React, { useState } from 'react';
import styles from '../styles/ButtonFrame.module.css';

const ButtonFrame = () => {
  const [name, setName] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const handleSubmit = () => {
    const trimmedName = name.trim();
    if (trimmedName) {
      setWelcomeMessage(`Hello ${trimmedName}, Welcome to Bspark`);
    } else {
      setWelcomeMessage('Please enter your name.');
    }
  };

  return (
    <div className={styles.frameContainer}>
      <label htmlFor="username" className={styles.label}>
        ENTER YOUR NAME
      </label>
      <input
        type="text"
        id="username"
        name = "username"
        placeholder="Type your name here"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
      />
      <button onClick={handleSubmit} className={styles.button} id="bst_submitbtn" name='submit'>
        Submit
      </button>
      <p className={styles.message}>{welcomeMessage}</p>
    </div>
  );
};

export default ButtonFrame;
