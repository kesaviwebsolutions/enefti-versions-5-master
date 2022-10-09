import React, { useEffect, useState } from "react";
import "./Nft.css";
// import logo from "./logo2.gif";
import { Button } from "bootstrap";
import Table from "./Table";
import TableMobile from "./TableMobile";
// import {mintforpublic, batchmintforpublic, GetChainId, ETHrecover, batchmintforadmin} from "./../../Web3/Web3"
// import toast, { Toaster } from "react-hot-toast";
// import axios from "axios";
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

const id = "63382cdc3171dfd5d7715948"
// const notify = (msg) => toast.success(msg);
// const warn = (msg) => toast.error(msg);

function Nft(){
  return (
    <>
    <div style={{backgroundColor:"black"}}>
    <div>
        <marquee style={{color:'white'}}>Input NFT number you wish to mint. If you are minting multiple then put all the numbers separated by a comma.</marquee>
    </div>
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
          <div item xs={12} sm={12} md={12} lg={12} xl={12} style={{textAlign:"center",color:"white",margin:"1rem 0rem"}}>Time left </div>
          </div>
        </div>
      <div className="row" >
     
      <div className="col-lg-6 col-md-6 col-sm-12 col-12 Table" style={{backgroundColor:"#000000"}}>
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

<Table/>


      
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
      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
      <div className="row">
        <div>
          <video loop autoPlay muted className="video">
            <source src={require("../Images/Video24.mp4")} type="video/mp4" />
          </video>
        </div>
        </div>
      
        <div>
          <input
            type="text"
            name="name"
            placeholder="1,10,100..."
            className="text23"
          
           
          />
          {/* {showerror ? <p className="waring">NFT #{ already } is allready minted</p> : ""} */}
        </div>
        <div>
          <button className="button1" >Mint Single XAUS NFT</button>
        </div>
        <div>
          <button className="button2" >Mint upto 10 XAUS NFT</button>
        </div>
        </div>
    <div>
            <div container spacing={2}>
          <div item xs={12} sm={12} md={12} xl={12} style={{margin:"0 auto"}}>
             <TableMobile />
            </div>
            </div> 
    </div>
      </div>
     
    
    </div>
    </>
  );
}

export default Nft;
