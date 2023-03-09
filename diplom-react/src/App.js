import React from "react";
import { useRoutes } from "react-router-dom";

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
      <div className="content">
        {routes /*Переход по ссылкам через router константу*/}
      </div>
    </div>
  );
}

export default App;
