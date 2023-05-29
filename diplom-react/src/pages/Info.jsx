import React from 'react';
import Corousel1 from '../components/corousel/Corousel1';
import { Row } from 'react-bootstrap';
import Img1 from '../assets/img/41.jpg';
import Img2 from '../assets/img/42.jpg';
import Img3 from '../assets/img/43.jpg';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
const Info = () => {
  return (
    <>
      <Container>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Главная</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              О компании
            </li>
          </ol>
        </nav>
        <Corousel1 />
        <div className="infoBlock">
          <h2>Преимущества</h2>
          <Row className="justify-content-center">
            <div className="card col-3">
              <img src={Img1} alt="image1" />
              <div className="card-body">
                <h5 className="card-title">Ассортимент более 60000 товаров</h5>
              </div>
            </div>
            <div className="card  col-3">
              <img src={Img2} alt="image2" />
              <div className="card-body">
                <h5 className="card-title">Акции и скидки</h5>
              </div>
            </div>
            <div className="card col-3">
              <img src={Img3} alt="image3" />
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
export default Info;
