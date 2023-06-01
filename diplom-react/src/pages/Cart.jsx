import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Cart = () => {
  return (
    <Container>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Главная</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Корзина
          </li>
        </ol>
      </nav>
      <h1 className="bold-title">Корзина</h1>
    </Container>
  );
};

export default Cart;
