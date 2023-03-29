import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NotFound from '../../assets/img/NotFound.jpg';

const CardItem = ({ name, price, img, have, description1, description2, description3 }) => {
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
            Производитель: {description1}
            <br />
            Форма выпуска: {description2}
            <br />
            Кол-во в упаковке: {description3}
            <br />
          </Card.Text>
          <Card.Text>В наличии: {have}</Card.Text>
          <Button className="button">{price}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardItem;
