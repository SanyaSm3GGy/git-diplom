import React from 'react';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

import Container from 'react-bootstrap/Container';

const HeaderMain = () => {
  return (
    <Container>
      <Nav className="justify-content-center" bg="#2ad1c5">
        <div className="nav-link">
          <Link to="/catalog"> Онлайн заказ </Link>
        </div>
        <div className="nav-link">
          <Link to="/map"> Аптеки </Link>
        </div>
        <div className="nav-link">
          <Link to="/"> Покупателям </Link>
        </div>
        <div className="nav-link">
          <Link to="/"> Сотрудничество </Link>
        </div>
        <div className="nav-link">
          <Link to="/"> Проекты </Link>
        </div>
        <div className="nav-link">
          <Link to="/stock"> Акции </Link>
        </div>
        <div className="nav-link">
          <Link to="/info"> О компании </Link>
        </div>
      </Nav>
    </Container>
  );
};
export default HeaderMain;
