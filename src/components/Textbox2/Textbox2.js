import "./Textbox2.css";
import ListGroup from "react-bootstrap/ListGroup";

const Textbox2 = () => {
  return (
    <div className="squareBullet">
      <p className="textBullet">
        <ListGroup variant="flush">
          <ListGroup.Item className="bulletTitle">Bakery DAO</ListGroup.Item>
          <ListGroup.Item className="bulletItem">
            As members of croissant DAO, holders will have voting rights on
            token development, p2e games, initiatives, priorities on next NFT
            collection
          </ListGroup.Item>
          <ListGroup.Item className="bulletItem">
            NFT royalties will go to charity
          </ListGroup.Item>
        </ListGroup>
      </p>
    </div>
  );
};

export default Textbox2;

// Bakery DAO
