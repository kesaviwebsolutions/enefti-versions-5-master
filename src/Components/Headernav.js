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
import meta from "../Images/meta.png";
import connect from "../Images/connect.dc871f60434bd877387be88f4a3192d6.svg";
import { GetChainId } from "../Connection/Wallets";

export default function Headernav({Metamask, account, contractadmin, Dissconnect, walletConnectlogin }) {
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
    <section style={{ background: "#000", padding: "15px" }}>
      <div className="container-fluid py-2">
        {/* <div className="headernav">
          <div className="main-header1">
            <h5 className="heading">
              World's first gold (Dinar Standard) backed NFTs.
            </h5>
          </div>
          <div className="ul-content">
            <ul className="under">
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
            <Button variant="primary" onClick={handleShow} className="btn-1">
              Connect Wallet
            </Button>
          </div>
        </div> */}
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
              <Button variant="primary" className="btn-1"
               onClick={() => {
                if (account) {
                  Dissconnect();
                  return true;
                }
                handleShow();
              }}
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
                      Metamask()
                      setShow(!show)
                    }}
                  />
                  <img
                    src={connect}
                    alt=""
                    className="wallet-img2"
                    onClick={() => {
                      walletConnectlogin();
                      setShow(!show)
                    }}
                  />
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
}
