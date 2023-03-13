import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMain = () => {
  return (
    <li>
      <ul>
        <Link to="/">Онлайн-заказ</Link>
      </ul>
      <ul>
        <Link to="/">Аптеки</Link>
      </ul>
      <ul>
        <Link to="/">Покупателям</Link>
      </ul>
      <ul>
        <Link to="/">Проекты</Link>
      </ul>
      <ul>
        <Link to="/">Акции</Link>
      </ul>
      <ul>
        <Link to="/">О компании</Link>
      </ul>
    </li>
  );
};
export default HeaderMain;
