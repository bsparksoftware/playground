import React from 'react';
import PageLayout from '../components/PageLayout';
import styles from '../styles/Navigation.module.css';

const Navigation = () => {
  const links = [
    {
      label: "GO TO HOMEPAGE",
      text: "HOMEPAGE",
      href: "https://www.bsparksoftwaretechnologies.com/",
      color: "blue",
      id: "bst_anchor1",
      name: "homepage",
    },
    {
      label: "FIND WHERE I AM SUPPOSED TO GO WITHOUT CLICKING ME",
      text: "FIND ME",
      href: "https://www.bsparksoftwaretechnologies.com/courses",
      color: "deeppink",
      id: "bst_anchor2",
      name: "find",
    },
    {
      label: "VERIFY AM I BROKEN ?",
      text: "AM I BROKEN ?",
      href: "error.html",
      color: "red",
      id: "bst_anchor3",
      name: "broken",
    },
    {
      label: "INTERACT WITH THE SAME LINK",
      text: "HOMEPAGE",
      href: "index",
      color: "darkmagenta",
      id: "bst_anchor4",
      name: "homepage2",
    },
    {
      label: "HOW MANY LINKS ARE AVAILABLE IN THIS PAGE",
      text: "HOW MANY ?",
      href: "#",
      color: "crimson",
      id: "bst_anchor5",
      name: "many",
    },
  ];

  return (
    <PageLayout
      title="🔗 Navigation"
      sidebarContent={
        <div className={styles.sidebar}>
          <label><b><u>CONTENT</u></b></label>
        </div>
      }
    >
      <div className={styles.card}>
        {/* <p className={styles.title}>NAVIGATION</p> */}
        {links.map((link, index) => (
          <div key={index} className={styles.linkBlock}>
            <label htmlFor={link.id}><b>{link.label}</b></label><br />
            <a
              href={link.href}
              style={{ color: link.color }}
              id={link.id}
              name={link.name}
              className={styles.link}
            >
              {link.text}
            </a>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Navigation;
