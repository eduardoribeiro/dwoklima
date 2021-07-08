import React from "react";
import data from "../data/site_data.json";
import Carousel from "./Carousel";

const Hero = () => <Carousel slides={data.slides} fullscreen />;

export default Hero;