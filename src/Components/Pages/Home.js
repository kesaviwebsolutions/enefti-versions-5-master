import React,{useEffect} from "react";
import Footer from "../Footer";
import Holders from "../Holders";
import Magician from "../Magician";
import Nft from "../Nft";
import Numbers from "../Numbers";
import Purpose from "../Purpose";
import Timeline from "../Timeline";
import Horizontalroadmap from "./Horizontalroadmap";
import Faq from "../Faq";
import { GetChainId } from "../../Connection/Wallets";

const url = "https://reffer.ap.ngrok.io";
export default function Home({acount,url}) {

  useEffect(() => {
    const init = async () => {
      const id = await GetChainId();
      console.log("Chain ID is ", id);
      if (Number(id) != 1) {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x1" }], // chainId must be in hexadecimal numbers
        });
      }
    };

    init();
  }, []);
    
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
