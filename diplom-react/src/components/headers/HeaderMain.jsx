import React from 'react';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

import Container from 'react-bootstrap/Container';

const HeaderMain = () => {
  return (
    <Container>
      <Nav className="justify-content-center" bg="#2ad1c5">
        <Nav.Item>
          <div className="nav-link">
            <Link to="/catalog"> Онлайн заказ </Link>
          </div>
        </Nav.Item>
        <Nav.Item>
          <div className="nav-link">
            <Link to="/"> Аптеки </Link>
          </div>
        </Nav.Item>
        <Nav.Item>
          <div className="nav-link">
            <Link to="/"> Покупателям </Link>
          </div>
        </Nav.Item>
        <Nav.Item>
          <div className="nav-link">
            <Link to="/"> Сотрудничество </Link>
          </div>
        </Nav.Item>
        <Nav.Item>
          <div className="nav-link">
            <Link to="/"> Проекты </Link>
          </div>
        </Nav.Item>
        <Nav.Item>
          <div className="nav-link">
            <Link to="/"> Акции </Link>
          </div>
        </Nav.Item>
        <Nav.Item>
          <div className="nav-link">
            <Link to="/info"> О компании </Link>
          </div>
        </Nav.Item>
      </Nav>
    </Container>
  );
};
export default HeaderMain;
