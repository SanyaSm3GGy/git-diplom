import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
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
<h1> Акции <Badge bg="secondary">Новинка</Badge> </h1>
<Row className="justify-content-center">
  <div className="card col-3">
    <img src={'https://12bb6ecf-bda5-4c99-816b-12bda79f6bd9.selcdn.net/upload/site_specials/c6/23/c62369c1da01c9fbd779f8b02b7e3dbeea2571c362de62e39446bf85c79b81f8.jpg'} alt="image1" />
    <div className="card-body">
      <h5 className="card-title">Ассортимент более 60000 товаров</h5>
    </div>
  </div>
  <div className="card  col-3">
    <img src={'https://12bb6ecf-bda5-4c99-816b-12bda79f6bd9.selcdn.net/upload/site_specials/b0/69/b069200ff1e11e0d7728bccfdb6179f8c0002381d9b4ac6e18231fe467a1ce8a.jpg'} alt="image2" />
    <div className="card-body">
      <h5 className="card-title">Акции и скидки</h5>
    </div>
  </div>
  <div className="card col-3">
    <img src={'https://12bb6ecf-bda5-4c99-816b-12bda79f6bd9.selcdn.net/upload/site_specials/b6/7e/b67e3c4168b45ff5f119e653bcf3b3508488b1522d33011a17600d7709523878.jpg'} alt="image3" />
    <div className="card-body">
      <h5 className="card-title">2 аптеки в одном регионе</h5>
    </div>
  </div>
   </Row>
   </div>
   </Container> 
   </>         
);
};
export default Stock;

