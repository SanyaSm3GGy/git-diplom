import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NotFound from '../../assets/img/NotFound.jpg';
import { Link } from 'react-router-dom';

const CardItem = ({ id, name, img, manufactureform, quantity, price }) => {
  const loadedImage = () => {
    if (img) {
      return img;
    } else {
      return NotFound;
    }
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
          </Card.Text>
          <Button className="button button-cart">
            Добавить <Link className="item-quantity"> 0</Link>
          </Button>
          <Button className="button-gray button-cart">-</Button>
          <br />
          <Link className="price">{price} ₽</Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardItem;
