import React from 'react';
import '../../scss/components/_header.scss';

const cityList = ['Чебоксары', 'Новочебоксарск', 'Казань']; // Массив Городов

const HeaderTop = () => {
  const [open, setOpen] = React.useState(false); //state для проверки открытий

  const [activeCity, setActiveCity] = React.useState(0);

  const cityName = cityList[activeCity];

  const onClickChoose = (i) => {
    setActiveCity(i);
    setOpen(!open);
  };

  return (
    <>
      <div>
        <div className="sort__label">
          <span>Город:</span>
          <span onClick={() => setOpen(!open)}>{cityName}</span>
        </div>
        <div>
          {open && (
            <div className="sort__popup">
              <ul>
                {cityList.map((obj, i) => (
                  <li
                    key={i}
                    onClick={() => onClickChoose(i)} //вызов функций
                    className={
                      activeCity === i ? 'active' : '' //выбор активного города
                    }>
                    {obj}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div>
        <a href="/">Справочная</a> <br />
        <a href="/">8(937)371-35-15</a>
      </div>
      <div>
        <a href="/">Интернет-аптека</a> <br />
        <a href="/">8(937)371-35-15</a>
      </div>
      <div>
        <a href="/" className="login_button">
          <svg height="16px" width="16px" viewBox="0 0 60.671 60.671">
            <ellipse cx="30.336" cy="12.097" rx="11.997" ry="12.097"></ellipse>
            <path
              d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9
                        			C48.354,35.818,42.661,30.079,35.64,30.079z"></path>
          </svg>
          Вход или регистрация
        </a>
      </div>
    </>
  );
};
export default HeaderTop;
