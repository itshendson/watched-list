import { useState } from 'react';
import './Header.css';

function Header() {
  const [loggedIn, setLoggedIn] = useState('false');

  const toggleDisplayNone = {
    display: ""
  }

  return (
    <div id="header-container">
        <div id="header-title">
          <h5>
            watched list
          </h5>
        </div>
        <div id="header-login-container">
          <ui>
            <li>
              <a href="http://localhost:3080/" style={toggleDisplayNone} className="toggle">
                My Watched List
              </a>
            </li>
            <li>
              <a href="http://localhost:3080/" style={toggleDisplayNone} className="toggle">
                Account
              </a>
            </li>
            <li>
              <a href="http://localhost:3080/login" style={toggleDisplayNone} className="btn red darken-1 toggle google-btn">
                <i className="fab fa-google left"></i> Log In With Google
              </a>
            </li>
            <li>
              <a href="http://localhost:3080/auth/logout" style={toggleDisplayNone} className="toggle">
                Logout
              </a>
            </li>
          </ui>
        </div>
    </div>
  );
}

export default Header;
