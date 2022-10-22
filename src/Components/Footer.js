import React from "react";
import "./Footer.css";
import { BsDiscord, BsTwitter, BsTelegram } from "react-icons/bs";
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
              <h4>GCB Trust</h4>
              <p>
                {" "}
                <strong>Registration No.:</strong> 969798-0408
                <br />
                <strong>Registration Date:</strong> 09 May 2022
                <br />
                <strong>Address:</strong> Svetsarvagen 15 2tr, Solna SE-171, 41
                Sweden
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 useful-link12">
            <div className="footer-address-area2 useful-link">
              <h4>Useful Links</h4>
              <ul>
                <li className="li">
                  <a href="https://gcex.lt" target="_blank">
                    Goldchain Exchange
                  </a>
                </li>
                <li className="li">
                  <a href="https://earn.gcex.lt" target="_blank">
                    DeFi Platform
                  </a>
                </li>
                <li className="li">
                  <a href="https://gcbtrust.com" target="_blank">
                    GCB Trust
                  </a>
                </li>
                <li className="li">
                  <a href="https://bank.gcex.lt" target="_blank">
                    GCB Bank
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="footer-sociallinks">
              <div className="fsl">
                <a
                  href="https://t.me/GoldchainExchangeCommunity"
                  target="_blank"
                >
                  <BsTelegram size={28} className="mx-3" />
                </a>
                <a href="https://discord.gg/QNNZGD2Zfa" target="_blank">
                  <BsDiscord size={28} className="mx-3" />
                </a>
                <a href="https://twitter.com/GcexNft" target="_blank">
                  <BsTwitter size={28} className="mx-3" />
                </a>
                {/* <a><FaFacebookF size={28} className="mx-3" /></a> */}
                {/* <FaLinkedinIn size={28} className="mx-3" /> */}
                <a href="https://instagram.com/gcexnft" target="_blank">
                  <FaInstagramSquare
                    size={28}
                    className=""
                    style={{ marginLeft: "1.3rem" }}
                  />
                </a>
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
                &copy; Goldchain Exchange | All Rights Reserved
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <p className="footer-para py-3">Return of the Gold Dinar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
