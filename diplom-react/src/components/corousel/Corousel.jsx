import { Carousel } from 'react-bootstrap';

import firstIMG from '../../assets/img/1.jpg';
import secondIMG from '../../assets/img/2.jpg';
import thirdIMG from '../../assets/img/3.jpg';

const Corousel = () => {
  return (
    <>
      <Carousel className="mySlider">
        <Carousel.Item style={{ height: '100%' }}>
          <img
            style={{ borderRadius: '20px', height: '640px' }}
            className="d-block w-100"
            src={firstIMG}
            alt="firstimage"
          />
        </Carousel.Item>
        <Carousel.Item style={{ height: '100%' }}>
          <img
            style={{ borderRadius: '20px', height: '640px' }}
            className="d-block w-100"
            src={secondIMG}
            alt="secondimage"
          />
        </Carousel.Item>
        <Carousel.Item style={{ height: '100%' }}>
          <img
            style={{ borderRadius: '20px', height: '640px' }}
            className="d-block w-100"
            src={thirdIMG}
            alt="thirdimage"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Corousel;
