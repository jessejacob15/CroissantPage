import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" className="myNav" fixed="top">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="https://t.me/croissantdao" target="_blank">
                <h1>Telegram</h1>
              </Nav.Link>
              <Nav.Link href="https://vm.tiktok.com/ZTdxousAF/" target="_blank">
                <h1>TikTok</h1>
              </Nav.Link>
              <Nav.Link href="https://twitter.com/CroissantDAO" target="_blank">
                <h1>Twitter</h1>
              </Nav.Link>
              <Nav.Link
                href="https://dexscreener.com/cronos/0xd4bdc69abbb9995f67f0306d19bd3fc1a0ccef5e"
                target="_blank"
              >
                <h1>Chart</h1>
              </Nav.Link>
              <Nav.Link href="https://croissantdao.com/CroissantDao.pdf">
                <h1>Whitepaper</h1>
              </Nav.Link>
              <Nav.Link
                href="https://mm.finance/swap?outputCurrency=0xae443ed39257d1346b0c71b5bc258afd5bcd7ce8"
                target="_blank"
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
