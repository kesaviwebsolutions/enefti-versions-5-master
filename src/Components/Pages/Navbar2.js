import React from "react";
import "./Navbar2.css";
import { FaBars } from "react-icons/fa";

function Navbar2() {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg"
        style={{ backgroundColor: "black !important" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            {" "}
            <img
              src="https://cdn2.bttcdn.com/2e4add5483abf2ff/e2bc39a2d59c627c24ff83406d75d1a6.png"
              alt=""
              width="150px"
            />
          </a>
          <a
            class="btn btn-primary icon-fa"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            <FaBars />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Trade
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Wallet
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link ">Orders</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ">IEO</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ">GC Group</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ">Featured Press</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ">GCex Spot Trading</a>
              </li>
            </ul>
            <button className="button-nav1">LOGIN</button>
            <button className="button-nav2">REGISTER</button>
          </div>
        </div>
      </nav>
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            id="button-reset1"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div class="dropdown mt-3">
            <div className="offcanvas-button">
              <button className="offcanvas-button2">TRADE</button>
            </div>
            <div className="offcanvas-button">
              <button className="offcanvas-button2">WALLET</button>
            </div>
            <div className="offcanvas-button">
              <button className="offcanvas-button2">ORDERS</button>
            </div>
            <div className="offcanvas-button">
              <button className="offcanvas-button2">IEO</button>
            </div>
            <div className="offcanvas-button">
              <button className="offcanvas-button2">GC GROUP</button>
            </div>
            <div className="offcanvas-button">
              <button className="offcanvas-button2">FEATERED PRESS</button>
            </div>
            <div className="offcanvas-button">
              <button className="offcanvas-button2">GCEX SPOT TRADING</button>
            </div>
            <div className="offcanvas-button">
              <button className="offcanvas-button2">NOTIFICATIONS</button>
            </div>
            <div className="offcanvas-button">
              <button className="offcanvas-button2">SETTINGS</button>
            </div>
            <div className="offcanvas-button">
              <button className="offcanvas-button2">LOGIN</button>
            </div>
            <div className="offcanvas-button">
              <button className="offcanvas-button2">REGISTER</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar2;
