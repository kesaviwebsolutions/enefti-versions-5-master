import React from "react";
import "./Navbar.css";
import Navimage from "../Images/logo.svg";

export default function Navbar() {
  return (
    <section className="nav-section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={Navimage} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ background: "#fff" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    How to Buy
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    How to Redeem
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Roadmap
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Socials
                  </a>
                </li>
              </ul>
              {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn-2" type="submit">
                  Sign Up
                </button>
              </form> */}
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
