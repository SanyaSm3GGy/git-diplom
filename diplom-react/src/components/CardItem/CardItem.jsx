import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NotFound from '../../assets/img/NotFound.jpg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addItem, removeItem } from '../../redux/slices/cartSlice';

const CardItem = ({ id, name, img, manufactureform, quantity, price }) => {
  const items = useSelector((state) => state.cart.items.find((obj) => obj.id === id));

  const addedCount = items ? items.count : 0;

  const onClickRemove = () => {
    dispatch(removeItem(id));
  };

  const loadedImage = () => {
    if (img) {
      return img;
    } else {
      return NotFound;
    }
  };
  const dispatch = useDispatch();
  const onClickAdd = () => {
    const item = {
      id,
      name,
      img,
      price,
    };
    dispatch(addItem(item));
  };
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={loadedImage()} />
        <Card.Body>
          <Card.Title className="bold-title">{name}</Card.Title>
          <Card.Text>
            Производитель / Форма выпуска:
            <br />
            {manufactureform}
            <br />
            <br />
            Кол-во в упаковке: {quantity}
            <br />
            <Link className="price">{price} ₽</Link>
          </Card.Text>
          <Button className="button button-cart" onClick={onClickAdd}>
            Добавить <Link className="item-quantity">{addedCount}</Link>
          </Button>
          <Button className="button-gray button-cart" onClick={onClickRemove}>
            Убрать
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardItem;
