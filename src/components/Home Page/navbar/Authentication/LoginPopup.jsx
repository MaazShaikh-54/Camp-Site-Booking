// LoginPopup.jsx
import React, { useState } from 'react';
import axios from 'axios';

const LoginPopup = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // Add you logic here to login
    let result = await axios.post('http://localhost:5000/api/login', { email, password })
    console.log('Logging in with:', email, password);
    if (result.status === 200) {
      console.log('Login successful');
    } else {
      console.log('Login failed');
    }
    onClose();
  };

  return (
    <div className={isOpen ? 'popup-overlay' : 'hidden'}>
      <div className="popup">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br/><br/>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
