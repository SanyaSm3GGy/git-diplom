import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AdminCardItem = ({ id, name, img, manufactureform, quantity, price, type }) => {
  const [imgState, setImgState] = React.useState(img);
  const [nameState, setName] = React.useState(name);
  const [manufactureformState, setManufactureformState] = React.useState(manufactureform);
  const [quantityState, setQuantityState] = React.useState(quantity);
  const [priceState, setPriceState] = React.useState(price);

  const [item, setItem] = React.useState({});

  const LoadItem = () => {
    setItem({
      name: nameState,
      img: imgState,
      manufactureform: manufactureformState,
      quantity: quantityState,
      price: priceState,
    });
    console.log(item);
  };

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <input
          value={imgState}
          onChange={(event) => {
            setImgState(event.target.value);
          }}></input>
        <Card.Body className="justify-content-center">
          <Card.Title className="bold-title">
            <input
              value={nameState}
              onChange={(event) => {
                setName(event.target.value);
              }}></input>
          </Card.Title>
          <Card.Text>
            Производитель / Форма выпуска:
            <input
              value={manufactureformState}
              onChange={(event) => {
                setManufactureformState(event.target.value);
              }}></input>
            Кол-во в упаковке:{' '}
            <input
              value={quantityState}
              onChange={(event) => {
                setQuantityState(event.target.value);
              }}></input>
            Цена:
            <input
              value={priceState}
              onChange={(event) => {
                setPriceState(event.target.value);
              }}></input>
          </Card.Text>
          <Button className="button" onClick={LoadItem}>
            Загрузить изменения...
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdminCardItem;
