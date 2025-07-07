// src/components/ResponseBox.jsx
import React from 'react';
import styles from '../styles/ApiTesting.module.css';

const ResponseBox = ({ method, request, response }) => {
  const isPost = method === 'POST';

  return (
    <div className={styles.responseWrapper}>
      <div className={styles.box}>
        <strong>Example {isPost ? 'Payload (POST)' : 'Request'}</strong>
        <pre className={styles.preText}>{request}</pre>
      </div>

      {!isPost && (
        <div className={styles.box}>
          <strong>Response</strong>
          <pre className={styles.preText}>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ResponseBox;
