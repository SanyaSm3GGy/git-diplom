import React from 'react';
import { Row, Container, Card } from 'react-bootstrap';

const Map = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=15I54Y4YviCbNVODAgkAow&cb_client=search.gws-prod.gps&w=408&h=240&yaw=51.718857&pitch=0&thumbfov=100"
          />
          <Card.Title> У Данила ДОМА! </Card.Title>
          <Card.Text>М.горького Пр-Кт, 38 корпус 2</Card.Text>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=GVJwZgsGMIVLMMGavBX5Ig&cb_client=search.gws-prod.gps&w=408&h=240&yaw=288.0262&pitch=0&thumbfov=100"
          />
          <Card.Title> У Сани ДОМА! </Card.Title>
          <Card.Text>ул. Эльгера, 17</Card.Text>
        </Card>
      </Row>
    </Container>
  );
};

export default Map;
