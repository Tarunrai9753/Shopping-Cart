import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Signin({ email, setEmail, password, setPassword }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "ayushyadav9990@gmail.com" && password === "Ayush@123") {
      
    } else {
      alert("Invalid Email or Password");
    }
  };

  useEffect(() => {
    return () => {
      setEmail("");
      setPassword("");
    };
  }, []);

  return (
    <div className="d-grid align-items-center mt-5 px-4">
      <div className="max-w-sm mx-auto">
        <div className="mb-4">
          <h2 className="display-5 fw-normal">Sign In</h2>
          <p className="text-muted">
            Enter your email and password to access your account
          </p>
        </div>
        <form className="mb-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Link to={email === "ayushyadav9990@gmail.com" && password === "Ayush@123"?'/':''} type="submit" className="btn btn-primary w-100">
            Sign In
          </Link>
        </form>
        <footer className="text-center">
          <p className="text-muted">
            Don't have an account?{" "}
            <Link to="/SignUp" className="text-decoration-none">
              Sign Up
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Signin;
