import React, { useState } from 'react';
//import axios from 'axios';

const SignupPopup = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      //let result = await axios.post('http://localhost:5000/api/register', { email, password });
      console.log('Signing up with:', email, password);
      onClose(); // Close the popup only if signup is successful
      setEmail(''); // Reset email field
      setPassword(''); // Reset password field
    } catch (error) {
      setError(error.response.data.message); // Display error message
    }
  };

  return (
    <div className={isOpen ? 'popup-overlay' : 'hidden'}>
      <div className="popup">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Sign Up</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSignup}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br /><br />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPopup;
