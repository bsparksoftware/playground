import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import styles from '../styles/Condition.module.css';

const Condition = () => {
  const [gender, setGender] = useState('Male');
  const [message, setMessage] = useState('');

  const normalAlert = () => {
    setMessage(`You selected: ${gender}`);
  };

  return (
    <PageLayout
      title="🔎 Condition"
      sidebarContent={
        <div className={styles.sidebar}>
          <label><b><u>CONTENT</u></b></label>
          <h6 className={styles.heading}>WebElement conditions - isDisplayed, isEnabled, isSelected</h6>
          <p className={styles.info}>1. <strong>isDisplayed</strong> checks if an element is present on the webpage. Returns <code>boolean</code>. Use Try-Catch for safety.</p>
          <p className={styles.info}>2. <strong>isEnabled</strong> checks if an element is enabled on the webpage. Returns <code>boolean</code>.</p>
          <p className={styles.info}>3. <strong>isSelected</strong> checks if a radio or checkbox is selected. Returns <code>boolean</code>.</p>
        </div>
      }
    >
      <div className={styles.container}>
        {/* <p className={styles.title}>CONDITION</p> */}
<button className="btn btn-dark mb-4 disabledButton" id="bst_disbtn" disabled>
  Disabled button
</button>


        <label className={styles.label}><b>GENDER</b></label>
           <div className={styles.gender}>
        <div className={styles.gender}>
          <input
            className="form-check-input gender_label"
            type="radio"
            name="gender"
            id="genderMale"
            checked={gender === 'Male'}
            onChange={() => setGender('Male')}
          />
          <label className="form-check-label" htmlFor="genderMale">
            Male
          </label>
        </div>

        <div className={styles.gender}>
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="genderFemale"
            checked={gender === 'Female'}
            onChange={() => setGender('Female')}
          />
          <label className="form-check-label" htmlFor="genderFemale">
            Female
          </label>
        </div>
</div>
        <button type="button" className={styles.animatedBtn} id="bst_btn" onClick={normalAlert}>
          Button
        </button>

        <h1 className={styles.message}>{message}</h1>
      </div>
    </PageLayout>
  );
};

export default Condition;
