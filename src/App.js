import logo from "./logo.svg";
import "./App.css";
import Headernav from "./Components/Headernav";

import Magician from "./Components/Magician";
import Purpose from "./Components/Purpose";
import Numbers from "./Components/Numbers";
import Holders from "./Components/Holders";
// import Main from './Components/Main';
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
// import Slider from "./Components/Slider";
// import Toyslider from "./Components/Toyslider";
import Timeline from "./Components/Timeline";
import Nft from "./Components/Nft";
import Navbar1 from "./Components/Navbar1";
import Horizontalroadmap from "./Components/Pages/Horizontalroadmap";
import { useEffect, useState } from "react";
import { DissconnectWallet, GetChainId, getUserAddress, Metalogin, WalletConnectlogin, webProvide } from "./Connection/Wallets";

const url = "https://reffer.ap.ngrok.io";

function App() {
  const web3 = webProvide();
  const [acount, setAccount] = useState();

  useEffect(() => {
    const init = async () => {
     const wallet = window.localStorage.getItem("wallet")
      if(wallet){
        Metamask();
      }
      const id = await GetChainId();
      console.log("Chain ID is ",id);
    };

    init();

  }, []);

  try {
  } catch (error) {
    
  }
  const walletConnectlogin = async()=>{
     await WalletConnectlogin()
     const add = await getUserAddress();
     setAccount(add);
  }

  const Metamask = async () => {
    await Metalogin();
    const add = await getUserAddress();
    setAccount(add);
    window.localStorage.setItem("wallet","Metamask")
  };

  const Dissconnect = async () => {
    await DissconnectWallet();
    setAccount(undefined);
    window.localStorage.removeItem("wallet")
  };

  try {
    web3.on("accountsChanged", (accounts) => {
      setAccount(accounts[0]);
    });
  } catch (error) {
    // console.log(error)
  }

  try {
    web3.on("chainChanged", function (accounts) {
      window.location.reload();
    });
  } catch (error) {
    // console.log(error)
  }



  return (
    <div className="App">
      <Headernav 
       Metamask={Metamask}
       walletConnectlogin={walletConnectlogin}
       account={acount}
       Dissconnect={Dissconnect}
      />
      <Navbar1 />
      <Nft 
        url={url}
        account={acount}
      />
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

export default App;
