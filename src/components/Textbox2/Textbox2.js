import "./Textbox2.css";
import ListGroup from "react-bootstrap/ListGroup";

const Textbox2 = () => {
  return (
    <div className="squareBullet">
      <p className="textBullet">
        <ListGroup variant="flush">
          <ListGroup.Item className="bulletTitle">Bakery DAO</ListGroup.Item>
          <ListGroup.Item className="bulletItem">
            Food token mixing creativity with philanthropy
          </ListGroup.Item>
          <ListGroup.Item className="bulletItem">
            Trusted developer who has deployed contracts that have been listed
            on Coin Market Cap and Coin Gecko
          </ListGroup.Item>
          <ListGroup.Item className="bulletItem">
            Portion of initial royalties will go to charity
          </ListGroup.Item>
          <ListGroup.Item className="bulletItem">
            NFT collection already designed
          </ListGroup.Item>
          <ListGroup.Item className="bulletItem">
            Holders will have voting rights on token dev, p2e games,
            initiatives, priorities on next nft collection
          </ListGroup.Item>
        </ListGroup>
      </p>
    </div>
  );
};

export default Textbox2;

// Bakery DAO
