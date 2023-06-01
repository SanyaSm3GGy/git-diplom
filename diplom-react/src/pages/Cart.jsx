import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import CardItem from '../components/CardItem/CardItem';
import EmptyCart from '../assets/img/empty-cart.png';

const Cart = () => {
  const { items, totalprice, cartEmpty } = useSelector((state) => state.cart);

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
      <Row>
        {cartEmpty ? (
          <div className="cart-empty-massage">
            <h1>Ваша корзина пуста</h1>
            <img src={EmptyCart} alt="123" />
          </div>
        ) : (
          <>
            <Link className="clear-cart">Отчистить корзину X</Link>
            {items.map((obj, index) => (
              <Col md="4" key={index}>
                <CardItem key={index} {...obj} />
              </Col>
            ))}
            <h2 className="bold-title">Итого: {totalprice} ₽</h2>
            <Link className="button">Оплатить</Link>
          </>
        )}
      </Row>
    </Container>
  );
};

export default Cart;
