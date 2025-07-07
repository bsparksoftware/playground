// src/components/PageLayout.jsx
import React from 'react';
import layoutStyles from '../styles/PageLayout.module.css';

const PageLayout = ({ title, sidebarContent, children }) => {
  return (
    <div className={layoutStyles.layout}>
      <div className={layoutStyles.main}>
        <div className={layoutStyles.card}>
          {title && <h2 className={layoutStyles.heading}>{title}</h2>}
          {children}
        </div>
      </div>

      {sidebarContent && (
        <div className={layoutStyles.sideInfo}>
          <div className={layoutStyles.card}>
            <h4>📘 CONTENT</h4>
            {sidebarContent}
          </div>
        </div>
      )}
    </div>
  );
};

export default PageLayout;



// import React from 'react';
// import styles from '../styles/PageLayout.module.css';

// const PageLayout = ({ title, children, sidebarContent }) => {
//   return (
//     <div className={styles.layout}>
//       <div className={styles.main}>
//         <div className={styles.card}>
//           {title && <h2 className={styles.heading}>{title}</h2>}
//           {children}
//         </div>
//       </div>
//       <div className={styles.sideInfo}>
//         <div className={styles.card}>
//           <h4><u>📘 CONTENT</u></h4>
//           {sidebarContent}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PageLayout;
