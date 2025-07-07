import React from 'react';
import PageLayout from '../components/PageLayout';
import styles from '../styles/Checkbox.module.css';

const Checkbox = () => {
  return (
    <PageLayout
      title="☑️ CHECKBOX INTERACTIONS"
      sidebarContent={
        <ul>
          <li>✔ Select multiple skills</li>
          <li>🧠 Check default states</li>
          <li>🎯 Deselect specific options</li>
          <li>🔘 Select all using automation</li>
        </ul>
      }
    >
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Choose Your Options</h2>

        <div className={styles.section}>
          <h4>Languages You Know</h4>
          <div className={styles.checkboxGroup}>
            <label><input type="checkbox" name="java" id="bst_check1" /> JAVA</label>
            <label><input type="checkbox" name="vb" id="bst_check2" /> VB</label>
            <label><input type="checkbox" name="sql" id="bst_check3" /> SQL</label>
            <label><input type="checkbox" name="c" id="bst_check4" /> C</label>
            <label><input type="checkbox" name="c++" id="bst_check5" /> C++</label>
          </div>
        </div>

        <div className={styles.section}>
          <h4>Pre-checked Example</h4>
          <div className={styles.checkboxGroup}>
            <label><input type="checkbox" id="bst_check6" name="bspark" defaultChecked /> BSPARK</label>
          </div>
        </div>

        <div className={styles.section}>
          <h4>Deselect the Selected</h4>
          <div className={styles.checkboxGroup}>
            <label><input type="checkbox" id="bst_check7" name="not_selected" /> NOT SELECTED</label>
            <label><input type="checkbox" id="bst_check8" name="selected"  defaultChecked /> SELECTED</label>
          </div>
        </div>

        <div className={styles.section}>
          <h4>Select All Options</h4>
          <div className={styles.checkboxGroup}>
            {["OPTION 1", "OPTION 2", "OPTION 3", "OPTION 4", "OPTION 5", "OPTION 6"].map((label, i) => (
              <label key={i}>
                <input type="checkbox" id={`bst_${i + 20}`} name={`opt_${i + 1}`} />
                {label}
              </label>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Checkbox;
