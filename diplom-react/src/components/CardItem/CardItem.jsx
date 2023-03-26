import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardItem = ({ name, price, img, have, description1, description2, description3 }) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description1}
            <br />
            {description2}
            <br />
            {description3}
            <br />
          </Card.Text>
          <Card.Text>{have}</Card.Text>
          <Button className="button">{price}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardItem;
