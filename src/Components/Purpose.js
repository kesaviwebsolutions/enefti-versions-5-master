import React from "react";
// import {IoDiamondOutline} from 'react-icons/io';
import { GiDiamondTrophy } from "react-icons/gi";
import {
  FaRegHandshake,
  FaRegHandPeace,
  FaChartLine,
  FaGift,
} from "react-icons/fa";
import { CgCommunity } from "react-icons/cg";
import "./Purpose.css";

export default function Purpose() {
  return (
    <section style={{ background: "#0A0A0A" }} id="purpose">
      <div className="container-fluid">
        <h1 className="pop-heading">Our Purpose</h1>
        <div className="row">
          <div
            className="col-lg-4 col-md-4 col-sm-12 col-12"
            style={{ textAlign: "center" }}
          >
            <div>
              <GiDiamondTrophy
                className="icons1"
                style={{ color: "#D01498" }}
              />
            </div>
            <h3 className="popr-head"> Benefits</h3>
            <p className="pop-para">
              Sed ut perspiciatis unde omnis accusantium doloremque dolorem
              ipsum quia dolor sit.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-12 col-12"
            style={{ textAlign: "center" }}
          >
            <div>
              <FaRegHandshake className="icons1" style={{ color: "#D01498" }} />
            </div>
            <h3 className="popr-head">Partnership</h3>
            <p className="pop-para">
              Sed ut perspiciatis unde omnis accusantium doloremque dolorem
              ipsum quia dolor sit.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-12 col-12"
            style={{ textAlign: "center" }}
          >
            <div>
              <CgCommunity className="icons1" style={{ color: "#D01498" }} />
            </div>
            <h3 className="popr-head">Our Community</h3>
            <p className="pop-para">
              Sed ut perspiciatis unde omnis accusantium doloremque dolorem
              ipsum quia dolor sit.
            </p>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-4 col-md-4 col-sm-12 col-12"
            style={{ textAlign: "center" }}
          >
            <div>
              <FaRegHandPeace className="icons1" style={{ color: "#D01498" }} />
            </div>
            <h3 className="popr-head">Loyal Buyers</h3>
            <p className="pop-para">
              Sed ut perspiciatis unde omnis accusantium doloremque dolorem
              ipsum quia dolor sit.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-12 col-12"
            style={{ textAlign: "center" }}
          >
            <div>
              <FaChartLine className="icons1" style={{ color: "#D01498" }} />
            </div>
            <h3 className="popr-head">Experiences</h3>
            <p className="pop-para">
              Sed ut perspiciatis unde omnis accusantium doloremque dolorem
              ipsum quia dolor sit.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-12 col-12"
            style={{ textAlign: "center" }}
          >
            <div>
              <FaGift className="icons1" style={{ color: "#D01498" }} />
            </div>
            <h3 className="popr-head">OG Merch</h3>
            <p className="pop-para">
              Sed ut perspiciatis unde omnis accusantium doloremque dolorem
              ipsum quia dolor sit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
