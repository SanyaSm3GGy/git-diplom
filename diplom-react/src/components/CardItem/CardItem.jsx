import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NotFound from '../../assets/img/NotFound.jpg';

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
            <br /> {manufactureform}
            <br />
            <br />
            Кол-во в упаковке: {quantity}
            <br />
          </Card.Text>
          <Button className="button">{price} ₽</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardItem;
