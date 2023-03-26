import React from 'react';
import { useRoutes } from 'react-router-dom';
import './scss/app.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header.jsx';
// import Bottom from './components/Bottom.jsx';

import Home from './pages/Home.jsx';
import Info from './pages/Info';
import Catalog from './pages/Catalog';
import HeaderSub from './components/headers/HeaderSub';

import LekarstvaIbad from './pages/CatalogPages/Lekarstva_I_Bad';
import MamaIMalish from './pages/CatalogPages/MamaIMalish';
import Cosmetics from './pages/CatalogPages/Cosmetics';
import Technics from './pages/CatalogPages/Technics';
import Sertificats from './pages/CatalogPages/Sertificats';

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
  ]);

  return (
    <>
      <Header />
      <HeaderSub />
      <div className="wrapper">
        <div className="content">{routes /*Переход по ссылкам через router константу*/}</div>
      </div>
      {/* <Bottom /> */}
    </>
  );
}

export default App;
