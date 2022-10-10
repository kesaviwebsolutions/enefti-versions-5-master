import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import icon22 from "../Images/Main-about1.png";
import "./Timeline.css";
function Timeline() {
  return (
    <section id="roadmap">
      <div style={{ backgroundColor: "#E9EDF3" }} className="py-5">
        <div className="container-fluid">
          <div className="row">
            <h1 className="timeline-head">THE ROADMAP</h1>
          </div>
        </div>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "black", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid black" }}
            date="2011 - present"
            iconStyle={{ background: "black", color: "#fff" }}
            icon=<img src={icon22} alt="" className="image-roadmap" />
          >
            <h1
              className="vertical-timeline-element-title"
              style={{ color: "#C91078" }}
            >
              Q1 2022
            </h1>

            <p>
              - Et ligula ullamcorper malesuada proin <br /> <br />
              - Sagittis aliquam malesuada bibendum arcu <br /> <br />
              - At in tellus integer feugiat scelerisque varius morbi enim nunc.
              <br /> <br />
              - Faucibus ornare suspendisse sed nisi lacus.
              <br /> <br />
              - Varius sit amet mattis vulputate enim nulla.
              <br /> <br />
              - Pulvinar mattis nunc sed blandit libero volutpat sed
              <br /> <br />
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "black", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  black" }}
            date="2011 - present"
            iconStyle={{ background: "black", color: "#fff" }}
            icon=<img src={icon22} alt="" className="image-roadmap" />
          >
            <h1
              className="vertical-timeline-element-title"
              style={{ color: "#C91078" }}
            >
              Q1 2022
            </h1>

            <p>
              - Et ligula ullamcorper malesuada proin <br /> <br />
              - Sagittis aliquam malesuada bibendum arcu <br /> <br />
              - At in tellus integer feugiat scelerisque varius morbi enim nunc.
              <br /> <br />
              - Faucibus ornare suspendisse sed nisi lacus.
              <br /> <br />
              - Varius sit amet mattis vulputate enim nulla.
              <br /> <br />
              - Pulvinar mattis nunc sed blandit libero volutpat sed
              <br /> <br />
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "black", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  black" }}
            date="2011 - present"
            iconStyle={{ background: "black", color: "#fff" }}
            icon=<img src={icon22} alt="" className="image-roadmap" />
          >
            <h1
              className="vertical-timeline-element-title"
              style={{ color: "#C91078" }}
            >
              Q1 2022
            </h1>

            <p>
              - Et ligula ullamcorper malesuada proin <br /> <br />
              - Sagittis aliquam malesuada bibendum arcu <br /> <br />
              - At in tellus integer feugiat scelerisque varius morbi enim nunc.
              <br /> <br />
              - Faucibus ornare suspendisse sed nisi lacus.
              <br /> <br />
              - Varius sit amet mattis vulputate enim nulla.
              <br /> <br />
              - Pulvinar mattis nunc sed blandit libero volutpat sed
              <br /> <br />
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Timeline;
