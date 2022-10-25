import React from "react";
import Table from 'react-bootstrap/Table';
import "./Bid.css";

function Bid() {
  return (
    <>
    <div style={{backgroundColor:"black",color:"white"}}>
    <div className="container" >
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
      Input NFT number you wish to mint. If you are minting
      multiple then put all the numbers separated by a comma.
    </p>
  </div>
</div>

<div>
  <input
    type="text"
    name="name"
    placeholder="1,10,100..."
    className="text23"
   
  />
  <input
  type="text"
  name="name"
  placeholder="1,10,100..."
  className="text23"
 
/>
 
    <p className="waring">NFT # is allready minted</p>
 
 
</div>
<div>
  <button className="button1" >
Bid
  </button>
</div>

</div>
<div className="col-lg-6 col-md-12 col-sm-12 col-12">
<Table striped bordered hover style={{marginTop:"2rem"}}>
<thead>
  <tr>
    <th>#</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Username</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Jacob</td>
    <td>Thornton</td>
    <td>@fat</td>
  </tr>

</tbody>
</Table>
</div>
</div>
</div>
</div>
    </>
  );
}

export default Bid;
