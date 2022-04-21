import "./Textbox7.css";
import ListGroup from "react-bootstrap/ListGroup";

const Textbox7 = () => {
  return (
    <div className="squareBullet">
      <p className="textBullet">
        <ListGroup variant="flush">
          <ListGroup.Item className="bulletTitle">
            CROissant Press
          </ListGroup.Item>
          <ListGroup.Item className="bulletItem">
            <div className="bakery">
              <img src="https://i.imgur.com/hYuV3xI.png" className="bakIcon" />
              <h2 className="bakery-sub">
                <a
                  href="https://diariodoporto.com.br/criptomoeda-distribui-croissant-no-rio-e-em-ny/"
                  className="bakery-sub"
                >
                  Diário do Porto🇧🇷
                </a>
              </h2>
              <h3 className="bakery-info">
                Diário do Porto, a news outlet in Brazil, published an article
                on April 19th covering our giveaway in Rio de Janiero. Read all
                about it!
              </h3>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </p>
    </div>
  );
};

export default Textbox7;
