
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

import { FaChrome, FaServer, FaArchive } from 'react-icons/fa';

const Home = () => {
  const tiles = [
    {
      title: 'Web Automation',
      description: 'Automate browser flows using Selenium, Playwright, and Cypress.',
      path: '/web-automation',
       icon: <FaChrome className={styles.tileIcon} />,
    },
    {
      title: 'API Testing',
      description: 'Test APIs with Postman, RestAssured and automate validations.',
      path: '/api-testing',
            icon: <FaServer className={styles.tileIcon} />,
    },
     {
      title: 'Product Management',
      description: 'Test APIs with UI and Manage the Products.',
      path: '/login',
            icon: <FaArchive className={styles.tileIcon} />,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.backgroundAnimation}></div>
      <h2 className={styles.heading}>Welcome to Bspark Software Technologies</h2>
      <div className={styles.tileContainer}>
        {tiles.map((tile, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
          >
            <Link to={tile.path} className={styles.tileLink}>
              <div className={styles.tile}>
                {tile.icon}
                <h4 className={styles.title}>{tile.title}</h4>
                <p className={styles.description}>{tile.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
