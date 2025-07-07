import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css'; // Already styled

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMsg('All fields are required');
      return;
    }

    setLoading(true); // Start loading

    setTimeout(() => {
      if (username === 'admin' && password === 'admin') {
        navigate('/product-management');
      } else {
        setErrorMsg('Invalid username or password');
        setLoading(false); // Stop loading on error
      }
    }, 1000); // Simulate async login delay
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Admin Login</h2>
        {errorMsg && <p className="error">{errorMsg}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          disabled={loading}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? <div className="spinner"></div> : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
