import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import RequestBlock from '../components/RequestBlock';
import styles from '../styles/ApiTesting.module.css';

const API_BASE_URL = 'https://api.bsparksoftwaretechnologies.com';

const endpoints = [
  {
    method: 'GET',
    label: 'Get All Users',
    url: `${API_BASE_URL}/api/users`,
    statusCode: 200,
    example: [
      { id: 1, name: "John", email: "john@example.com", number: "1234567890" },
      { id: 2, name: "Jane", email: "jane@example.com", number: "9876543210" }
    ]
  },
  {
    method: 'GET',
    label: 'Get Single User',
    url: `${API_BASE_URL}/api/users/1`,
    statusCode: 200,
    example: { id: 1, name: "John", email: "john@example.com", number: "1234567890" }
  },
  {
    method: 'POST',
    label: 'Create User',
    url: `${API_BASE_URL}/api/users`,
    statusCode: 201,
    body: {
      name: "Alice",
      email: "alice@example.com",
      number: "1112223333"
    },
    example: {
      message: "User created successfully",
      id: 3
    }
  },
  {
    method: 'PUT',
    label: 'Update User',
    url: `${API_BASE_URL}/api/users/1`,
    statusCode: 200,
    body: {
      name: "Alice Updated",
      email: "alice@newmail.com",
      number: "4445556666"
    },
    example: {
      message: "User updated successfully"
    }
  },
  {
    method: 'DELETE',
    label: 'Delete User',
    url: `${API_BASE_URL}/api/users/1`,
    statusCode: 200,
    example: {
      message: "User deleted successfully"
    }
  }
];

const ApiTesting = () => {
  const [selected, setSelected] = useState(null);

  const sidebarContent = (
    <div className={styles.instructionsBox}>
      <h4>📘 How to Use</h4>
      <ul className={styles.tips}>
        <li><strong>Base URL:</strong> <code>{API_BASE_URL}</code></li>
        <li><strong>Endpoints:</strong> <code>/api/users</code></li>
        <li>Use <strong>GET</strong> to retrieve all users or a specific user with an ID.</li>
        <li><strong>POST</strong> requires a JSON body like:
          <pre>
{`{
  "name": "Alice",
  "email": "alice@example.com",
  "number": "1234567890"
}`}
          </pre>
        </li>
        <li><strong>PUT</strong> and <strong>DELETE</strong> must include the <code>/id</code> in the URL.</li>
        <li>Use <strong>Postman</strong> or browser DevTools → Network tab to test.</li>
        <li>Expect response status codes like <code>200</code>, <code>201</code>, etc. shown beside each endpoint.</li>
      </ul>
    </div>
  );

  return (
    <PageLayout title="🧪 API TESTING DEMO" sidebarContent={sidebarContent}>
      <div className={styles.apiWrapper}>
        <div className={styles.sidebar}>
          {endpoints.map((ep, idx) => (
            <button
              key={idx}
              className={`${styles.endpointBtn} ${selected === ep ? styles.active : ''}`}
              onClick={() => setSelected(ep)}
            >
              <span className={styles.method}>{ep.method}</span> {ep.label}
            </button>
          ))}
        </div>

        <div className={styles.output}>
          {selected ? (
            <RequestBlock endpoint={selected} />
          ) : (
            <p className={styles.instructions}>← Select an endpoint to view details</p>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default ApiTesting;
