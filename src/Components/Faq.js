import React from "react";
import Image4 from "../Images/Image-4.jpg";
import "./Faq.css";
import Icon1 from "../Images/Main-Client1.png";
import Icon2 from "../Images/Main-Client4.png";
import Icon3 from "../Images/Main-Client6.png";

export default function Holders() {
  return (
    <section style={{ background: "#000000", color: "#fff" }} id="faq">
      <div className="container-fluid">
        <div className="row">
          <h1 className="faq-heading">FAQ</h1>
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
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
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
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
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
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="faq-imag2">
              <img src={Image4} alt="" className="faq-image" />
            </div>
          </div>
        </div>
      </div>
      <div className="container12">
        <div className="faq-icons">
          <div className="icon col-lg-2 col-md-2 col-sm-2 col-4">
            <img src={Icon1} alt="" />
          </div>
          <div className="icon col-lg-2 col-md-2 col-sm-2 col-4">
            <img src={Icon2} alt="" />
          </div>
          <div className="icon col-lg-2 col-md-2 col-sm-2 col-4">
            <img src={Icon3} alt="" />
          </div>
          <div className="icon col-lg-2 col-md-2 col-sm-2 col-4">
            <img src={Icon1} alt="" />
          </div>
          <div className="icon col-lg-2 col-md-2 col-sm-2 col-4">
            <img src={Icon2} alt="" />
          </div>
          <div className="icon col-lg-2 col-md-2 col-sm-2 col-4">
            <img src={Icon3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
