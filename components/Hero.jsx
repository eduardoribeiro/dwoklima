import React from "react";
import { css, jsx } from "@emotion/react";
import { slides } from "../data/site_data.json";
import Carousel from "./Carousel";

const Hero = () => <Carousel slides={slides} fullscreen />;

export default Hero;