import './Header.css';

function Header() {
  const user = true;

  return (
    <div id="header-container">
        <div id="header-title">
          <h5>
            watched list
          </h5>
        </div>

        {
          user ?
            <div id="header-login-container">
              <ui>
                <li><a href="http://localhost:3080/">My Watched List</a></li>
                <li><a href="http://localhost:3080/">Account</a></li>
                <li><a href="http://localhost:3080/auth/logout">Logout</a></li>
              </ui>
            </div>
          : <li><a href="http://localhost:3080/auth/google" className="btn red darken-1"><i className="fab fa-google left"></i> Log In With Google</a></li>
        }
    </div>
  );
}

export default Header;
