import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import styles from '../styles/Alert.module.css';


const Alerts = () => {
  const [confirmResult, setConfirmResult] = useState('');
  const [promptResult, setPromptResult] = useState('');

  const normalAlert = () => {
    alert("I AM AN ALERT BOX !");
  };

  const confirmAlert = () => {
    let message;
    if (window.confirm("PRESS A BUTTON!")) {
      message = "YOU PRESSED OK!";
    } else {
      message = "YOU PRESSED CANCEL!";
    }
    setConfirmResult(message);
  };

  const confirmPrompt = () => {
    const person = window.prompt("PLEASE ENTER YOUR NAME", "BSPARK");
    if (person !== null) {
      if (person !== "BSPARK") {
        setPromptResult(`YOU SHOULD HAVE ENJOYED LEARNING AT ${person} RIGHT ?`);
      } else {
        setPromptResult(`YOU SHOULD HAVE ENJOYED LEARNING AT ${person}.`);
      }
    }
  };

  const lineBreaks = () => {
    alert("HELLO\nHOW ARE YOU DOING TODAY ?");
  };

  return (
    <PageLayout
      title="🔔 JAVASCRIPT ALERTS"
      sidebarContent={
        <>
          <h5><u>Content</u></h5>
          <p><strong>JavaScript Alerts:</strong> accept, dismiss, sendKeys & getText</p>
          <ul>
            <li>Use <code>accept()</code> to accept the alert</li>
            <li>Use <code>dismiss()</code> to cancel the alert</li>
            <li>Use <code>sendKeys()</code> to type in prompt</li>
            <li>Use <code>getText()</code> to read the alert text</li>
          </ul>
          <p><strong>Sweet Alerts:</strong> Treated like normal elements (use <code>click()</code>)</p>
        </>
      }
    >
      <div className={styles.row}>
        <div className={styles.col}>
          <label><b>CLICK TO DISPLAY ALERT</b></label><br />
          <button className="btn btn-outline-primary mt-2" id = "bst_alert1" name="display_alert" onClick={normalAlert}>HIT ME</button>
        </div>

        <div className={styles.col}>
          <label><b>CLICK TO DISPLAY CONFIRM BOX</b></label><br />
          <button className="btn btn-outline-info mt-2" id = "bst_alert2" name="display_confirm" onClick={confirmAlert}>HIT ME</button>
          <p className="mt-2">{confirmResult}</p>
        </div>

        <div className={styles.col}>
          <label><b>CLICK TO DISPLAY PROMPT BOX</b></label><br />
          <button className="btn btn-outline-secondary mt-2" id = "bst_alert3" name="display_prompt" onClick={confirmPrompt}>HIT ME</button>
          <p className="mt-2">{promptResult}</p>
        </div>

        <div className={styles.col}>
          <label><b>CLICK TO LEARN LINE-BREAKS IN ALERT</b></label><br />
          <button className="btn btn-outline-dark mt-2" id = "bst_alert4" name="display_break" onClick={lineBreaks}>HIT ME</button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Alerts;
