import React from 'react';
import MainCarousel from '../../components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
import { mens_kurta } from '../../../Data/mens_kurta';
import { mens_shirt } from '../../../Data/mens_shirt';
import { womens_dress } from '../../../Data/womens_dress';

const HomePage = () => {
  const mainCarouselStyles = {
    zIndex: '0', // Set the z-index to the lowest value
  };

  return (
    <div>
      <MainCarousel style={mainCarouselStyles} />
      <div className="m-5 space-y-10 py-20">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens's Kurta"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens's shoes"} />
        <HomeSectionCarousel data={mens_shirt} sectionName={"Mens's shirt"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"} />
        <HomeSectionCarousel data={womens_dress} sectionName={"Women's Dress"} />
      </div>
    </div>
  );
};

export default HomePage;
