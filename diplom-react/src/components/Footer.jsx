import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import gitLogo from '../assets/gh-icon.svg';
import tgLogo from '../assets/tg-big-icon.svg';
import vkLogo from '../assets/vk-icon.svg';

const Bottom = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <Container>
          <div className="links">
            <Card>
              <Link to="https://vk.com/pe0plearecry">
                <Card.Img variant="top" src={vkLogo} className="side-padding" />
              </Link>
            </Card>
            <Card>
              <Link to="https://t.me/velosiq">
                <Card.Img variant="top" src={tgLogo} />
              </Link>
            </Card>
            <Card>
              <Link to="https://github.com/SanyaSm3GGy/git-diplom">
                <Card.Img variant="top" src={gitLogo} className="side-padding" />
              </Link>
            </Card>
          </div>
        </Container>
      </div>
      <div className="footer-info">
        <Container>
          <div className="links">
            <Link to="/catalog"> Онлайн заказ </Link>
            <Link to="/map"> Аптеки </Link>
            <Link to="/"> Покупателям </Link>
            <Link to="/"> Сотрудничество </Link>
            <Link to="/"> Проекты </Link>
            <Link to="/stock"> Акции </Link>
            <Link to="/info"> О компании </Link>
          </div>
          <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
            Лицензии
          </Link>
          <Link>Соглашения</Link>
        </Container>
      </div>
    </div>
  );
};
export default Bottom;
