import './Navbar.css';

function Navbar() {
  const user = null;

  return (
    <div id="navbar-container">
        <div id="navbar-title">
          <h5>
            watched list
          </h5>
        </div>

        {
          user ?
            <div id="navbar-login-container">
              <ui>
                <li><a href="http://localhost:3000/">My Watched List</a></li>
                <li><a href="http://localhost:3080/">Account</a></li>
                <li><a href="http://localhost:3080/auth/logout">Logout</a></li>
              </ui>
            </div>
          : <li><a href="http://localhost:3000/login">Login</a></li>
        }
    </div>
  );
}

export default Navbar;
