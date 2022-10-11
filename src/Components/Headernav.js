import React from "react";
import {
  BsTelegram,
  BsFacebook,
  BsTwitter,
  BsDiscord,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";

export default function Headernav() {
  return (
    <section style={{ background: "#000", padding: "15px" }}>
      <div className="container-fluid py-2">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12 col-12 ">
            <div className="main-header1">
              <h5 className="heading">
                World's first gold (Dinar Standard) backed NFTs.
              </h5>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12 col-12 nav-content">
            <div className="ul-content">
              <ul className="under">
                <li className="list-item">
                  <a href="https://t.me/GoldchainExchangeCommunity" target="_blank"><BsTelegram /></a>
                </li>
                {/* <li className="list-item">
                <a href="https://facebook.com/" target="_blank"><BsFacebook /></a>
                </li> */}
                <li className="list-item">
                <a href="https://twitter.com/GcexNft" target="_blank"><BsTwitter /></a>
                </li>
                <li className="list-item">
                <a href="https://discord.gg/QNNZGD2Zfa" target="_blank"><BsDiscord /></a>
                </li>
                <li className="list-item">
                <a href="https://instagram.com/gcexnft" target="_blank"><BsInstagram /></a>
                </li>
              </ul>
              {/* <button type="button" className="btn-1">
                MINT NFT
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
