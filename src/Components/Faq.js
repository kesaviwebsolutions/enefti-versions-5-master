import React from "react";
import Image4 from "../Images/Image-4.jpg";
import "./Faq.css";
import Icon1 from "../Images/Main-Client1.png";
import Icon2 from "../Images/Main-Client4.png";
import Icon3 from "../Images/Main-Client6.png";
import { Accordion } from "react-bootstrap";

export default function Holders() {
  return (
    <section style={{ background: "#000000", color: "#fff" }} id="faq">
      <div className="container-fluid py-5">
        <div className="row">
          <h1 className="faq-heading">FAQ</h1>
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What utility does XAUS have?
                </Accordion.Header>
                <Accordion.Body>
                  XAUS NFTs are backed by physical gold coin for each serial number. The gold coins (Gold Dinar standard)
                  have already been minted are in the custody of GCB Trust (Sweden). Anyone holding XAUS NFT of a particular 
                  serial number has the right to claim the gold coin of the same serial number. Alternatively, holders can
                  choose to convert their NFTs to XAUS tokens. 1 XAUS NFT = 10 XAUS tokens. XAUS tokens can be staked to earn
                  an estimated return of upto 6% per annum.

                  XAUS NFTs backed by physical gold coins retains its base value and hence the investors are protected from
                  impermanent loss. Moreover, it can be traded at a higher value on opensea.io depending on the sentiment associated 
                  with a particular serial number such as #000786 or #000999. GCB trust can only ensure the value of XAUS NFTs as per their
                  weight i.e. 4.25 Grams of 22 Karat gold and its market value at the time of redemption.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  How to redeem XAUS Physical Gold Coin?
                </Accordion.Header>
                <Accordion.Body>
                  <strong>Option 1:</strong> To redeem physical gold coin of same serial as of the XAUS NFT you hold, you can contact GCB trust.
                  After registering your interst in receiving physical coin and the preferred delivery address, you will need to burn the NFT
                  and the gold coins of same serial number will be dispatched to your preferred address. You are advised to download 
                  the NFT (image/video) as proof of authenticity of the gold coin.<br/>
                  <br/>
                  <strong>Option 2:</strong> You can claim 10 XAUS tokens in replacement of your NFT of same value and swap those to USDT on earn.gcex.lt.

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Who is the custodian of XAUS physical gold coins?
                </Accordion.Header>
                <Accordion.Body>
                  <strong>GCB Trust, Sweden</strong> is the custodian of XAUS Physical gold coins and 1000 gold coins are in the reserve
                  for 1000 NFTs that will be out on opensea.io. An independent party's audit ensuring the deposit will be available on the website
                  nft.gcex.lt.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  How to ascertain purity/fineness of XAUS gold coins?
                </Accordion.Header>
                <Accordion.Body>
                  XAUS gold coins are certified for its purity/fineness of 22 carat and weight of 4.25gms by Dalitana UAB, Lithuania. You can find the certificate on 
                  the website nft.gcex.lt
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          {/* <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="faq-imag2">
              <img src={Image4} alt="" className="faq-image" />
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="container py-5">
        <div className="faq-icons">
          <div className="icon col-lg-2 col-md-2 col-sm-2 col-4">
            <img src={Icon1} alt="" />
          </div>
          <div className="icon col-lg-2 col-md-2 col-sm-2 col-4">
            <img src={Icon2} alt="" />
          </div>
          <div className="icon col-lg-2 col-md-2 col-sm-2 col-4">
            <img src={Icon3} alt="" />
          </div>
          <div className="icon col-lg-2 col-md-2 col-sm-2 col-4">
            <img src={Icon1} alt="" />
          </div>
          <div className="icon col-lg-2 col-md-2 col-sm-2 col-4">
            <img src={Icon2} alt="" />
          </div>
          <div className="icon col-lg-2 col-md-2 col-sm-2 col-4">
            <img src={Icon3} alt="" />
          </div>
        </div>
      </div> */}
    </section>
  );
}
