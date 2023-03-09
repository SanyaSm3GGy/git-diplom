import React from "react";
import { useRoutes } from "react-router-dom";

import Header from "./components/Header.jsx";

import Home from "./pages/Home.jsx";

import "./scss/app.scss";

function App() {
  const routes = useRoutes([
    //ruoter константа
    {
      path: "/",
      element: <Home />, //домашняя страница
    },
  ]);

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        {routes /*Переход по ссылкам через router константу*/}
      </div>
    </div>
  );
}

export default App;
