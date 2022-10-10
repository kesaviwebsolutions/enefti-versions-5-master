import React from "react";
import "./Footer.css";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <section
      style={{ background: "#000000", color: "#fff" }}
      className="footer-section"
      id="footer"
    >
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="footer-address-area">
              <h4>Our Address</h4>
              <p>
                {" "}
                XYZ abc malaysia, MY 1233 City name, MA 90896 SA.
                contact@example.com
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="footer-address-area">
              <h4>Useful Links</h4>
              <ul className="usefullinks">
                <li>
                  <a href="/">Collectibles</a>
                </li>
                <li>
                  <a href="/">Photography</a>
                </li>
                <li>
                  <a href="/">Trading Cards</a>
                </li>
                <li>
                  <a href="/">Virtual Worlds</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="footer-sociallinks">
              <div className="fsl">
                <BsDiscord size={28} className="mx-4" />
                <BsTwitter size={28} className="mx-4" />
                <FaFacebookF size={28} className="mx-4" />
                <FaLinkedinIn size={28} className="mx-4" />
                <FaInstagramSquare size={28} className="mx-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <div className="container-fluid py-2 footer2">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <p className="footer-para-1 py-3">
                Copyright by ModelTheme. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <p className="footer-para py-3">Elite Author on ThemeForest.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
