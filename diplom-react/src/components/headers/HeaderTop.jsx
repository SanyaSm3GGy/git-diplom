import React from 'react';
import '../../scss/components/_header.scss';
// import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const cityList = ['Чебоксары', 'Новочебоксарск']; // Массив Городов

const HeaderTop = () => {
  const [activeCity, setActiveCity] = React.useState(0);

  const cityName = cityList[activeCity];

  return (
    <>
      <Navbar bg="white" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Выбрать город" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => setActiveCity(0)}>Чебоксары</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setActiveCity(1)}>Новочебоксарск</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="choosed">{cityName}</Nav.Link>
              <Nav.Link>
                Справочная <br /> 8(937)371-35-15
              </Nav.Link>
              <Nav.Link>
                Интернет-аптека
                <br /> 8(937)371-35-15
              </Nav.Link>
            </Nav>
            {/* <Nav>
              <div className="nav-link">
                <Link to="/login" className="login">
                  <svg height="16px" width="16px" viewBox="0 0 60.671 60.671">
                    <ellipse cx="30.336" cy="12.097" rx="11.997" ry="12.097"></ellipse>
                    <path
                      d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9
                        			C48.354,35.818,42.661,30.079,35.64,30.079z"></path>
                  </svg>
                  Вход или регистрация
                </Link>
              </div>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default HeaderTop;
