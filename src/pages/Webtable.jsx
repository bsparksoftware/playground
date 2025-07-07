import React from 'react';
import PageLayout from '../components/PageLayout';
import styles from '../styles/Webtable.module.css';

const Webtable = () => {
  const employees = [
    { id: '#123', name: 'MURUGAN', role: 'ADMIN', salary: '16,000/-', dept: '#3840', email: 'MURUGAN@TESTBSPARK.COM' },
    { id: '#345', name: 'RAJA', role: 'TECH SUPPORT', salary: '20,000/-', dept: '#3072', email: 'RAJA@TESTBSPARK.COM' },
    { id: '#567', name: 'BALAJI', role: 'ADMIN', salary: '16,000/-', dept: '#3840', email: 'BALAJI@TESTBSPARK.COM' },
    { id: '#789', name: 'TAMIL', role: 'HR', salary: '27,000/-', dept: '#3056', email: 'TAMIL@TESTBSPARK.COM' },
    { id: '#901', name: 'VIKRAM', role: 'TECH SUPPORT', salary: '20,000/-', dept: '#3072', email: 'VIKRAM@TESTBSPARK.COM' },
  ];

  const contentPoints = [
    'GET THE COUNT OF NUMBER OF COLUMN',
    'GET THE COUNT OF NUMBER OF ROWS',
    'GET THE EMPLOYEE ID OF TAMIL',
    'GET THE JOB ROLE OF RAJA',
    'GET THE STATUS OF MURUGAN',
  ];

  return (
    <PageLayout
      title="📊 EMPLOYEE WEBTABLE"
      sidebarContent={
        <div className={styles.sidebarContent}>
          <label><b><u>CONTENT</u></b></label>
          <ul>
            {contentPoints.map((text, i) => (
              <li key={'content' + i}>{text}</li>
            ))}
          </ul>

          <label><b><u>TASKS</u></b></label>
          <ul>
            {contentPoints.map((text, i) => (
              <li key={'task' + i}>{text}</li>
            ))}
          </ul>
        </div>
      }
    >
      <div className={styles.card}>
        {/* <p className={styles.heading}>WEBTABLE</p> */}
        <div className={`table-responsive ${styles.tableWrapper}`}>
          <table className={`table table-bordered table-hover ${styles.table}`}>
            <thead>
              <tr>
                <th>EMPLOYEE ID</th>
                <th>NAME</th>
                <th>JOB ROLE</th>
                <th>SALARY</th>
                <th>DEPARTMENT ID</th>
                <th>EMAIL</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, index, i) => (
                <tr key={index}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.role}</td>
                  <td>{emp.salary}</td>
                  <td>{emp.dept}</td>
                  <td>{emp.email}</td>
                  <td><input type="checkbox" name="active" id={`active`} /> ACTIVE</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageLayout>
  );
};

export default Webtable;

