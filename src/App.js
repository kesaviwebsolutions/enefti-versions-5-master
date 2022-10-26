import logo from "./logo.svg";
import "./App.css";
import Headernav from "./Components/Headernav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import {
  DissconnectWallet,
  GetChainId,
  getUserAddress,
  Metalogin,
  WalletConnectlogin,
  webProvide,
} from "./Connection/Wallets";
import Bid from "./Components/Pages/Bid";
import Home from "./Components/Pages/Home";

// const bidurl = "http://localhost:3032"
const bidurl = "https://bid.ap.ngrok.io"

function App() {
  const web3 = webProvide();
  const [acount, setAccount] = useState();

  useEffect(() => {
    const init = async () => {
      const wallet = window.localStorage.getItem("wallet");
      if (wallet) {
        Metamask();
      }
      const id = await GetChainId();
      console.log("Chain ID is ", id);
      // if (Number(id) != 1) {
      //   await window.ethereum.request({
      //     method: "wallet_switchEthereumChain",
      //     params: [{ chainId: "0x1" }], // chainId must be in hexadecimal numbers
      //   });
      // }
    };

    init();
  }, []);

  try {
  } catch (error) {}
  const walletConnectlogin = async () => {
    await WalletConnectlogin();
    const add = await getUserAddress();
    setAccount(add);
  };

  const Metamask = async () => {
    await Metalogin();
    const add = await getUserAddress();
    setAccount(add);
    window.localStorage.setItem("wallet", "Metamask");
  };

  const Dissconnect = async () => {
    await DissconnectWallet();
    setAccount(undefined);
    window.localStorage.removeItem("wallet");
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
      <Router>
        <Headernav
          Metamask={Metamask}
          walletConnectlogin={walletConnectlogin}
          account={acount}
          Dissconnect={Dissconnect}
        />
        <Navbar1 />

        <Routes>
          <Route path="/" element={<Home account={acount} />} />
          <Route path="/bid" element={<Bid account={acount} url={bidurl}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
