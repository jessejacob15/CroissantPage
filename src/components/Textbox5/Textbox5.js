import "./Textbox5.css";
import ListGroup from "react-bootstrap/ListGroup";

const Textbox5 = () => {
  return (
    <div className="squareBullet-test">
      <p className="textBullet-test">
        <ListGroup variant="flush">
          <ListGroup.Item className="bulletTitle">Tokenomics</ListGroup.Item>
          <ListGroup.Item className="bulletItem">
            <h3 className="bakery-info">4% liquidity pool</h3>
          </ListGroup.Item>
          <ListGroup.Item className="bulletItem">
            <h3 className="bakery-info">4% croissant fund </h3>
          </ListGroup.Item>
          <ListGroup.Item className="bulletItem">
            <h3 className="bakery-info">4% buyback and burns </h3>
          </ListGroup.Item>
          <ListGroup.Item className="bulletItem">
            <h3 className="bakery-info">12% total </h3>
          </ListGroup.Item>
          <ListGroup.Item className="bulletItem">
            *subject to change as we increase liquidity
          </ListGroup.Item>
        </ListGroup>
      </p>
    </div>
  );
};

export default Textbox5;
