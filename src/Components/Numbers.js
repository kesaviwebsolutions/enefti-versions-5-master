import React from "react";
import Main from "../Images/main.jpg";
import './Numbers.css';

export default function Numbers() {
  return (
    <section>
     
      <div className="number-image">
        <div className="container-fluid">
        {/* <img src={Main} alt='' className="number-image"/> */}
          <h1 className="num-he" >Our Numbers</h1>
          <div className="row our-num">
            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
              <h5 className="num-head">1234</h5>
              <p className="num-para">Case Completed</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
              <h5 className="num-head">32</h5>
              <p className="num-para">Team Member</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
              <h5 className="num-head">12</h5>
              <p className="num-para">Year Experience</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
              <h5 className="num-head">1475</h5>
              <p className="num-para">Satisfied Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
