import './Header.css';

function Header() {
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
              <a href="http://localhost:3080/" className="toggle">
                My Watched List
              </a>
            </li>
            <li>
              <a href="http://localhost:3080/" className="toggle">
                Account
              </a>
            </li>
            <li>
              <a href="http://localhost:3080/login" className="btn red darken-1 toggle google-btn">
                <i className="fab fa-google left"></i> Log In With Google
              </a>
            </li>
            <li>
              <a href="http://localhost:3080/" className="toggle">
                Logout
              </a>
            </li>
          </ui>
        </div>
    </div>
  );
}

export default Header;
