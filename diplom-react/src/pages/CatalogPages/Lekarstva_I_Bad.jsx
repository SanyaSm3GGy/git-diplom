import React from 'react';
import { Col, Row, Container, Breadcrumb } from 'react-bootstrap';
import FilterCard from '../../components/filterCard/FilterCard';
import CardItem from '../../components/CardItem/CardItem';
import { Link } from 'react-router-dom';

const Lekarstva_i_bad = () => {
  const items = [
    {
      name: 'Аспирин',
      price: '200$',
      img: 'https://12bb6ecf-bda5-4c99-816b-12bda79f6bd9.selcdn.net/upload//Photo_Tovar/1893699_5_1632177758.jpeg',
      have: 'В наличии: 20',
      description1: 'Производитель: ВТФ, Россия',
      description2: 'Форма выпуска: капсулы',
      description3: 'Кол-во в упаковке: 30 шт.',
    },
    { name: 'На столе', price: 2 },
    { name: 'Намекает', price: 2 },
    { name: 'Жизнь', price: 2 },
    { name: 'Не', price: 2 },
    { name: 'Напрастна', price: 2 },
    { name: 1, price: 2 },
    { name: 1, price: 2 },
    { name: 1, price: 2 },
    { name: 1, price: 2 },
    { name: 1, price: 2 },
    { name: 1, price: 2 },
  ];
  return (
    <>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Главная</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/catalog">Каталог</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Лекарства и БАД</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col className="col-md-3 col-xs-12">
            <FilterCard />
          </Col>
          <Col md="8">
            <Row>
              {items.map((obj, id) => (
                <Col md="4">
                  <CardItem key={id} {...obj} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Lekarstva_i_bad;
