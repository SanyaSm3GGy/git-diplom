import React from 'react';
import Corousel from '../components/corousel/Corousel';
import badImg from '../assets/img/bad.jpg';

const Home = () => {
  return (
    <div>
      <div className="container">
        <Corousel />
        <div className="image_bad">
          <img src={badImg} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Home;
