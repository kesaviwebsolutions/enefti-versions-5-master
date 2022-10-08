import logo from './logo.svg';
import './App.css';
import Headernav from './Components/Headernav';
import Navbar from './Components/Navbar';
import Magician from './Components/Magician';
import Purpose from './Components/Purpose';
import Numbers from './Components/Numbers';
import Holders from './Components/Holders';
// import Main from './Components/Main';
import Faq from './Components/Faq';
import Footer from './Components/Footer';
// import Slider from "./Components/Slider";
// import Toyslider from "./Components/Toyslider";
import Timeline from "./Components/Timeline";
import Nft from './Components/Nft';

function App() {
  return (
    <div className="App">
      <Headernav/>
      <Navbar/>
      <Nft/>
      {/* <Slider /> */}
      {/* <Main/> */}
      <Magician/>
      {/* <Toyslider /> */}
      <Purpose/>
      <Numbers/>
      <Holders/>
{/*       <Timeline /> */}
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
