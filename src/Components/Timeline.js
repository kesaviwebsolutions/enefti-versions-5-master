import React from "react";
import {
  horizontalTimeline,
  horizontalTimelineElement,
} from "react-horizontal-timeline";
// import "react-horizontal-timeline/style.min.css";
import icon22 from "../Images/Main-about1.png";
import "./Timeline.css";
function Timeline() {
  return (
    <section id="roadmap">
      <div style={{ backgroundColor: "#E9EDF3" }} className="py-5">
        <div className="container-fluid">
          <div className="row">
            <h1 className="timeline-head">XAUS NFT ROADMAP</h1>
          </div>
        </div>

        <horizontaltimeline>
          <horizontaltimelineElement
            className="horizontal-timeline-element--work"
            contentStyle={{ background: "black", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid black" }}
            // date="2011 - present"
            iconStyle={{ background: "black", color: "#fff" }}
            icon=<img src={icon22} alt="" className="image-roadmap" />
          >
            <h1
              className="horizontal-timeline-element-title"
              style={{ color: "#C91078" }}
            >
              Q1 2022
            </h1>

            <p>
              - Launch of Gcex regulated Exchange &amp; native token <br /> <br />
              - Completed XAUS Stablecoin Whitepaper <br /> <br />
              - Launch of XAUS Stablecoin smart contract on Binance Smart Chain
            </p>
          </horizontaltimelineElement>
          <horizontaltimelineElement
            className="horizontal-timeline-element--work"
            contentStyle={{ background: "black", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  black" }}
            // date="2011 - present"
            iconStyle={{ background: "black", color: "#fff" }}
            icon=<img src={icon22} alt="" className="image-roadmap" />
          >
            <h1
              className="horizontal-timeline-element-title"
              style={{ color: "#C91078" }}
            >
              Q2 2022
            </h1>

            <p>
              - Minting of physical 22 carat Gold Dinar standard XAUS coins begins <br /> <br />
              - XAUS NFTs concept design <br /> <br />
            </p>
          </horizontaltimelineElement>
          <horizontaltimelineElement
            className="horizontal-timeline-element--work"
            contentStyle={{ background: "black", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  black" }}
            // date="2011 - present"
            iconStyle={{ background: "black", color: "#fff" }}
            icon=<img src={icon22} alt="" className="image-roadmap" />
          >
            <h1
              className="horizontal-timeline-element-title"
              style={{ color: "#C91078" }}
            >
              Q3 2022
            </h1>

            <p>
              - Minting of XAUS NFTs on Goerli Testnet <br /> <br />
              - Launch of XAUS NFT Discord Channel <br /> <br />
              - Minting of first 1000 XAUS NFTs <br /> <br />
            </p>
          </horizontaltimelineElement>
          <horizontaltimelineElement
          className="horizontal-timeline-element--work"
          contentStyle={{ background: "black", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  black" }}
          // date="2011 - present"
          iconStyle={{ background: "black", color: "#fff" }}
          icon=<img src={icon22} alt="" className="image-roadmap" />
        >
          <h1
            className="horizontal-timeline-element-title"
            style={{ color: "#C91078" }}
          >
            Q4 2022-23
          </h1>

          <p>
            - Development and launch of GCex NFT Marketplace <br /> <br />
            - Minting of next 2500 XAUS NFTs on GCex NFT Marketplace <br /> <br />
            - Promotion of Malaysian art &amp; artists on GCex NFT Marketplace <br /> <br />
          </p>
        </horizontaltimelineElement>
        </horizontaltimeline>
      </div>
    </section>
  );
}

export default Timeline;
