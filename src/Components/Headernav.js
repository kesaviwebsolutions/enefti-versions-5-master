import React from "react";
import {
  BsTelegram,
  BsFacebook,
  BsTwitter,
  BsDiscord,
  BsLinkedin,
} from "react-icons/bs";

export default function Headernav() {
  return (
    <section style={{ background: "#000", padding: "15px" }}>
      <div className="container12">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12 col-12 ">
            <div className="main-header1">
              <h5 className="heading">
                Discover, find and sell extraordinary NFT with us.
              </h5>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12 col-12 nav-content">
            <div className="ul-content">
              <ul className="under">
                <li className="list-item">
                  <BsTelegram />
                </li>
                <li className="list-item">
                  <BsFacebook />
                </li>
                <li className="list-item">
                  <BsTwitter />
                </li>
                <li className="list-item">
                  <BsDiscord />
                </li>
                <li className="list-item">
                  <BsLinkedin />
                </li>
              </ul>
              <button type="button" className="btn-1">
                MINT NFT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
