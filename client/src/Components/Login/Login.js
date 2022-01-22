import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <h2>Watched List</h2>
        <p className='description-box'>Watched List is an application to save your favorite television show, books, anime, and video games. Share your unique link to showcase your watched list. Login to get started.</p>
        <a href="http://localhost:3080/auth/google" class="btn red darken-1">
          <i class="fab fa-google left"></i> Log In With Google
        </a>
    </div>
  );
}

export default Login;
