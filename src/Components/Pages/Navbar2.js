import React, { useState, useEffect } from "react";
import {
  BsTelegram,
  BsFacebook,
  BsTwitter,
  BsDiscord,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import meta from "../../Images/meta.png";
import connect from "../../Images/connect.dc871f60434bd877387be88f4a3192d6.svg";
import { GetChainId } from "../../../../enefti-versions-5-master/src/Connection/Wallets";

import "./Navbar2.css";
import { FaBars } from "react-icons/fa";

function Navbar2({
  Metamask,
  account,
  contractadmin,
  Dissconnect,
  walletConnectlogin,
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const init = async () => {
      const id = await GetChainId();
      console.log("Chain ID is ", id);
    };
    init();
  }, [account]);

  const slicewallet = (add) => {
    const first = add.slice(0, 5);
    const second = add.slice(37);
    return first + "..." + second;
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav
        class="navbar navbar-expand-lg"
        style={{ backgroundColor: "black !important" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            {" "}
            <img
              src="https://cdn2.bttcdn.com/2e4add5483abf2ff/e2bc39a2d59c627c24ff83406d75d1a6.png"
              alt=""
              width="150px"
            />
          </a>
          <a
            class="btn btn-primary icon-fa"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            <FaBars />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="https://www.gcex.lt/Trade"
                  target="_blank"
                >
                  Trade
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://www.gcex.lt/register?redirect=/Wallet"
                  target="_blank"
                >
                  Wallet
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link "
                  href="https://www.gcex.lt/register?redirect=/Orders"
                  target="_blank"
                >
                  Orders
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="https://www.gcex.lt/ieo"
                  target="_blank"
                >
                  IEO
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="https://www.goldchainex.com/"
                  target="_blank"
                >
                  GC Group
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="https://www.goldchainex.com/news"
                  target="_blank"
                >
                  Featured Press
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="https://trade.theunitedcapital.com/"
                  target="_blank"
                >
                Spot Trading
                </a>
              </li>
           {/*    <li class="nav-item">
                <a
                  class="nav-link "
                  href="https://earn.gcex.lt/"
                  target="_blank"
                >
                  Earn
                </a>
              </li> */}
            </ul>
            <div className="ul-content" style={{ display: "flex" }}>
              <ul
                className="under"
                style={{ marginRight: "2rem", marginTop: "1rem" }}
              >
                <li className="list-item">
                  <a
                    href="https://t.me/GoldchainExchangeCommunity"
                    target="_blank"
                  >
                    <BsTelegram />
                  </a>
                </li>
                <li className="list-item">
                  <a href="https://facebook.com/" target="_blank">
                    <BsFacebook />
                  </a>
                </li>
                <li className="list-item">
                  <a href="https://twitter.com/GcexNft" target="_blank">
                    <BsTwitter />
                  </a>
                </li>
                <li className="list-item">
                  <a href="https://discord.gg/QNNZGD2Zfa" target="_blank">
                    <BsDiscord />
                  </a>
                </li>
                <li className="list-item">
                  <a href="https://instagram.com/gcexnft" target="_blank">
                    <BsInstagram />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <Button
                variant="primary"
                className="btn-1"
                onClick={() => {
                  if (account) {
                    Dissconnect();
                    return true;
                  }
                  handleShow();
                }}
                style={{ padding: "7px 28px" }}
              >
                {account ? slicewallet(account) : "Connect Wallet"}
              </Button>
            </div>

            <Modal
              show={show}
              onHide={handleClose}
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title
                  id="contained-modal-title-vcenter"
                  className="ms-auto"
                >
                  Please connect your wallet
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="d-flex align-items-center justify-content-evenly">
                  <img
                    src={meta}
                    alt=""
                    className="wallet-img"
                    onClick={() => {
                      Metamask();
                      setShow(!show);
                    }}
                  />
                  <img
                    src={connect}
                    alt=""
                    className="wallet-img2"
                    onClick={() => {
                      walletConnectlogin();
                      setShow(!show);
                    }}
                  />
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </nav>
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            id="button-reset1"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div class="dropdown mt-3">
            <div className="offcanvas-button">
              <Button
                variant="primary"
                className="offcanvas-button1"
                onClick={() => {
                  if (account) {
                    Dissconnect();
                    return true;
                  }
                  handleShow();
                }}
                style={{ padding: "7px 28px" }}
              >
                {account ? slicewallet(account) : "Connect Wallet"}
              </Button>
            </div>
            <div className="offcanvas-button">
              <button className="offcanvas-button2">
                <a href="https://www.gcex.lt/Trade" target="_blank">
                  TRADE
                </a>
              </button>
            </div>
            <div className="offcanvas-button">
              <button className="offcanvas-button2">
                <a
                  href="https://www.gcex.lt/register?redirect=/Wallet"
                  target="_blank"
                >
                  WALLET
                </a>
              </button>
            </div>
            <div className="offcanvas-button">
              <button className="offcanvas-button2">
                <a
                  href="https://www.gcex.lt/register?redirect=/Orders"
                  target="_blank"
                >
                  ORDER
                </a>
              </button>
            </div>
            <div className="offcanvas-button">
              <button className="offcanvas-button2">
                <a href="https://www.gcex.lt/ieo" target="_blank">
                  IEO
                </a>
              </button>
            </div>
            <div className="offcanvas-button">
              <button className="offcanvas-button2">
                <a href="https://www.goldchainex.com/" target="_blank">
                  GC GROUP
                </a>
              </button>
            </div>
            <div className="offcanvas-button">
              <button className="offcanvas-button2">
                <a href="https://www.goldchainex.com/news" target="_blank">
                  FEATERED PRESS
                </a>
              </button>
            </div>
            <div className="offcanvas-button">
              <button className="offcanvas-button2">
                <a href="https://trade.theunitedcapital.com/" target="_blank">
               SPOT TRADING
                </a>
              </button>
            </div>
        {/*     <div className="offcanvas-button">
              <button className="offcanvas-button2">
                <a href="https://earn.gcex.lt/" target="_blank">
                  EARN
                </a>
              </button>
            </div> */}

            <div className="offcanvas-button">
              <button className="offcanvas-button2">
                <a href="#">HOME</a>
              </button>
            </div>
            <div className="offcanvas-button">
              <button className="offcanvas-button2">
                <a href="#magician">ABOUT</a>
              </button>
            </div>
            <div className="offcanvas-button">
              <button className="offcanvas-button2">
                <a href="#purpose">FEATURES</a>
              </button>
            </div>
            <div className="offcanvas-button">
              <button className="offcanvas-button2">
                <a href="#buy">HOW TO BUY</a>
              </button>
            </div>
            <div className="offcanvas-button">
              <button className="offcanvas-button2">
                <a href="#faq">HOW TO REDEEM</a>
              </button>
            </div>
            <div className="offcanvas-button">
              <button className="offcanvas-button2">
                <a href="#roadmap">ROADMAP</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar2;
