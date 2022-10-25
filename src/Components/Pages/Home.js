import React from "react";
import Footer from "../Footer";
import Holders from "../Holders";
import Magician from "../Magician";
import Nft from "../Nft";
import Numbers from "../Numbers";
import Purpose from "../Purpose";
import Timeline from "../Timeline";
import Horizontalroadmap from "./Horizontalroadmap";
import Faq from "../Faq";

const url = "https://reffer.ap.ngrok.io";
export default function Home({acount,url}) {
    
  return (
    <div>
      {" "}
      <Nft url={url} account={acount} />
      {/* <Slider /> */}
      {/* <Main/> */}
      <Magician />
      {/* <Toyslider /> */}
      <Purpose />
      <Numbers />
      <Holders />
      <Timeline />
      <Horizontalroadmap />
      <Faq />
      <Footer />
    </div>
  );
}
