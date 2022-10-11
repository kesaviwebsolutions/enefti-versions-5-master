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

function App() {
  return (
    <div className="App">
      <Headernav />
      <Navbar1 />
      <Nft />
      {/* <Slider /> */}
      {/* <Main/> */}
      <Magician />
      {/* <Toyslider /> */}
      <Purpose />
      <Numbers />
      <Holders />
      {/* <Timeline /> */}
      <Horizontalroadmap />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
