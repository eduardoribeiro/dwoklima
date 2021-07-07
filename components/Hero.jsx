import React, { useState, useEffect, useRef } from "react";
import data from "../data/site_data.json";
import Slider from "./Slider";

const Hero = () => <Slider slides={data.slides} aautoPlay={2} />;

export default Hero;