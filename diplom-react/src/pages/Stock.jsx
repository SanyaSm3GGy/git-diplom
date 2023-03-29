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
        <div>
          <h1>
            Акции <Badge bg="secondary">Новинка</Badge>
          </h1>
        </div>
      </Container>
    </>
  );
};
export default Stock;
