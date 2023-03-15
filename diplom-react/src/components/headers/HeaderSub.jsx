import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';

const HeaderSub = () => {
  return (
    <>
      <Link to="/" className="logo">
        Планета <br /> Здоровья
      </Link>
      <Link to="/" className="button">
        Каталог
      </Link>
      <Search />
      <Link to="/" className="search button">
        Поиск
      </Link>
      <Link to="/" className="cart button">
        Корзина
      </Link>
    </>
  );
};

export default HeaderSub;
