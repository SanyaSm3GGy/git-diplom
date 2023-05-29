import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Col, Row, Container } from 'react-bootstrap';
import FilterCard from '../../components/filterCard/FilterCard';
import CardItem from '../../components/CardItem/CardItem';

const Cosmetics = () => {
  const [item, setItem] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadUp() {
      try {
        const { data } = await axios.get(`http://aptekaapi.ru/class2.php`);
        setItem(data);
      } catch (error) {
        console.log('error');
      }

      window.scrollTo(0, 0); //скролл в начало страницы
    }
    loadUp();
    setIsLoading(false);
  }, []);
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
              Косметика
            </li>
          </ol>
        </nav>
        <Row>
          <Col className="col-md-3 col-xs-12">
            <FilterCard />
          </Col>
          <Col md="8">
            <Row>
              {isLoading
                ? [...new Array(6).keys()].map((index) => (
                    <Col md="4" key={index}>
                      <CardItem key={index} />
                    </Col>
                  ))
                : item.map((obj, index) => (
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

export default Cosmetics;
