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
    <div>
      <ul>
        <li>
          <div className="sort__label">
            <b>Город:</b>
            <span onClick={() => setOpen(!open)}>{cityName}</span>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                fill="#2C2C2C"
              />
            </svg>
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
        </li>

        <li>
          <div className="info">
            <p className="help__desk">
              Справочная <br />
              8(937)371-35-15
            </p>
            <p className="help__desk">
              Интернет-аптека <br />
              8(937)371-35-15
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default HeaderTop;
