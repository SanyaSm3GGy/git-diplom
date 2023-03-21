import React from 'react';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

import Container from 'react-bootstrap/Container';

const HeaderMain = () => {
  return (
    <Container>
      <Nav className="justify-content-center" bg="#2ad1c5">
        <Nav.Item>
          <Nav.Link>
            <Link to="/catalog"> Онлайн заказ </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/"> Аптеки </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/"> Покупателям </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/"> Сотрудничество </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/"> Проекты </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/"> Акции </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/info"> О компании </Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};
export default HeaderMain;
