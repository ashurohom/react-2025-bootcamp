import React, { useState } from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react"; // using icons

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in with Email: ${email}`);
  };

  return (
    <div className="signin-container">
      {/* Left Section */}
      <div className="signin-left">
        <h1>Welcome Back!</h1>
        <p>
          Login to continue exploring amazing content and managing your account.
        </p>
      </div>

      {/* Right Section - Form */}
      <div className="signin-right">
        <form className="signin-form" onSubmit={handleSubmit}>
          <h2>Sign In</h2>

          {/* Email */}
          <div className="input-group">
            <Mail className="icon" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <Lock className="icon" />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Button */}
          <button type="submit" className="signin-btn">
            Login
          </button>

          <p className="extra-link">
            Don’t have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signin;
        