import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import styles from '../styles/Screenshot.module.css';

const Screenshot = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = () => {
    // You can later add validation or logging logic here
    window.location.href = 'https://www.bsparksoftwaretechnologies.com/';
  };

  return (
    <PageLayout
      title="📸 Screenshot"
      sidebarContent={
        <div className={styles.sidebar}>
          <label><b><u>CONTENT</u></b></label>
        </div>
      }
    >
      <div className={styles.wrapper}>
        {/* <p className={styles.title}>SCREENSHOT</p> */}
        <div className={styles.loginCard}>
          <label htmlFor="user_name"><b>USERNAME</b></label>
          <input
            type="text"
            className="form-control"
            id="user_name"
            name = "username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><br />
          <label htmlFor="password"><b>PASSWORD</b></label>
          <input
            type="password"
            className="form-control"
            id="password"
            name = "password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br />
          <button className={`btn btn-outline-primary ${styles.signinButton}`} id = "bst_btn" onClick={handleSignin}>
            <strong>sign in</strong>
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Screenshot;
