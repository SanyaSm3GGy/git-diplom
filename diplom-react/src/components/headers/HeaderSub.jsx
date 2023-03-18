import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const HeaderSub = () => {
  return (
    <>
      <Navbar sticky="top" bg="White" expand="xl" className="mb-3">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="logo">
              Планета <br /> здоровья
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-$"xl"`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-$"xl"`}
            aria-labelledby={`offcanvasNavbarLabel-expand-$"xl"`}
            placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-$"xl"`}>
                Планета здоровья
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link>
                  <Link className="myBut" to="/">
                    Каталог
                  </Link>
                </Nav.Link>

                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Название, производитель, штрих-код или дейст.вещество"
                    className="me-"
                    aria-label="Search"
                  />
                  <Button className="search">Поиск</Button>
                </Form>
              </Nav>
              <Nav>
                <Nav.Link>
                  <Link className="myBut" to="/">
                    Корзина
                  </Link>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderSub;
