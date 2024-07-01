import React from 'react';
import LoginPopup from './LoginPopup';
import SignupPopup from './SigninPopup';
import { useState } from 'react';

const PopupContainer = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const openLoginPopup = () => {
    setIsLoginOpen(true);
    setIsSignupOpen(false);
  };

  const openSignupPopup = () => {
    setIsSignupOpen(true);
    setIsLoginOpen(false);
  };

  const closePopups = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(false);
  };

  return (
    <div>
      <div className="app">
            <nav>
              <button onClick={openLoginPopup}>Login</button>
              <button onClick={openSignupPopup}>Signup</button>
            </nav>
            {isLoginOpen && <LoginPopup onClose={closePopups} />}
            {isSignupOpen && <SignupPopup onClose={closePopups} />}
          </div>
    </div>
  );
};

export default PopupContainer;
