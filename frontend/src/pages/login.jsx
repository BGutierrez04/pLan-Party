import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>pLan-Party</h1>
        <h2>Welcome Back!</h2>

        <p>Ready to get the party started?</p>

        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
          />

          <button type="button" className="auth-button">
            Login
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}
