import React from "react";
// import {IoDiamondOutline} from 'react-icons/io';
import { GiDiamondTrophy } from "react-icons/gi";
import {
  FaRegHandshake,
  FaRegHandPeace,
  FaChartLine,
  FaGift,
} from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
import { GrProductHunt } from "react-icons/gr";
import { MdFormatListNumberedRtl } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { SiConvertio } from "react-icons/si";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

import "./Purpose.css";

export default function Purpose() {
  return (
    <section style={{ background: "#0A0A0A" }} id="purpose">
      <div className="container-fluid py-5">
        <h1 className="pop-heading">What makes XAUS NFTs different?</h1>
        <div className="row">
          <div
            className="col-lg-4 col-md-4 col-sm-12 col-12"
            style={{ textAlign: "center" }}
          >
            <div>
              <GrProductHunt className="icons1" style={{ color: "#D01498" }} />
            </div>
            <h3 className="popr-head"> Intrinsic Value</h3>
            <p className="pop-para">
              First beautifully designed product that's both stylish and
              functional​. Backed by 22 Karat Gold (Dinar Standard) Coins.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-12 col-12"
            style={{ textAlign: "center" }}
          >
            <div>
              <MdFormatListNumberedRtl
                className="icons1"
                style={{ color: "#D01498" }}
              />
            </div>
            <h3 className="popr-head">Sentimental Value</h3>
            <p className="pop-para">
              Sentimental value in the form of unique serial number printed on
              22 Carat physical gold dinar coin. Each serial number of NFT is
              backed by a gold coin of the same serial number.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-12 col-12"
            style={{ textAlign: "center" }}
          >
            <div>
              <AiFillSafetyCertificate
                className="icons1"
                style={{ color: "#D01498" }}
              />
            </div>
            <h3 className="popr-head">Shariah Compliant</h3>
            <p className="pop-para">
              Gold Dinar coins have proved their value for over 1,400 years.
              Internationally Certified purity (22 Carat), weight (4.25 gm) &
              thickness (23 mm) of gold dinar coin standard.
            </p>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-4 col-md-4 col-sm-12 col-12"
            style={{ textAlign: "center" }}
          >
            <div>
              <RiMoneyDollarCircleFill
                className="icons1"
                style={{ color: "#D01498" }}
              />
            </div>
            <h3 className="popr-head">Wealth</h3>
            <p className="pop-para">
              Hedge against currency inflation/ currency devaluation with the
              stable value of gold.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-12 col-12"
            style={{ textAlign: "center" }}
          >
            <div>
              <SiConvertio className="icons1" style={{ color: "#D01498" }} />
            </div>
            <h3 className="popr-head">Convert</h3>
            <p className="pop-para">
              XAUS NFT can be converted to XAUS tokens and then swapping to USDT
              at the prevailing gold price on GCex platform{" "}
              <a
                href="https://earn.gcex.lt"
                target="_blank"
                className="channel"
              >
                earn.gcex.lt
              </a>
            </p>
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-12 col-12"
            style={{ textAlign: "center" }}
          >
            <div>
              <FaCoins className="icons1" style={{ color: "#D01498" }} />
            </div>
            <h3 className="popr-head">Redeem Gold Coin</h3>
            <p className="pop-para">
              Each XAUS NFT is linked to your unique serial number physical gold
              coin held in custody by GCB Trust (Sweden).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
