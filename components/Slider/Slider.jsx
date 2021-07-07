import React, { useState, useEffect } from "react";
import { css, jsx } from "@emotion/react";

const Styles = css`
  .slider {
    position: relative;
    height: 80vh;
  }

  .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: 0.3s ease;
  }

  .slide h1,
  .slide h2 {
    color: #fff;
    text-shadow: 2px 2px 1px #000;
  }

  .slide.active {
    opacity: 1;
    transition-duration: 0.2s;
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;

const Slider = ({ slides }) => {
  // Create a curr state indicating what's the current slide's index
  const [curr, setCurr] = useState(0);
  const { length } = slides;

  const goToNext = () => {
    // Check if we've reached the final slide in the array
    // If so, go back to 0, else curr + 1
    setCurr(curr === length - 1 ? 0 : curr + 1);
  };

  // useEffect will run at every re-render
  useEffect(() => {
    // At every render, set a new timeout to go to the next slide
    setTimeout(goToNext, 2000);
    // And, when unmounting <Slider />, clear the timeout
    // See the reactjs.org docs on hooks for more info
    return function () {
      clearTimeout(goToNext);
    };
  });

  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }

  /*
    <div
                    // if active slide, include the "active" class
                    className={i === curr ? "slide active" : "slide"}
                    key={s.title}
                    // if not active, hide from screen readers for accessibility
                    aria-hidden={i !== curr}
                >
                    <div>
                        <h1>{s.title}</h1>
                        <h2>{s.subtitle}</h2>
                    </div>
                    {i === curr && (
                        <img className="image" src={s.image} alt={`Image for ${s.title}`} />
                    )}
                </div>
    */

  return (
    <section className="slider">
      {slides.map((s, i) => (
        <section
          key={s.service + s.id + i}
          className={i === curr ? "slide active" : "slide"}
        >
          <Content service={s.service} />
          {i === curr && (
            <img className="image" src={s.image} alt={`Image for ${s.service}`} />
          )}
        </section>
      ))}
    </section>
  );
};

export default Slider;
