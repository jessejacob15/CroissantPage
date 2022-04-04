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
              <Nav.Link href="https://t.me/crossiantportal">
                <h1>Telegram</h1>
              </Nav.Link>
              <Nav.Link href="https://twitter.com/CroissantDAO">
                <h1>Twitter</h1>
              </Nav.Link>
              <Nav.Link href="#">Whitepaper—Coming Soon</Nav.Link>
              <Nav.Link href="#">Chart—Coming Soon</Nav.Link>
              <Nav.Link href="#">Buy—Coming Soon</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
