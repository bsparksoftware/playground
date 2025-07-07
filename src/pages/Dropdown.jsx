import React from 'react';
import PageLayout from '../components/PageLayout';
import styles from '../styles/Dropdown.module.css';

const Dropdown = () => {
  return (
    <PageLayout
      title="📂 DROPDOWN INTERACTIONS"
      sidebarContent={
        <>
          <p>Interact with dropdowns using automation commands:</p>
          <ul>
            <li>Select using index, value or visible text</li>
            <li>Use sendKeys to simulate typing</li>
            <li>Read selected option and default values</li>
            <li>Handle multiple selects</li>
          </ul>
        </>
      }
    >
      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <label><b>SELECT USING INDEX</b></label>
          <select id="bst_select1" name="dropdown1" defaultValue="">
            <option value="" disabled>SELECT TRAINING PROGRAM</option>
            <option value="1">SELENIUM</option>
            <option value="2">APPIUM</option>
            <option value="3">UFT/QTP</option>
            <option value="4">LOADRUNNER</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label><b>MULTIPLE SELECT</b></label>
          <select id="bst_select2" name="dropdown2" multiple className={styles.multiSelect}>
            <option value="1">SELENIUM</option>
            <option value="2">APPIUM</option>
            <option value="3">UFT/QTP</option>
            <option value="4">LOADRUNNER</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label><b>SELECT USING TEXT</b></label>
          <select id="bst_select3" name="dropdown3" defaultValue="">
            <option value="" disabled>SELECT TRAINING PROGRAM</option>
            <option value="1">SELENIUM</option>
            <option value="2">APPIUM</option>
            <option value="3">UFT/QTP</option>
            <option value="4">LOADRUNNER</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label><b>SELECT USING VALUE</b></label>
          <select id="bst_select4" name="dropdown4" defaultValue="">
            <option value="" disabled>SELECT TRAINING PROGRAM</option>
            <option value="1">SELENIUM</option>
            <option value="2">APPIUM</option>
            <option value="3">UFT/QTP</option>
            <option value="4">LOADRUNNER</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label><b>GET NUMBER OF OPTIONS</b></label>
          <select id="bst_select5" name="dropdown5" defaultValue="">
            <option value="" disabled>COUNT OPTIONS</option>
            <option value="1">SELENIUM</option>
            <option value="2">APPIUM</option>
            <option value="3">UFT/QTP</option>
            <option value="4">LOADRUNNER</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label><b>USE SEND KEYS</b></label>
          <select id="bst_select6" name="dropdown6" defaultValue="">
            <option value="" disabled>YOU CAN ALSO USE SEND KEYS</option>
            <option value="1">SELENIUM</option>
            <option value="2">APPIUM</option>
            <option value="3">UFT/QTP</option>
            <option value="4">LOADRUNNER</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label><b>GET DEFAULT TEXT</b></label>
          <select id="bst_select7" name="dropdown7" defaultValue="">
            <option value="" disabled>DEFAULT TEXT</option>
            <option value="1">SELENIUM</option>
            <option value="2">APPIUM</option>
            <option value="3">UFT/QTP</option>
            <option value="4">LOADRUNNER</option>
          </select>
        </div>
      </div>
    </PageLayout>
  );
};

export default Dropdown;
