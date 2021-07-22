import React, { useState, useEffect, useRef } from "react";
import Content from './Content';

const Carousel = ({ slides, delay = 5000, fullscreen }) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [delay, index, slides.length]);

  return (
    <div className="carousel">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((slide) => (
          <div
            className="slide fullscreen"
            key={slide.id}
            style={{ backgroundImage: `url(/images/${slide.image})` }}
          ><Content service={slide.service} link={slide.c2a} /></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
