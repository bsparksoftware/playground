import React from 'react';
import styles from '../styles/ApiTesting.module.css';

const RequestBlock = ({ endpoint }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(endpoint.url);
    alert("Copied to clipboard!");
  };

  return (
    <div className={styles.requestBlock}>
      <div className={styles.metaBox}>
        <div>
          <strong>Request URL:</strong>
          <div className={styles.requestURL}>
            <code>{endpoint.url}</code>
            <button onClick={copyToClipboard} className={styles.copyBtn}>📋</button>
          </div>
        </div>

        {endpoint.method && (
          <div>
            <strong>Method:</strong> <span className={styles.status}>{endpoint.method}</span>
          </div>
        )}
      </div>

      {endpoint.body && (
        <div className={styles.responseBox}>
          <strong>Example Input Body:</strong>
          <pre>{JSON.stringify(endpoint.body, null, 2)}</pre>
        </div>
      )}

      {endpoint.example && (
        <div className={styles.responseBox}>
          <strong>Example Response:</strong>
          <pre>{JSON.stringify(endpoint.example, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default RequestBlock;
