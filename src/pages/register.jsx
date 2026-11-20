import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>pLan-Party</h1>
        <h2>Create Your Account</h2>

        <p>Your next gaming session starts here!</p>

        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Choose a username" />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Create a password"
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
          />

          <button type="button" className="auth-button">
            Create Account
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}
