import React from 'react';
import { useRoutes } from 'react-router-dom';
import './scss/app.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header.jsx';
import Footer from './components/Footer';

import Home from './pages/Home.jsx';
import Info from './pages/Info';
import Catalog from './pages/Catalog';
import HeaderSub from './components/headers/HeaderSub';
import Stock from './pages/Stock';

import LekarstvaIbad from './pages/CatalogPages/Lekarstva_I_Bad';
import MamaIMalish from './pages/CatalogPages/MamaIMalish';
import Cosmetics from './pages/CatalogPages/Cosmetics';
import Technics from './pages/CatalogPages/Technics';
import Sertificats from './pages/CatalogPages/Sertificats';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Map from './pages/Map';
import Cart from './pages/Cart';

function App() {
  const routes = useRoutes([
    //ruoter константа
    {
      path: '/',
      element: <Home />, //домашняя страница
    },
    {
      path: '/info',
      element: <Info />,
    },
    {
      path: '/Stock',
      element: <Stock />,
    },
    {
      path: '/catalog',
      element: <Catalog />,
    },
    {
      path: '/lekarstva_i_bad',
      element: <LekarstvaIbad />,
    },
    {
      path: '/Mama_I_Malish',
      element: <MamaIMalish />,
    },
    {
      path: '/Cosmetics',
      element: <Cosmetics />,
    },
    {
      path: '/Technic',
      element: <Technics />,
    },
    {
      path: '/Sertificats',
      element: <Sertificats />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/loged',
      element: <Admin />,
    },
    {
      path: '/map',
      element: <Map />,
    },
    {
      path: '/cart',
      element: <Cart />,
    },
  ]);

  return (
    <>
      <Header />
      <HeaderSub />
      <div className="wrapper">
        <div className="content">{routes /*Переход по ссылкам через router константу*/}</div>
        <Footer />
      </div>
    </>
  );
}

export default App;
