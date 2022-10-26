import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar1() {
  return (
    <section className="nav-section">
      <div className="container-fluid">
        <Navbar expand="lg" style={{ backgroundColor: "#000000" }}>
          <Container fluid>
            <Navbar.Brand href="#home">
              {" "}
              {/*     <a className="navbar-brand" href="#">
                <img
                  src="https://cdn2.bttcdn.com/2e4add5483abf2ff/e2bc39a2d59c627c24ff83406d75d1a6.png"
                  alt=""
                  width="150px"
                />
              </a> */}
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              style={{
                background: "#0064f0",
                // backgroundImage:
                //   "linear-gradient( to right, #d01498, #647ecb, #647ecb, #d01498 )",
              }}
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto" id="navbarSupportedContent">
                <Nav.Link href="/">
                  {" "}
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link to="#link">
                  {" "}
                  <Link to="/magician" className="nav-link">
                    About
                  </Link>
                </Nav.Link>
                <Nav.Link to="#link">
                  {" "}
                  <Link className="nav-link" to="/purpose">
                    Features
                  </Link>
                </Nav.Link>{" "}
                <Nav.Link to="#link">
                  {" "}
                  <Link className="nav-link" to="/buy">
                    How to Buy
                  </Link>
                </Nav.Link>{" "}
                <Nav.Link to="#link">
                  {" "}
                  <Link className="nav-link" to="/faq">
                    How to Redeem
                  </Link>
                </Nav.Link>
                <Nav.Link to="#link">
                  {" "}
                  <Link className="nav-link" to="/roadmap">
                    Roadmap
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <Link to="/bid" className="nav-link">
                    Bid
                  </Link>
                </Nav.Link>
                {/* <Nav.Link href="#link">
                  {" "}
                  <a className="nav-link" href="#footer">
                    Socials
                  </a>
                </Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </section>
  );
}

export default Navbar1;
