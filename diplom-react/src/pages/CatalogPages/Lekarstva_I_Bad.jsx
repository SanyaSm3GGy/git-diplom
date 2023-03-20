import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import FilterCard from '../../components/filterCard/FilterCard';

const Lekarstva_i_bad = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="col-md-3 col-xs-12">
            <FilterCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Lekarstva_i_bad;
