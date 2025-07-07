import React from 'react';
import PageLayout from '../components/PageLayout';
import styles from '../styles/Frames.module.css';

const Frames = () => {
  return (
    <PageLayout
      title="🖼️ FRAMES"
      sidebarContent={
        <div>
          <label><b><u>CONTENT</u></b></label>
        </div>
      }
    >
      <div className={styles.frameGrid}>
        {/* Frame Section */}
        <div className={styles.frameBox}>
          <h2 className={styles.frameTitle}>Frame</h2>
         <iframe
  src="/button-frame"
  id = "bst_frame1"
  title="Button Frame"
  name="frame1"
  width="100%"
  height="300"
  className={styles.iframe}
>

            Sorry, if not displayed.
          </iframe>
        </div>

        {/* Nested Frame Section */}
       <div className={styles.frameBox}>
  <h2 className={styles.frameTitle}>Nested Frame</h2>
  <iframe
    src="/username-frame"
    id = "bst_frame2"
    title="Nested Frame"
    name="frame2"
    width="100%"
    height="300"
    className={styles.iframe}
  >
    Sorry, iframe not supported.
  </iframe>
</div>
      </div>
    </PageLayout>
  );
};

export default Frames;
