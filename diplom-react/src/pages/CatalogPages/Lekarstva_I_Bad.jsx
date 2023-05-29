import React from 'react';
import axios from 'axios';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import FilterCard from '../../components/filterCard/FilterCard';
import CardItem from '../../components/CardItem/CardItem';

const Lekarstva_i_bad = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const [item, setItem] = React.useState([]);

  React.useEffect(() => {
    async function loadUp() {
      try {
        const { data } = await axios(`http://aptekaapi.ru/class0.php`);
        setItem(data);
      } catch (error) {
        console.log(error);
      }

      window.scrollTo(0, 0); //скролл в начало страницы
      setIsLoading(false);
    }
    loadUp();
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
              Лекарства и БАД
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

export default Lekarstva_i_bad;
