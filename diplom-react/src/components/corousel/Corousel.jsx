import './Corousel.scss';
import { useState } from 'react';

import firstIMG from '../../assets/img/1.jpg';
import secondIMG from '../../assets/img/2.jpg';
import thirdIMG from '../../assets/img/3.jpg';

const Corousel = () => {
  const [activeImg, setActiveImg] = useState(1);

  const clickNext = () => {
    setActiveImg(activeImg + 1);

    if (activeImg >= 3) {
      document.getElementById(0).classList.add('active');
      document.getElementById(2).classList.remove('active');
      setActiveImg(1);
    }
    document.getElementById(activeImg - 1).classList.remove('active');
    document.getElementById(activeImg).classList.add('active');
  };

  return (
    <>
      <div className="corousel">
        {/* <p>{activeImg}</p> */}
        <span className="prev">&#8592;</span>
        <span className="next" onClick={clickNext}>
          &#8594;
        </span>

        <div className="item active" id="0">
          <img src={firstIMG} alt="firstimage" />
        </div>

        <div className="item" id="1">
          <img src={secondIMG} alt="secondimage" />
        </div>

        <div className="item" id="2">
          <img src={thirdIMG} alt="thirdimage" />
        </div>
      </div>
    </>
  );
};

export default Corousel;
