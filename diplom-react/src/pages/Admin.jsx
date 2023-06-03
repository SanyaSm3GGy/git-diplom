import React from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import AdminCardItem from '../components/CardItem/AdminCardItem';

const Admin = () => {
  const [item, setItem] = React.useState([]);

  let createItem = ['"img":"1"'];

  React.useEffect(() => {
    async function loadUp() {
      try {
        const { data } = await axios.get(`http://aptekaapi.ru/`);
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
        {item.map((obj, i) => (
          <Col md="3" key={i}>
            <AdminCardItem key={obj.id} {...obj} />
            <Button
              className="button button-gray w-100"
              key={i}
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
              <input defaultValue={createItem.img} onChange={(value) => setItem(value)} />
              <br />
              Название
              <input type="text" />
              <br />
              Производитель / Форма выпуска:
              <input type="text" />
              <br />
              Тип
              <select className="input_select" name="age_from" id="">
                <option defaultValue="">Выбрать!</option>
                <option defaultValue="0">Лекарства и БАД</option>
                <option defaultValue="1">Мама и малыш</option>
                <option defaultValue="2">Косметика</option>
                <option defaultValue="3">Медицинская техника</option>
                <option defaultValue="4">Сертификаты</option>
              </select>
              <br />
              Цена:
              <input type="number" />
            </Card.Text>
            <Button
              className="button"
              onClick={() => {
                console.log(createItem);
              }}>
              Создать
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Admin;
