import React from 'react';
import { MainCarouselData } from './MainCarouselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {
  const items = MainCarouselData.map((item) => (
    <div className="carousel-item">
      <img
        className="carousel-image cursor-pointer"
        role="presentation"
        src={item.image}
        alt={item.description}
        style={{ objectFit: 'fill' }} // Set object-fit to fill inline
      />
    </div>
  ));

  return (
    <div>
      <AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={3000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
      />
    </div>
  );
};

export default MainCarousel;
