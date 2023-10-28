import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import 'react-alice-carousel/lib/alice-carousel.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from '@mui/material';
import { useState } from 'react';



const HomeSectionCarousel = ({data,sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const responsive = {
        0: { items: 2 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const slidePrev = () => {
        setActiveIndex(activeIndex - 1);
    };

    const slideNext = () => {
        setActiveIndex(activeIndex + 1);
    };

    const syncActiveIndex = ({ item }) =>setActiveIndex(item);
    
    const items = data.slice(0,10).map((item) => <HomeSectionCard product={item} />);

    return (
        <div className="border">
        <p className="text-2xl font-extrabold text-gray-800 py-5 ">{sectionName}</p>
            <div className="relative p-5">
                <AliceCarousel
                    items={items}
                    
                    responsive={responsive}
                    disableDotsControls
                    mouseTracking
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}

                />
                {activeIndex !== items.length - 5 && (
                    <Button
                        variant="contained"
                        className="z-50 p-4"
                        onClick={slideNext}
                        sx={{
                            position: "absolute",
                            top: "8rem",
                            right: "0rem",
                            transform: "rotate(90deg)",
                            bgcolor: "white",
                            hover: "none",
                        }}
                    >
                        <ArrowBackIosIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                    </Button>
                )}
                {activeIndex !== 0 && (
                    <Button
                        onClick={slidePrev}
                        variant="contained"
                        className="z-50 p-4"
                        sx={{
                            position: "absolute",
                            top: "8rem",
                            left: "0rem",
                            transform: "rotate(-90deg)",
                            bgcolor: "white",
                            hover: "none",
                        }}
                    >
                        <ArrowBackIosIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
