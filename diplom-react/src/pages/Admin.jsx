import React from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import CardItem from '../components/CardItem/CardItem';

const Admin = () => {
  const [item, setItem] = React.useState([]);

  React.useEffect(() => {
    async function loadUp() {
      try {
        const { data } = await axios.get(`https://63cd3f8bd4d47898e3955c33.mockapi.io/item`);
        setItem(data);
      } catch (error) {
        console.log(error);
      }

      window.scrollTo(0, 0); //скролл в начало страницы
    }
    loadUp();
  }, []);
  return (
    <Container>
      <h1>Админ панель</h1>
      <Row>
        {item.map((obj, index) => (
          <Col md="3" key={index}>
            <CardItem key={index} {...obj} />
            <Button
              className="button button-gray w-100"
              key={index}
              style={{
                boxShadow: '0px 0px 20px #b6b6b6 ',
                marginLeft: '12px',
              }}>
              Удалить
            </Button>
          </Col>
        ))}

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title className="bold-title">Создать</Card.Title>
            <Card.Text>
              Вставить картинку(ссылка):
              <br />
              <input />
              <br />
              Производитель: <input type="text" />
              <br />
              Форма выпуска: <input type="text" />
              <br />
              Кол-во в упаковке: <input type="text" />
              <br />
              В наличии: <input type="number" />
              <br />
              Цена: <input type="number" />
            </Card.Text>
            <Button className="button">Создать</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Admin;
