import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navigation = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#home">
                <h1>Telegram</h1>
              </Nav.Link>
              <Nav.Link href="#link">
                <h1>Twitter</h1>
              </Nav.Link>
              <Nav.Link href="#home">Whitepaper—Coming Soon</Nav.Link>
              <Nav.Link href="#link">Chart—Coming Soon</Nav.Link>
              <Nav.Link href="#home">Buy—Coming Soon</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
