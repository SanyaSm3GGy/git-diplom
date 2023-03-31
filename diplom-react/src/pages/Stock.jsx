import React from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { Card } from "react-bootstrap";
const Stock = () => {
  return (
    <>
      <Container>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Главная</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Каталог
            </li>
          </ol>
        </nav>
        <div className="infoBlock">
          <h1>
            {" "}
            Акции <Badge bg="secondary">Новинка</Badge>{" "}
          </h1>
          <Row className="justify-content-center stock_cards">
            <Card className="col-3">
            <Link to = "/">
              <Card.Img
                variant="top"
                src="https://12bb6ecf-bda5-4c99-816b-12bda79f6bd9.selcdn.net/upload/site_specials/c6/23/c62369c1da01c9fbd779f8b02b7e3dbeea2571c362de62e39446bf85c79b81f8.jpg"
              />
              <Card.Title> У Данила ДОМА! </Card.Title>
              <Card.Text> М.горького Пр-Кт, 38 корпус 2 </Card.Text>
            </Link> </Card> 
            <Card className="col-3">
            <Link to = "/">
              <Card.Img 
                variant="top"
                src="https://12bb6ecf-bda5-4c99-816b-12bda79f6bd9.selcdn.net/upload/site_specials/b0/69/b069200ff1e11e0d7728bccfdb6179f8c0002381d9b4ac6e18231fe467a1ce8a.jpg"
              />
              <Card.Title> У Данила ДОМА! </Card.Title>
              <Card.Text> М.горького Пр-Кт, 38 корпус 2 </Card.Text>
            </Link>
            </Card>
            <Card className="col-3">
            <Link to = "/">
              <Card.Img
                variant="top"
                src="https://12bb6ecf-bda5-4c99-816b-12bda79f6bd9.selcdn.net/upload/site_specials/b6/7e/b67e3c4168b45ff5f119e653bcf3b3508488b1522d33011a17600d7709523878.jpg"
              />
              <Card.Title> У Данила ДОМА! </Card.Title>
              <Card.Text> М.горького Пр-Кт, 38 корпус 2 </Card.Text>
              </Link>
            </Card>
            <Card className="col-3">
            <Link to = "/">
              <Card.Img
                variant="top"
                src="https://12bb6ecf-bda5-4c99-816b-12bda79f6bd9.selcdn.net/upload/site_specials/b6/7e/b67e3c4168b45ff5f119e653bcf3b3508488b1522d33011a17600d7709523878.jpg"
              />
              <Card.Title> У Данила ДОМА! </Card.Title>
              <Card.Text> М.горького Пр-Кт, 38 корпус 2 </Card.Text>
              </Link>
            </Card>
            <Card className="col-3">
            <Link to = "/">
              <Card.Img
                variant="top"
                src="https://12bb6ecf-bda5-4c99-816b-12bda79f6bd9.selcdn.net/upload/site_specials/b6/7e/b67e3c4168b45ff5f119e653bcf3b3508488b1522d33011a17600d7709523878.jpg"
              />
              <Card.Title> У Данила ДОМА! </Card.Title>
              <Card.Text> М.горького Пр-Кт, 38 корпус 2 </Card.Text>
              </Link>
            </Card>
            <Card className="col-3">
            <Link to = "/">
              <Card.Img
                variant="top"
                src="https://12bb6ecf-bda5-4c99-816b-12bda79f6bd9.selcdn.net/upload/site_specials/b6/7e/b67e3c4168b45ff5f119e653bcf3b3508488b1522d33011a17600d7709523878.jpg"
              />
              <Card.Title> У Данила ДОМА! </Card.Title>
              <Card.Text> М.горького Пр-Кт, 38 корпус 2 </Card.Text>
              </Link>
            </Card>
          </Row>
        </div>
      </Container>
    </>
  );
};
export default Stock;