import React, { useState } from 'react';
import Layout from '../components/PageLayout';
import styles from '../styles/TextAttribute.module.css';

const TextAttribute = () => {
  const [text, setText] = useState('BSPARK');
  const [submittedText, setSubmittedText] = useState('');

  const handleSubmit = () => {
    setSubmittedText(text.trim());
  };

  return (
    <Layout>
      <div className={styles.container}>
        
          {/* Main Section */}
       
            <div className={styles.card}>
              <h1 className={styles.title} id="bst_h1">Welcome to <span>Bspark Software Technologies</span></h1>

              <p id="bst_p1" className={styles.question}>What is your name?</p>

              <input
                type="text"
                name = "fname"
                id="bst_input"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className={styles.input}
              />

              <button onClick={handleSubmit} className={styles.button} id="bst_btn_1" name="submit">
                Submit
              </button>
         <p className={styles.output}>{submittedText && `Hello, ${submittedText}!`}</p>
              <div className={styles.websiteSection}>
                <h4 id="bst_h4">Also Visit Our Website</h4>
                <h3 id="bst_h">Bspark Software Technologies</h3>
                <a
                  href="https://www.bsparksoftwaretechnologies.com/"
                  target="_blank"
                  rel="noreferrer"
                  id="bst_anchor2"
                  className={styles.readMore}
                >
                  Read More
                  
                </a>
                     
              </div>
            </div>
          </div>

       
        
   
    </Layout>
  );
};

export default TextAttribute;
