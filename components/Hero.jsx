import React, { useState, useEffect, useRef } from "react";
import data from "../data/site_data.json";
import Slider from "./Slider";

const Hero = () => (
  <section className="section position-relative hero-container">
    <Slider slides={data.slides} autoPlay />
  </section>
);
export default Hero;
