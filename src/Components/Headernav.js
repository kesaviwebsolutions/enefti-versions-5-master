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
import Navbar2 from "./Pages/Navbar2";

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
    <section style={{ background: "#000", padding: " 0px 15px" }}>

     <div className="container-fluid ">
     <Navbar2 Metamask={Metamask} account={account} contractadmin={contractadmin} Dissconnect={Dissconnect} walletConnectlogin={walletConnectlogin}/>
  
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12 col-12 ">
            <div className="main-header1">
              <h5 className="heading">

              </h5>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12 col-12 nav-content">
            <div className="ul-content" style={{display:"flex"}}>
       
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
