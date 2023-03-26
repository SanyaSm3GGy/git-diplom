import { Carousel } from 'react-bootstrap';

import fourIMG from '../../assets/img/51.jpg';
import fiveIMG from '../../assets/img/52.jpg';
import sixIMG from '../../assets/img/53.jpg';

const Corousel1 = () => {
  return (
    <>
      <Carousel className="mySlider1">
        <Carousel.Item style={{ height: '100%' }}>
          <img
            style={{ borderRadius: '20px', height: '640px' }}
            className="d-block w-100"
            src={fourIMG}
            alt="41"
          />
        </Carousel.Item>
        <Carousel.Item style={{ height: '100%' }}>
          <img
            style={{ borderRadius: '20px', height: '640px' }}
            className="d-block w-100"
            src={fiveIMG}
            alt="42"
          />
        </Carousel.Item>
        <Carousel.Item style={{ height: '100%' }}>
          <img
            style={{ borderRadius: '20px', height: '640px' }}
            className="d-block w-100"
            src={sixIMG}
            alt="43"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Corousel1;