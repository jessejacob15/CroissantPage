import "./Textbox3.css";
import ListGroup from "react-bootstrap/ListGroup";

const Textbox3 = () => {
  return (
    <div className="squareBullet">
      <p className="textBullet">
        <ListGroup variant="flush">
          <ListGroup.Item className="bulletTitle">
            Croissant Purveyors
          </ListGroup.Item>
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

export default Textbox3;

// Bakery DAO
