import React, { useEffect, useState } from "react";
import "./Nft.css";
// import logo from "./logo2.gif";
import { Button } from "bootstrap";
import Table from "./Table";
import TableMobile from "./TableMobile";
import { auto } from "@popperjs/core";
import Countdown from "./Countdown";
import toast, { Toaster } from "react-hot-toast";
// import {mintforpublic, batchmintforpublic, GetChainId, ETHrecover, batchmintforadmin} from "./../../Web3/Web3"
// import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import {
  batchmintforadmin,
  batchmintforpublic,
  ETHrecover,
  mintforpublic,
} from "../Connection/Wallets";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBBadge,
//   MDBInput,
//   MDBCardSubTitle,
// } from "mdb-react-ui-kit";
// import { Box } from "@mui/system";
// import {
//   Grid,
//   Typography,
// } from "@mui/material";

const id = "6346388b1be26e46cfe0d04a";
const notify = (msg) => toast.success(msg);
const warn = (msg) => toast.error(msg);

function Nft({ url, account }) {
  const [ids, setIDs] = useState();
  const [mintsingle, setMintsingle] = useState(0);
  const [showerror, setShowerror] = useState(false);
  const [showerroradmin, setShowerroradmin] = useState(false);
  const [mintedids, setMintedids] = useState([]);
  const [already, setAlready] = useState(0);
  const [adminids, setAdminIDs] = useState();

  useEffect(() => {
    const init = async () => {
      axios.get(`${url}/nfts`).then((res) => {
        console.log(res);
        setMintedids(res.data[0].ids);
      });
    };
    init();
  }, []);

  const mintDB = async () => {
    mintedids.push(Number(mintsingle));
    axios
      .post(`${url}/addnft`, {
        id: id,
        nfts: mintedids,
      })
      .then((res) => {
        notify("Minted Successfully");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const batchmintDB = async () => {
    const mintid = ids.split(",");
    for (let i = 0; i < mintid.length; i++) {
      mintedids.push(Number(mintid[i]));
    }
    axios
      .post(`${url}/addnft`, {
        id: id,
        nfts: mintedids,
      })
      .then((res) => {
        notify("Minted Successfully");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleId = (e) => {
    setMintsingle(e.target.value);
    const mintid = e.target.value.split(",");
    if (mintid.length > 10) {
      warn("Can not mint more than 10");
    }
    let allFounded = mintid.some((ai) => mintedids.includes(Number(ai)));
    mintid.some((ai) => setAlready(ai));
    if (allFounded) {
      setShowerror(true);
    } else {
      setShowerror(false);
      setIDs(e.target.value);
    }
  };

  const batchmint = async () => {
    let isrun = false;
    isrun = await axios.get(url).then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });
    if (!isrun) {
      warn("Something went wrong");
      return true;
    }
    if (showerror) {
      return true;
    }
    const myArray = ids.split(",");
    // console.log(myArray)
    if (myArray.length > 10) {
      warn("Can not mint more than 10 NFTs at once.");
      return true;
    }
    const data = await batchmintforpublic(myArray);
    if (data.status) {
      batchmintDB();
    }
  };

  const publicmint = async () => {
    let isrun = false;
    isrun = await axios.get(url).then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });
    if (!isrun) {
      warn("Something went wrong");
      return true;
    }
    if (showerror) {
      return true;
    }
    const data = await mintforpublic(mintsingle);
    if (data.status) {
      mintDB();
    }
  };

  const reoverETH = async () => {
    const data = await ETHrecover();
    if (data.status) {
      notify("Success");
    }
  };

  const handleIdadmin = (e) => {
    const mintid = e.target.value.split(",");
    if (mintid.length > 10) {
      warn("Can not mint more than 10");
    }
    let allFounded = mintid.some((ai) => mintedids.includes(Number(ai)));
    if (allFounded) {
      setShowerroradmin(true);
    } else {
      setShowerroradmin(false);
      setAdminIDs(e.target.value);
    }
  };

  const batchmintDBadmin = async () => {
    const mintid = adminids.split(",");
    for (let i = 0; i < mintid.length; i++) {
      mintedids.push(Number(mintid[i]));
    }
    axios
      .post(`${url}/addnft`, {
        id: id,
        nfts: mintedids,
      })
      .then((res) => {
        notify("Minted Successfully");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const batchmintadmin = async () => {
    let isrun = false;
    isrun = await axios.get(url).then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });
    if (!isrun) {
      warn("Something went wrong");
      return true;
    }
    if (showerroradmin) {
      return true;
    }
    const myArray = adminids.split(",");
    const data = await batchmintforadmin(myArray);
    if (data.status) {
      batchmintDBadmin();
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <div
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className="reff-id"
          sx={{
            fontSize: "1rem",
            marginBottom: "3rem",
            textAlign: "center",
            fontWeight: 800,
            width: "100%",
            overflow: "hidden",
          }}
        >
          <div className="row">
            <div
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              style={{
                textAlign: "center",
                color: "white",
                margin: "1rem 0rem",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  paddingBottom: "2rem",
                }}
              >
                <span>Time Remaining to Mint:</span>
                <span className="time1">
                  <Countdown />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-12 Table"
            style={{ backgroundColor: "#000000" }}
          >
            {/*     <table>
        <thead>
          <tr>
            <th>Minted NFTs</th>
           
          </tr>
        </thead>
        <tr><td>12</td></tr>
        <tr><td>12</td></tr>
        <tr><td>12</td></tr>
        <tr><td>12</td></tr>
        <tr><td>12</td></tr>
        <tr><td>12</td></tr>
        <tr><td>12</td></tr>
        <tr><td>12</td></tr>
        <tr><td>12</td></tr>
        <tr><td>12</td></tr>
        <tr><td>12</td></tr>
        <tr><td>12</td></tr><tr><td>12</td></tr>
        <tr><td>12</td></tr>
        <tr><td>12</td></tr>
        <tr><td>12</td></tr>
        <tr><td>12</td></tr>
        <tr><td>12</td></tr>
        <tr><td>12</td></tr>
        <tr><td>12</td></tr>
        <tr><td>12</td></tr>
        <tr><td>12</td></tr>
        <tr><td>12</td></tr>
        <tr><td>12</td></tr>
        <tr><td>12</td></tr>
        <tr><td>12</td></tr>
      </table> */}

            <Table />

            {/* <TableContainer component={Paper} className="table table-minted">
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead  className="minted" >
          <TableRow>
            <TableCell align="center" style={{fontWeight:"800", fontSize:"24px"}}>Minted NFTs</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {mintedids && mintedids.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row}
              </TableCell>
         
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="row">
              <div>
                <video loop autoPlay muted className="video">
                  <source
                    src={require("../Images/Video23.mp4")}
                    type="video/mp4"
                  />
                </video>
              </div>
              <div>
                <p className="inputtext">
                  Input NFT number you wish to mint. If you are minting multiple
                  then put all the numbers separated by a comma.
                </p>
              </div>
            </div>

            <div>
              <input
                type="text"
                name="name"
                placeholder="1,10,100..."
                className="text23"
                onChange={(e) => handleId(e)}
              />
              {showerror ? (
                <p className="waring">NFT #{already} is allready minted</p>
              ) : (
                ""
              )}
            </div>
            <div>
              <button className="button1" onClick={() => publicmint()}>
                Mint Single XAUS NFT
              </button>
            </div>
            <div>
              <button className="button2" onClick={() => batchmint()}>
                Mint upto 10 XAUS NFT
              </button>
            </div>
          </div>
          <div>
            <div container spacing={2}>
              <div
                item
                xs={12}
                sm={12}
                md={12}
                xl={12}
                style={{ margin: "0 auto" }}
              >
                <TableMobile />
                <Toaster />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nft;
