import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar12() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="./">IoT Gases</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="./">Dashboard</Nav.Link>
            <Nav.Link href="./Location">Location</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Navbar12;