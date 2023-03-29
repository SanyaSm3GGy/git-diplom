import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import FilterCard from '../../components/filterCard/FilterCard';
import CardItem from '../../components/CardItem/CardItem';
import { Link } from 'react-router-dom';

const MamaIMalish = () => {
  const items = [
    {
      name: 'Аспирин',
      price: '200$',
      img: 'https://12bb6ecf-bda5-4c99-816b-12bda79f6bd9.selcdn.net/upload//Photo_Tovar/1893699_5_1632177758.jpeg',
      have: '20',
      description1: 'ВТФ, Россия',
      description2: 'капсулы',
      description3: '30 шт.',
    },
    { name: 'На столе', price: 2 },
    { name: 'Намекает', price: 2 },
    { name: 'Жизнь', price: 2 },
    { name: 'Не', price: 2 },
    { name: 'Напрастна', price: 2 },
    { name: 1, price: 2 },
    { name: 2, price: 2 },
    { name: 3, price: 2 },
    { name: 4, price: 2 },
    { name: 5, price: 2 },
    { name: 6, price: 2 },
  ];
  return (
    <>
      <Container>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Главная</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/catalog">Каталог</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Мама и малыш
            </li>
          </ol>
        </nav>
        <Row>
          <Col className="col-md-3 col-xs-12">
            <FilterCard />
          </Col>
          <Col md="8">
            <Row>
              {items.map((obj, index) => (
                <Col md="4" key={index}>
                  <CardItem key={index} {...obj} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MamaIMalish;
