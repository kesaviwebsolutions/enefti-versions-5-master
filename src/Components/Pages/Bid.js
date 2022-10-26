import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import "./Bid.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { TokenSend, TokenBalace, GetChainId } from "../../Connection/Wallets";
import { isMobile } from "react-device-detect";
import Footer from "../Footer";

const warn = (msg) => toast.error(msg);
const notify = (msg) => toast.success(msg);

function Bid({ account, url }) {
  const [bno, setBno] = useState();
  const [bidno, setBidno] = useState();
  const [amount, setAmount] = useState(0);
  const [last, setLast] = useState(0);
  const [open, setOpen] = useState(false);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const init = async () => {
      const bal = await TokenBalace();
      setBalance(bal / 10 ** 18);
    };
    init();
  }, [account]);

  useEffect(() => {
    const init = async () => {
      const id = await GetChainId();
      console.log("Chain ID is ", id);
      if (Number(id) != 56) {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x38" }], // chainId must be in hexadecimal numbers
        });
      }
    };

    init();
  }, []);

  const handleSno = async (num) => {
    try {
      if (Number(num) > 1000) {
        return true;
      }
      setBidno(Number(num));
      const BNO = Number(num);
      const bids = await axios
        .post(`${url}/isbid`, {
          num: BNO,
        })
        .then((res) => {
          console.log(res);
          return res.data;
        });
      console.log(bids);
      if (bids == "") {
        setLast(0);
        setBno([]);
        return 0;
      }
      setLast(bids.Last);
      setBno(bids.Bids.reverse());
      console.log(bids);
    } catch (error) {}
  };

  const placeBid = async () => {
    try {
      if (!account) {
        warn("Wallet not detected, please refresh the page");
        return true;
      }
      if (bidno > 1000) {
        warn("Invalid bid number");
        return true;
      }
      if (last + 30 > amount) {
        warn("Entered amount should be greater than last bid amount");
        return true;
      }
      setOpen(true);

      const data = await TokenSend(amount);
      if (data.status) {
        axios
          .post(`${url}/bidon`, {
            num: bidno,
            wallet: account,
            amount: amount,
          })
          .then((res) => {
            console.log(res);
            getBids();
            setOpen(false);
            notify("Bid Successfull");
          })
          .catch((e) => {
            setOpen(false);
          });
      }
    } catch (error) {
      setOpen(false);
    }
  };

  const getBids = async () => {
    const bids = await axios
      .post(`${url}/isbid`, {
        num: bidno,
      })
      .then((res) => {
        console.log(res);
        return res.data;
      });
    setLast(bids.Last);
    setBno(bids.Bids.reverse());
    const bal = await TokenBalace();
    setBalance(bal / 10 ** 18);
  };

  const slice = (add) => {
    const first = add.slice(0, 4);
    const second = add.slice(37);
    return first + "..." + second;
  };

  return (
    <>
      <div style={{ backgroundColor: "black", color: "white" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="row">
                <div>
                  <video loop autoPlay muted className="video">
                    <source
                      src={require("../../Images/Video23.mp4")}
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div>
                  <p className="inputtext">
                    Last bid amount was ${isNaN(last) ? "000" : last}
                    <br />
                    <p style={{ fontSize: "13px", color: "#fcf525" }}>
                      (Minimum increment is $30 on last highest bid amount)
                    </p>
                  </p>
                </div>
              </div>

              <div>
                <p className="balanc">
                  Balance: {isNaN(balance) ? "00" : balance} USDT
                </p>
                <input
                  type="text"
                  name="name"
                  value={bidno}
                  onChange={(e) => handleSno(e.target.value)}
                  placeholder="S. No"
                  className="text23"
                />
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setAmount(Number(e.target.value))}
                  placeholder="amount"
                  className="text23"
                />
              </div>
              <div>
                <button className="button1" onClick={() => placeBid()}>
                  Bid
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <Table striped bordered hover style={{ marginTop: "2rem" }}>
                <thead>
                  <tr>
                    <th>S N0</th>
                    <th>WALLET</th>
                    {/* <th>BID TIME</th> */}
                    <th>BID AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  {bno &&
                    bno.map((res) => {
                      return (
                        <tr>
                          <td>{bno.indexOf(res) + 1}</td>
                          {isMobile ? (
                            <td>{slice(res.wallet)}</td>
                          ) : (
                            <td>{res.wallet}</td>
                          )}
                          {/* <td>{new Date(res.time).toDateString()}</td> */}
                          <td>${res.amount}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
              <Toaster />
            </div>
          </div>
        </div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <Box sx={{ display: "block", margin: "auto" }}>
            <CircularProgress color="inherit" />
            <p className="papa">Bid in process</p>
          </Box>
        </Backdrop>
      </div>
    </>
  );
}

export default Bid;
