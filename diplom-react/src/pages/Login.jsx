import React from 'react';
import { Container } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';

const Login = () => {
  return (
    <Container className="logincontainer">
      <Card className="login-box">
        <h3>Авторизация</h3>
        <form action="#">
          <div className="input-box">
            <span className="icon">
              <svg height="16px" width="16px" viewBox="0 0 60.671 60.671">
                <ellipse cx="30.336" cy="12.097" rx="11.997" ry="12.097"></ellipse>
                <path
                  d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9
                        			C48.354,35.818,42.661,30.079,35.64,30.079z"></path>
              </svg>
            </span>
            <input type="login" required className="login" />
            <label htmlFor="login">Логин</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <svg width="20px" height="20px" viewBox="0 0 401.998 401.998">
                <path
                  d="M357.45,190.721c-5.331-5.33-11.8-7.993-19.417-7.993h-9.131v-54.821c0-35.022-12.559-65.093-37.685-90.218
		C266.093,12.563,236.025,0,200.998,0c-35.026,0-65.1,12.563-90.222,37.688C85.65,62.814,73.091,92.884,73.091,127.907v54.821
		h-9.135c-7.611,0-14.084,2.663-19.414,7.993c-5.33,5.326-7.994,11.799-7.994,19.417V374.59c0,7.611,2.665,14.086,7.994,19.417
		c5.33,5.325,11.803,7.991,19.414,7.991H338.04c7.617,0,14.085-2.663,19.417-7.991c5.325-5.331,7.994-11.806,7.994-19.417V210.135
		C365.455,202.523,362.782,196.051,357.45,190.721z M274.087,182.728H127.909v-54.821c0-20.175,7.139-37.402,21.414-51.675
		c14.277-14.275,31.501-21.411,51.678-21.411c20.179,0,37.399,7.135,51.677,21.411c14.271,14.272,21.409,31.5,21.409,51.675V182.728
		z"
                />
              </svg>
            </span>
            <input type="password" required className="password" />
            <label htmlFor="password">Пароль</label>
          </div>
          <div className="rememberMe">
            <label htmlFor="checkbox">
              <input type="checkbox" className="checkbox" />
              Запомнить меня
            </label>
          </div>
          <button className="button">Войти</button>
        </form>
      </Card>
    </Container>
  );
};
export default Login;
