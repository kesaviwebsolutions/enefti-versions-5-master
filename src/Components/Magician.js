import React from "react";
import "./Magician.css";
export default function Magician() {
  return (
    <section className="magi-section" id="magician">
      <div className="container12">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <h1 className="head-magi">Musician's OGs</h1>
            <p className="magi-para">
              Et ligula ullamcorper malesuada proin libero nunc consequat.
              Sagittis aliquam malesuada bibendum arcu. At in tellus integer
              feugiat scelerisque varius morbi enim nunc. Faucibus ornare
              suspendisse sed nisi lacus. Varius sit amet mattis vulputate enim
              nulla. Pulvinar mattis nunc sed blandit libero volutpat sed. In
              nulla.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 magi-button">
            <button className="button-magi">Find more on our Discord</button>
          </div>
        </div>
      </div>
    </section>
  );
}
