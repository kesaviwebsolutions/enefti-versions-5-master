import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";

function Navbar1() {
  return (
    <section className="nav-section">
      <div className="container-fluid">
        <Navbar expand="lg" style={{ backgroundColor: "#000000" }}>
          <Container fluid>
            <Navbar.Brand href="#home">
              {" "}
              <a className="navbar-brand" href="#">
                <img
                  src="https://cdn2.bttcdn.com/2e4add5483abf2ff/e2bc39a2d59c627c24ff83406d75d1a6.png"
                  alt=""
                  width="150px"
                />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              style={{ background: "#fff" }}
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto" id="navbarSupportedContent">
                <Nav.Link href="#home">
                  {" "}
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </Nav.Link>
                <Nav.Link href="#link">
                  {" "}
                  <a className="nav-link" href="#magician">
                    About
                  </a>
                </Nav.Link>
                <Nav.Link href="#link">
                  {" "}
                  <a className="nav-link" href="#purpose">
                    Features
                  </a>
                </Nav.Link>{" "}
                <Nav.Link href="#link">
                  {" "}
                  <a className="nav-link" href="#buy">
                    How to Buy
                  </a>
                </Nav.Link>{" "}
                <Nav.Link href="#link">
                  {" "}
                  <a className="nav-link" href="#faq">
                    How to Redeem
                  </a>
                </Nav.Link>
                <Nav.Link href="#link">
                  {" "}
                  <a className="nav-link" href="#roadmap">
                    Roadmap
                  </a>
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
