import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="section">
      <h2>Watched List</h2>
        <p>Watched List is an app to store your favorite television show, books, anime, and video games. Get started by logging in through Google.</p>
      </div>
      <div className="section">
        <a href="/auth/google" class="btn red darken-1">
          <i class="fab fa-google left"></i> Log In With Google
        </a>
      </div>
    </div>
  );
}

export default Login;
