import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

const FilterCard = () => {
  const [range, setRange] = useState([0, 100]);
  function handleChanges(event, newValue) {
    setRange(newValue);
  }
  return (
    <div className="filter-card" name="_form" method="get">
      <div className="filter-warp">
        <div className="filter-block">
          <div className="filter-title">Цена</div>
          <div className="filter-options">
            <div className="range">
              <div className="range-warp">
                <div className="range-input">
                  <label className="product" htmlFor="filter-price-1">
                    От
                  </label>
                  <input
                    value={range[0]}
                    type="text"
                    name="product_price_min"
                    id="filter-price-1"
                  />
                </div>
                <div className="range-input">
                  <label htmlFor="filter-price-2">До</label>
                  <input
                    value={range[1]}
                    type="text"
                    name="product_price_max"
                    id="filter-price-2"
                  />
                </div>
              </div>
              <div className="slider">
                <Slider defaultValue={range} onChange={handleChanges} valueLabelDisplay="auto" />
              </div>
            </div>
          </div>
        </div>
        <div className="filter-block">
          <div className="filter-title">Возраст (от)</div>
          <div className="filter-options">
            <div className="scroll-wrapper">
              <div className="scrollbar-inner">
                <select className="input_select" name="age_from" id="">
                  <option value="">Все</option>
                  <option value="1">От 0 мес.</option>
                  <option value="2">От 6 мес.</option>
                  <option value="3">от 1 года</option>
                  <option value="4">От 10 лет</option>
                  <option value="4">От 14 лет</option>
                  <option value="4">От 18 лет</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="filter-block">
          <div className="filter-title">Возраст (до)</div>
          <div className="filter-options">
            <div className="scroll-wrapper">
              <div className="scrollbar-inner">
                <select className="input_select" name="age_from" id="">
                  <option defaultValue="">Все</option>
                  <option defaultValue="1">До 3 мес.</option>
                  <option defaultValue="3">До 1 года</option>
                  <option defaultValue="4">До 5 лет</option>
                  <option defaultValue="4">До 10 лет</option>
                  <option defaultValue="4">До 18 лет</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="filter-block">
          <div className="filter-title">Пол</div>
          <div className="filter-options">
            <div className="scroll-wrapper">
              <div className="scrollbar-inner">
                <div className="input-field">
                  <input className="checkbox" type="checkbox" id="gender0" />
                  <label htmlFor="gender0">Для женщин</label>
                </div>
                <div className="input-field">
                  <input className="checkbox" type="checkbox" id="gender1" />
                  <label htmlFor="gender1">Для мужчин</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="filter-block">
          <div className="filter-title">Тип</div>
          <div className="filter-options">
            <div className="scroll-wrapper">
              <div className="scrollbar-inner">
                <div className="input-field">
                  <input className="checkbox" type="checkbox" id="typeOfProduct1" />
                  <label htmlFor="typeOfProduct1">Сопутствующие товары</label>
                </div>
                <div className="input-field">
                  <input className="checkbox" type="checkbox" id="typeOfProduct2" />
                  <label htmlFor="typeOfProduct2">Лекарственные средства</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="filter-block">
          <div className="filter-title">Наличие товара</div>
          <div className="filter-options">
            <div className="scroll-wrapper">
              <div className="scrollbar-inner">
                <div className="input-field">
                  <input className="checkbox" type="checkbox" id="available" />
                  <label htmlFor="available">Только в наличии</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="filter-action">
        <div className="filter-result"></div>
        <div className="filter-buttons">
          <button className="filter-action-item button">Применить</button>
          <button className="filter-action-item button-gray">Сбросить</button>
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
