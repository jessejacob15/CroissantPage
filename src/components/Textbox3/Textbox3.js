import "./Textbox3.css";
import ListGroup from "react-bootstrap/ListGroup";

const Textbox3 = () => {
  return (
    <div className="squareBullet">
      <p className="textBullet">
        <ListGroup variant="flush">
          <ListGroup.Item className="bulletTitle">
            Croissant Bakeries
          </ListGroup.Item>
          <ListGroup.Item className="bulletItem">
            <div className="bakery">
              <img src="https://i.imgur.com/ElGslFC.png" className="bakIcon" />
              <h2 className="bakery-sub">
                <a
                  href="https://twobakeriesandarestaurant.com/la-tropezienne-bakery"
                  className="bakery-sub"
                >
                  La Tropezienne
                </a>
              </h2>
              <h3 className="bakery-info">
                La Tropezienne is a staple bakery in East Harlem, New York.
                Known best for their baguettes with butter & flakey croissants
                of all flavors, the bakery opens at 5:30 am to serve cab drivers
                beginning their shifts. Read the&nbsp;
                <a
                  className="link"
                  href="https://www.nytimes.com/2013/12/01/nyregion/west-african-customers-get-a-taste-of-home-at-la-tropezienne.html"
                >
                  NYT Review
                </a>
              </h3>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="bulletItem">
            <div className="bakery">
              <img src="https://i.imgur.com/xjtbgw4b.png" className="bakIcon" />
              <h2 className="bakery-sub">
                <a href="https://www.cecicelanyc.com/" className="bakery-sub">
                  Ceci Cela
                </a>
              </h2>
              <h3 className="bakery-info">
                Ceci Cela is a family-run French café in New York’s Lower East
                Side, specializing in authentic patisserie that’ll transport you
                to street cafés off the Seine. For over 20 years, celebrated
                French pastry chef and founder, Laurent Dupal, has brought
                decadence and delight to everyday New Yorkers, and has since
                expanded wholesale and delivery operations to share the French
                café experience with guests across the country.
              </h3>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </p>
    </div>
  );
};

export default Textbox3;
