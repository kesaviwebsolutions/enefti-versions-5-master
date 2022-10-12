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
                  Each serial number of an XAUS NFT is backed by a physical gold coin. GCB Trust (Sweden) holds the gold coins (Gold Dinar standard) that have already been minted. An individual who holds an XAUS NFT bearing a particular serial number is entitled to claim the gold coin bearing the same serial number. As an alternative, holders can convert their NFTs into XAUS tokens. 1 XAUS NFT = 10 XAUS tokens. The value of XAUS tokens can be staked to earn a return of up to 6% per year. <br/>
                  <br/>
                  NFTs backed by physical gold coins retain their base value, thus protecting investors from impermanent losses. As a result, it can be traded at a higher value on opensea.io based on the sentiment associated with a particular serial number, such as #000786 or #000999. Accordingly, the GCB trust can only guarantee the value of XAUS NFTs based on the weight of the gold, which is 4.25 grams of 22 Karat gold at the time of redemption, and its market value.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  How to redeem XAUS Physical Gold Coin?
                </Accordion.Header>
                <Accordion.Body>
                  <strong>Option 1:</strong> In order to redeem physical gold coins of the same serial number as the XAUS NFT you hold, you should contact GCB trust. In order to receive physical coins, you must register your interest along with the preferred address for delivery. You will then need to burn the NFT and the gold coins with the same serial number will be sent to the address you specified. To ensure the authenticity of the gold coin, you are advised to download the NFT (image/video) prior to burning the NFT.
                  <br />
                  <br />
                  <strong>Option 2:</strong> As a replacement for your NFT of the same amount, you can claim 10 XAUS tokens and swap them for USDT on earn.gcex.lt.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Who is the custodian of XAUS physical gold coins?
                </Accordion.Header>
                <Accordion.Body>
                  <strong>GCB Trust, Sweden</strong> is the custodian of XAUS
                  Physical gold coins and 1000 gold coins are in the reserve for
                  1000 NFTs that will be out on opensea.io. An independent
                  party's audit ensuring the deposit will be available on the
                  website nft.gcex.lt.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  How to ascertain purity/fineness of XAUS gold coins?
                </Accordion.Header>
                <Accordion.Body>
                  XAUS gold coins are certified for its purity/fineness of 22
                  carat and weight of 4.25gms by Dalitana UAB, Lithuania. You
                  can find the certificate on the website nft.gcex.lt
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
