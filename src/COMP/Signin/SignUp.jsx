import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
   
    <div className="d-grid align-items-center mt-5 ">
      <div className=" max-w-sm mx-auto">
        <div className="mb-4">
          <h2 className="display-5 fw-normal">Sign Up</h2>
          <p className="text-muted">Enter your Name, email and password to create a new account</p>
        </div>
        <form className="mb-4">
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
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
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>
      
      </div>
    </div>
  );
}

export default SignUp;
