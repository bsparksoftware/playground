import React from 'react';
import PageLayout from '../components/PageLayout';
import styles from '../styles/WindowHandle.module.css';

const WindowHandle = () => {
  const openWin = () => {
    const win = window.open(
      'https://www.bsparksoftwaretechnologies.com/playwright-training-in-chennai',
      '',
      'width=1200,height=600,menubar=no,toolbar=no,scrollbars=no,status=no,resizable=no'
    );
    if (win) {
      win.moveTo(100, 50);
      win.focus();
    }
  };

  const openMultipleWindows = () => {
    window.open(
      'https://www.bsparksoftwaretechnologies.com/',
      '',
      'toolbar=no,menubar=no,location=yes,height=320,width=320,left=1'
    );
    window.open(
      'https://www.bsparksoftwaretechnologies.com/manualtesting-training-in-chennai',
      '',
      'toolbar=yes,menubar=yes,location=no,height=450,width=450,left=430'
    );
  };

  const openWindowsWithWait = () => {
    setTimeout(() => {
      const win1 = window.open(
        'https://www.bsparksoftwaretechnologies.com/java-training-in-chennai',
        '',
        'width=600,height=400,menubar=no,toolbar=no,scrollbars=no,status=no,resizable=no'
      );
      const win2 = window.open(
        'https://www.bsparksoftwaretechnologies.com/aws-training-in-chennai',
        '',
        'width=600,height=400,toolbar=no,menubar=no,scrollbars=no,status=no,resizable=no'
      );
      if (win1) win1.moveTo(50, 50);
      if (win2) win2.moveTo(650, 50);
      if (win1) win1.focus();
    }, 5000);
  };

  const content = [
    'getWindowHandle returns session ID of current window (String)',
    'getWindowHandles returns session IDs of all windows opened by WebDriver (Set<String>)',
    'To switch between windows: driver.switchTo().window("session id")',
    'driver.close() closes the current window (session stays alive)',
    'driver.quit() closes all windows and ends the session',
  ];

  return (
    <PageLayout
      title="🪟 Window Handle"
      sidebarContent={
        <div className={styles.sidebar}>
          <label><b><u>CONTENT</u></b></label>
          <h6 className={styles.heading}>Window Handles - getWindowHandle & getWindowHandles</h6>
          <ul className={styles.list}>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      }
    >
      <div className={styles.container}>
        {/* <p className={styles.title}>WINDOW HANDLE</p> */}
        <div className={styles.buttonGroup}>
          <label><b>Click button to open home page in new window</b></label>
          <button className={`${styles.button} btn btn-light` }id="bst_btn4" name="window1" onClick={openWin}>HOME PAGE</button>

          <label><b>Find the number of opened windows</b></label>
          <button className={`${styles.button} btn btn-warning`} id="bst_btn5" name="window2" onClick={openMultipleWindows}>MULTIPLE WINDOWS</button>

          <label><b>Close all except this screen</b></label>
          <button className={`${styles.button} btn btn-outline-primary`} id="bst_btn6" name="window3"  onClick={openMultipleWindows}>DON'T CLOSE ME</button>

          <label><b>Wait for 5 seconds to open</b></label>
          <button className={`${styles.button} btn btn-success`} id="bst_btn7" name="window4" onClick={openWindowsWithWait}>WAIT FOR 5 SECONDS</button>
        </div>
      </div>
    </PageLayout>
  );
};

export default WindowHandle;
