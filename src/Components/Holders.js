import React from "react";
import Image4 from "../Images/Image-4.jpg";
import "./Holders.css";

export default function Holders() {
  return (
    <section style={{ background: "#000000", color: "#fff" }}>
      <div className="container-fluid py-5">
        <div className="row">
          <h1 className="holder-heading">HOW TO MINT XAUS NFT</h1>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Setup Wallet
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>RECOMMENDED WALLET:</strong> Metamask
                    <br>
                    </br><strong>XAUS NETWORK:</strong> Ethereum Mainnet
                    <br>
                    </br><strong>REQUIRED GAS & MINTING
                      FEES:</strong> Fund the wallet with
                    ETH
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Where to Mint?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    visit <a href="nft.gcex.lt">nft.gcex.lt</a>. Input your desired serial number 
                    of the XAUS NFT you wish to mint. e.g. To mint #000111, put 111 into the
                    input box and click on "Mint Single XAUS NFT". If you wish to mint more than 1 XAUS NFT
                    (max 10 per wallet), input the serial numbers separated by comma e.g. 123,456,789 (to mint 3 XAUS NFTs with these serial numbers)
                    and then click on "Mint Upto 10 XAUS NFT" button. Make sure you have enough ETH in your wallet to pay for 
                    the NFT cost and gas fees.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Join the club
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    After minting the XAUS NFTs headover to <a href="https://opensea.io" target="_blank">opensea.io</a>
                    to see your NFTs. Also head over to our <a href="https://discord.gg/QNNZGD2Zfa" target="_blank">discord channel</a>
                    and join our exclusive club for XAUS holders.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div>
              <img src={Image4} alt="" className="holder-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
