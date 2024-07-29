import React, { useEffect, useState } from "react";
import "./nav.css";
import { Link, useLocation } from "react-router-dom";
import Searchbar from "./search";

function Navb({ cart }) {
  const location = useLocation();
  // State to manage the open/closed state of the navbar
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle the navbar open/close state
  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar bgnav">
        {/* Navbar Brand */}
        <div className="d-flex ">
          <Link className="navbar-brand fw-bold fs-4" to="/">
            SHOPPIES
          </Link>
          <span className="d-sm-block d-none mt-1">
            <Searchbar />
          </span>
        </div>

        <div className="d-flex">
          {/* Sign in/up */}
          <Link to="/Signin" className="btn btn-light">
            Sign In/Up
          </Link>

          {/* Shopping Cart Button and Quantity */}
          <div className="position-relative float-end me-2 ms-1">
            <div className="d-flex position-relative">
              <Link to="/Cart" className="btn btn-light">
                🛒
              </Link>
              <p className="para">{cart.length}</p>
            </div>
          </div>

          {/* Navbar Dropdown */}
          <div className="dropdown me-3">
            <button
              className="btn btn-light"
              type="button"
              onClick={handleToggleNav}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className=" position-absolute"
              style={{ top: "60px", right: "160px" }}
            >
              <div className={`dropdown-menu    ${isNavOpen ? " show" : ""}`}>
                <Link to="/" className="dropdown-item ">
                  Home
                </Link>
                <Link className="dropdown-item " to="Profile">
                  Profile
                </Link>
                <Link className="dropdown-item " to="#">
                  Your Order
                </Link>
                <Link className="dropdown-item " to="ContactUs">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Searchbar for small screens */}
      <div className="d-block d-sm-none w-100">
        <Searchbar />
      </div>
    </>
  );
}

export default Navb;
