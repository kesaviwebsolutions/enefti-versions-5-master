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
      <div className="container-fluid footer-bot">
        <div className="row footer">
          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            <h4 className="head1">Our Address</h4>
            <p className="para-1">
              4 Grand Central Terminal New York, NY 10 City name, CA 90896 USA.
              contact@example.com
            </p>
            <div className="footer-social-media">
              <ul className="ul-footer-icons">
                <li className="footer-icons">
                  <BsDiscord />
                </li>
                <li className="footer-icons">
                  <FaFacebookF />
                </li>
                <li className="footer-icons">
                  <BsTwitter />
                </li>
                <li className="footer-icons">
                  <FaLinkedinIn />
                </li>
                <li className="footer-icons">
                  <FaInstagramSquare />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            <h5 className="head2">Useful Links</h5>
            <div>
              <ul id="menu-marketplace" className="menu">
                <li
                  id="menu-item-6029"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6029"
                >
                  <a href="https://enefti.modeltheme.com/product-category/avid-lines/">
                    Collectibles
                  </a>
                </li>
                <li
                  id="menu-item-6030"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6030"
                >
                  <a href="https://enefti.modeltheme.com/product-category/azuki/">
                    <i className="fas fa-angle-double-right">Photography</i>
                  </a>
                </li>
                <li
                  id="menu-item-6031"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6031"
                >
                  <a href="https://enefti.modeltheme.com/product-category/chimera-by-mpkoz/">
                    Trading Cards
                  </a>
                </li>
                <li
                  id="menu-item-6547"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6547"
                >
                  <a href="https://enefti.modeltheme.com/product-category/coolmans-universe/">
                    Virtual Worlds
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            <h5 className="head3">Our Policy</h5>
            <div>
              <ul>
                <li className="para-1">Help Center</li>
                <li className="para-1">My Collections</li>
                <li className="para-1">Platform Status</li>
                <li className="para-1">Newsletter</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            <h5 className="head4">Stay Informed By Newsletter</h5>
            <p className="para-1">
              *Subscribe to our newsletter to receive early discount offers and
              updates.
            </p>
            <div>
              <div className="newsletter-footer">
                <input
                  className="email"
                  type="email"
                  name="EMAIL"
                  placeholder="Enter your email"
                  required=""
                />
                <br />
                <button type="submit" className="rippler rippler-default">
                  <br />
                  Subscribe
                  <br />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <div className="container12 ">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <p className="footer-para-1">
                Copyright by ModelTheme. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <p className="footer-para">Elite Author on ThemeForest.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
