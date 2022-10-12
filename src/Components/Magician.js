import React from "react";
import "./Magician.css";

export default function Magician() {
  return (
    <section className="magi-section" id="magician">
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <p className="head-magi">Return of the Gold Dinar</p>
            <p className="magi-para">
              XAUS NFTs are world's first NFTs backed by physical 22 carat purity gold. The
              unique XAUS NFT serial number is embossed on a physical gold coin
              of gold weight of 4.25 grams, equivalent to 10 XAUS tokens. From
              the International Halal Assurance Institute, XAUS is the first
              cryptocurrency to receive a Certificate of Sharia Compliance
              (05-March-2022).
            </p>
            <button className="button-magi">
              <a
                href="https://discord.gg/QNNZGD2Zfa"
                target="_blank"
                className="fd"
              >
                Find more on our Discord
              </a>
            </button>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div>
                <video loop autoPlay muted className="video">
                  <source
                    src={require("../Images/intro-video.mp4")}
                    type="video/mp4"
                  />
                </video>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
