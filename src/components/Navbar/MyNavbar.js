import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" className="myNav">
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
              <Nav.Link
                href="https://mm.finance/swap?outputCurrency=0xae443ed39257d1346b0c71b5bc258afd5bcd7ce8"
                className="buyBox"
              >
                <div className="buyButton">Buy</div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
