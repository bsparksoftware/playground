import React, { useState } from 'react';
import styles from '../styles/Sidebar.module.css';
import { NavLink } from 'react-router-dom';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';

import { FaKeyboard, FaMousePointer, FaCaretDown, FaDotCircle, FaCheckSquare, FaBell, FaTable, FaWindowRestore, FaLocationArrow, FaCamera, FaCodeBranch, FaRunning, FaLayerGroup, FaFont } from 'react-icons/fa';


const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

const items = [
  { path: '/send_keys', label: 'TEXT', icon: <FaKeyboard /> },
  { path: '/buttons', label: 'BUTTONS', icon: <FaMousePointer /> },
  { path: '/dropdown', label: 'DROPDOWN', icon: <FaCaretDown /> },
  { path: '/radio', label: 'RADIOBUTTON', icon: <FaDotCircle /> },
  { path: '/checkbox', label: 'CHECKBOX', icon: <FaCheckSquare /> },
  { path: '/alert', label: 'ALERT', icon: <FaBell /> },
  { path: '/webtable', label: 'WEBTABLE', icon: <FaTable /> },
  { path: '/windowhandle', label: 'WINDOWS HANDLE', icon: <FaWindowRestore /> },
  { path: '/navigation', label: 'NAVIGATION', icon: <FaLocationArrow /> },
  { path: '/screenshot', label: 'SCREENSHOT', icon: <FaCamera /> },
  { path: '/condition', label: 'CONDITION', icon: <FaCodeBranch /> },
  { path: '/actionclass', label: 'ACTION CLASS', icon: <FaRunning /> },
  { path: '/frames', label: 'FRAMES', icon: <FaLayerGroup /> },
  { path: '/text_attribute', label: 'TEXT AND ATTRIBUTE', icon: <FaFont /> },
  { path: '/validate', label: 'FORM VALIDATION', icon: <FaWindowRestore /> }
];
  return (
    <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <button className={styles.toggleBtn} onClick={toggleSidebar}>
        {collapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
      </button>

      <div className={styles.menu}>
        {items.map((item, index) => (
        <NavLink
  key={index}
  to={item.path}
  className={({ isActive }) =>
    `${styles.link} ${isActive ? styles.active : ''}`
  }
>
  <div className={styles.iconLabel}>
    <span className={styles.icon}>{item.icon}</span>
    {!collapsed && <span>{item.label}</span>}
  </div>
</NavLink>

        ))}
      </div>
    </div>
  );
};

export default Sidebar;
