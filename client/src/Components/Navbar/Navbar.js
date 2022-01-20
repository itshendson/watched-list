import './Navbar.css';

function Navbar() {
  const user = true;

  return (
    <div id="navbar-container">
        <div id="navbar-title">
          <h5>
          <a href="http://localhost:3000/">watched list</a>
          </h5>
        </div>

        <div id="navbar-menu">
        {
          user ?
            <ui>
              <li><a href="http://localhost:3000/">My Watched List</a></li>
              <li><a href="http://localhost:3080/">Account</a></li>
              <li><a href="http://localhost:3080/auth/logout">Logout</a></li>
            </ui>
          : <li><a href="http://localhost:3000/login" className="login-btn">Login</a></li>
        }
        </div>
    </div>
  );
}

export default Navbar;
