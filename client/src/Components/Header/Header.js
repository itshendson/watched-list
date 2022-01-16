import './Header.css';

function Header() {
  return (
    <div id="header-container">
        <div className="header-title">watched list</div>
        <div className="login-container">
          <button type="button">Login</button>
        </div>
    </div>
  );
}

export default Header;
