import "./Textbox4.css";
import ListGroup from "react-bootstrap/ListGroup";

const Textbox4 = () => {
  return (
    <div className="squareBullet">
      <p className="textBullet">
        <ListGroup variant="flush">
          <ListGroup.Item className="bulletTitle">
            Croissant Donations
          </ListGroup.Item>
          <ListGroup.Item className="bulletItem">
            <div className="bakery">
              <img src="https://i.imgur.com/p3QJ6mJ.png" className="bakIcon" />
              <h2 className="bakery-sub">
                <a href="https://www.bowery.org/" className="bakery-sub">
                  Bowery Mission🇺🇸
                </a>
              </h2>
              <h3 className="bakery-info">
                The Bowery Mission is called to minister in the New York metro
                area to men, women, and children caught in the cycles of
                poverty, hopelessness and dependencies of many kinds, and to see
                their lives transformed to hope, joy, lasting productivity and
                eternal life through the power of Jesus Christ.
              </h3>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="bulletItem">
            <div className="bakery">
              <img src="https://i.imgur.com/x1poyeY.png" className="bakIcon" />
              <h2 className="bakery-sub">
                <a
                  href="https://www.nycservice.org/organizations/3202"
                  className="bakery-sub"
                >
                  Friendly Hands Ministry🇺🇸
                </a>
              </h2>
              <h3 className="bakery-info">
                Friendly Hands Ministry, Inc. is a 501(c)3 community based
                organization whose mission it is to enrich the lives of East
                Harlem residents by helping to enhance community enrichment and
                growth.
              </h3>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="bulletItem">
            <div className="bakery">
              <img src="https://i.imgur.com/kQVnD5y.png" className="bakIcon" />
              <h2 className="bakery-sub">
                <a
                  href="https://www.foodbanknyc.org/community-kitchen"
                  className="bakery-sub"
                >
                  Community Kitchen of West Harlem🇺🇸
                </a>
              </h2>
              <h3 className="bakery-info">
                The Community Kitchen has served the Harlem community since
                1984. They offer low-income New Yorkers a broad range of
                interrelated programs to alleviate hunger, including a soup
                kitchen that serves hot meals, a choice-style food pantry and a
                Meals-on-Heels meal-delivery program.
              </h3>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="bulletItem">
            <div className="bakery">
              <img src="https://i.imgur.com/bLpKgoA.png" className="bakIcon" />
              <h2 className="bakery-sub">
                <a
                  href="https://www.facebook.com/ambulatoriodaprovidencia/"
                  className="bakery-sub"
                >
                  Ambulatório da Providência🇧🇷
                </a>
              </h2>
              <h3 className="bakery-info">
                Ambulatório da Providência was created in 1989 and aims to
                assist the most vulnerable population of Rio de Janiero. They
                aid those without any source of income and/or with difficulties
                in reaching out to public health systems. Ambulatório da
                Providência relies on the help of volunteers who work so that
                the medical, psychological, and religious needs of their
                patients are met.
              </h3>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="bulletItem">
            <div className="bakery">
              <img src="https://i.imgur.com/MuF09Ch.jpg" className="bakIcon" />
              <h2 className="bakery-sub">
                <a
                  href="https://www.sementesdoverbo.org/"
                  className="bakery-sub"
                >
                  Sementes do Verbo🇧🇷
                </a>
              </h2>
              <h3 className="bakery-info">
                The Community is present in seven countries, with different
                houses and missions. It brings together members from different
                states of life (single, consecrated, couples, families,
                priests...). Directed and organized by nuns, the religious
                project relies on partners and donations to keep helping those
                that have no ceiling above their heads, no food on their tables
                and no Christ in their hearts.
              </h3>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </p>
    </div>
  );
};
export default Textbox4;
