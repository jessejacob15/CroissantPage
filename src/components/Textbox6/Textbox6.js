import "./Textbox6.css";
import ListGroup from "react-bootstrap/ListGroup";

const Textbox6 = ({ balance }) => {
  return (
    <div className="squareBullet-test">
      <p className="textBullet-test">
        <ListGroup variant="flush">
          <ListGroup.Item className="bulletTitle">
            Croissant Wallet Balance
          </ListGroup.Item>
          <ListGroup.Item className="bulletItem">
            <h3 className="bakery-info">Balance: {balance} CRO </h3>
          </ListGroup.Item>
          <ListGroup.Item className="bulletItem">
            <h3 className="bakery-info">Total Croissants Donated: 1400 🥐 </h3>
          </ListGroup.Item>
          <ListGroup.Item className="bulletItem">
            <h3 className="bakery-info">
              Address to donate directly to the fund:
              0xf191041b58924A3Cc6a79CD637749C083E7328CE{" "}
            </h3>
          </ListGroup.Item>
        </ListGroup>
      </p>
    </div>
  );
};

export default Textbox6;
