import React from 'react';
import PageLayout from '../components/PageLayout';
import styles from '../styles/Radio.module.css';

const Radio = () => {
  return (
    <PageLayout
      title="📻 RADIO INTERACTIONS"
      sidebarContent={
        <ul>
          <li>✅ Handle multiple radio groups independently</li>
          <li>🔘 Use <b>checked</b> to set default</li>
          <li>📋 Useful in forms & decision trees</li>
        </ul>
      }
    >
      <div className={styles.container}>
        <div className={styles.inputGroup}>
          <label><b>ARE YOU ENJOYING THE CLASS?</b></label>
          <div className={styles.radioGroup}>
            <input type="radio" name="radio1" id="yes" value="yes" />
            <label htmlFor="yes">Yes</label>
            <input type="radio" name="radio2" id="no" value="no" />
            <label htmlFor="no">No</label>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label><b>DEFAULT SELECTED RADIO</b></label>
          <div className={styles.radioGroup}>
            <input type="radio" name="default" id="unchecked" value="0" />
            <label htmlFor="unchecked">Unchecked</label>
            <input type="radio" name="default" id="checked" value="1" defaultChecked />
            <label htmlFor="checked">Checked</label>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label><b>Select your age group</b></label>
          <div className={styles.radioGroup}>
            <input type="radio" name="age" id="age1" value="0" />
            <label htmlFor="age1">1 - 20 years</label>
            <input type="radio" name="age" id="age2" value="1" defaultChecked />
            <label htmlFor="age2">21 - 40 years</label>
            <input type="radio" name="age" id="age3" value="2" />
            <label htmlFor="age3">Above 40 years</label>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Radio;
