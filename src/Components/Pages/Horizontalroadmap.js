import React from "react";
import "./Roadmap.css";
import roadmap from "../../Images/Image-3.png";
import $ from "jquery";

$(function () {
  var inputs = $(".input");
  var paras = $(".description-flex-container").find("p");
  inputs.click(function () {
    var t = $(this),
      ind = t.index(),
      matchedPara = paras.eq(ind);

    t.add(matchedPara).addClass("active");
    inputs.not(t).add(paras.not(matchedPara)).removeClass("active");
  });
});

function Horizontalroadmap() {
  return (
    <>
      <div
        style={{ backgroundColor: "black", color: "white", padding: "3rem" }}
      >
        <div className="container-fluid">
          <div className="roadmapimage">
            <img src={roadmap} alt="" className="roadmapimg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Horizontalroadmap;
