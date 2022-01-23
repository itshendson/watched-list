import { useEffect, useState } from "react";
import './Navbar.css';

function Navbar() {
  const { user, setUser } = useState();

  useEffect(() => {
    const fetchProfile = async () => {
      const options = {
        method: 'GET'
      }

      const profile = await fetch('http://localhost:3080/profile', options);
      console.log(profile);
    }
    fetchProfile();
  }, []);

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
            <ul>
              <li><a href="http://localhost:3000/mylist">My Watched List</a></li>
              <li><a href="http://localhost:3000/account">Account</a></li>
              <li><a href="http://localhost:3080/auth/logout">Logout</a></li>
            </ul>
          : <li><a href="http://localhost:3000/login" className="login-btn">Login</a></li>
        }
        </div>
    </div>
  );
}

export default Navbar;
