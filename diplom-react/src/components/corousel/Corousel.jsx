import React, { useEffect } from 'react';
import './Corousel.scss';
import { useState } from 'react';

import firstIMG from '../../assets/img/1.jpg';
import secondIMG from '../../assets/img/2.jpg';
import thirdIMG from '../../assets/img/3.jpg';

const Corousel = () => {
  const [activeImg, setActiveImg] = React.useState(1);

  const clickNext = () => {
    console.log('click');

    setActiveImg(activeImg + 1);

    if (activeImg >= 4) {
      document.getElementById(1).classList.add('active');
      document.getElementById(3).classList.remove('active');

      setActiveImg(2);
      console.log(activeImg);
    }

    console.log(activeImg);

    document.getElementById(activeImg).classList.add('active');
    document.getElementById(activeImg - 1).classList.remove('active');
  };
  const clickPrev = () => {
    setActiveImg(activeImg - 1);

    if (activeImg <= 1) {
      setActiveImg(3);

      document.getElementById(1).classList.remove('active');
      document.getElementById(3).classList.add('active');
    }
    document.getElementById(1).classList.remove('active');
    document.getElementById(2).classList.remove('active');
    document.getElementById(3).classList.remove('active');
    document.getElementById(activeImg).classList.add('active');

    console.log(activeImg);
  };

  return (
    <>
      <div className="corousel">
        <span className="prev" onClick={clickPrev}>
          &#8592;
        </span>
        <span className="next" onClick={clickNext}>
          &#8594;
        </span>

        <div className="item active" id="1">
          <img src={firstIMG} alt="firstimage" />
        </div>

        <div className="item" id="2">
          <img src={secondIMG} alt="secondimage" />
        </div>

        <div className="item" id="3">
          <img src={thirdIMG} alt="thirdimage" />
        </div>
      </div>
    </>
  );
};

export default Corousel;
