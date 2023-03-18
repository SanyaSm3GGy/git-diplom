import React from 'react';
import { useRoutes } from 'react-router-dom';
import './scss/app.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header.jsx';
// import Bottom from './components/Bottom.jsx';

import Home from './pages/Home.jsx';
import Info from './pages/Info';
import Catalog from './pages/Catalog';

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
  ]);

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="content">{routes /*Переход по ссылкам через router константу*/}</div>
      </div>
      {/* <Bottom /> */}
    </>
  );
}

export default App;
