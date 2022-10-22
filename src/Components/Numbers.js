import React from "react";
import Main from "../Images/main.jpg";
import "./Numbers.css";

export default function Numbers() {
  return (
    <section
      className="number-count"
      style={{ backgroundColor: "#0A0A0A", color: "white" }}
    >
      <div className="number-image">
        <div className="container-fluid py-5">
          {/* <img src={Main} alt='' className="number-image"/> */}
          <h1 className="num-he">Our Numbers</h1>
          <div className="row our-num">
            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
              <h5 className="num-head">1000</h5>
              <p className="num-para">XAUS NFTs</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
              <h5 className="num-head">4.25 kg</h5>
              <p className="num-para">of Physical Gold Coins</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
              <h5 className="num-head">1400</h5>
              <p className="num-para">Years of history</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
              <h5 className="num-head">22 karat</h5>
              <p className="num-para">Dinar Standard</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
