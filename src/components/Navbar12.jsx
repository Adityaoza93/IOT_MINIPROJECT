import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/iotlogo.png";

function Navbar12() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#6198FF" }} variant="dark">
        <Container>
          <Navbar.Brand href="./">
            <img src={logo} alt="IOT" style={{ marginRight: "1.25rem" }} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="./Dashboard">Dashboard</Nav.Link>
            <Nav.Link href="./Location">Location</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar12;
