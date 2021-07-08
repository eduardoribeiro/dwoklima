import React from "react";
import { ReactComponent as Carrier } from "../public/vectors/carrier.svg";
import { ReactComponent as Daihatsu } from "../public/vectors/daihatsu.svg";
import { ReactComponent as Daikin } from "../public/vectors/daikin.svg";
import { ReactComponent as Fujitsu } from "../public/vectors/fujitsu.svg";
import { ReactComponent as General } from "../public/vectors/general.svg";
import { ReactComponent as Haier } from "../public/vectors/haier.svg";
import { ReactComponent as Hitachi } from "../public/vectors/hitachi.svg";
import { ReactComponent as LG } from "../public/vectors/lg.svg";
import { ReactComponent as Midea } from "../public/vectors/midea.svg";
import { ReactComponent as Mitsubishi } from "../public/vectors/mitsubishi.svg";
import { ReactComponent as Panasonic } from "../public/vectors/panasonic.svg";
import { ReactComponent as Samsung } from "../public/vectors/samsung.svg";
import { ReactComponent as Sanyo } from "../public/vectors/sanyo.svg";
import { ReactComponent as Sharp } from "../public/vectors/sharp.svg";

const RenderBrand = ({ name }) => {
  switch (name) {
    case "carrier":
      return <Carrier />;
    case "daihatsu":
      return <Daihatsu />;
    case "daikin":
      return <Daikin />;
    case "fujitsu":
      return <Fujitsu />;
    case "general":
      return <Haier />;
    case "hitachi":
      return <Hitachi />;
    case "lg":
      return <LG />;
    case "midea":
      return <Midea />;
    case "mitsubishi":
      return <Mitsubishi />;
    case "panasonic":
      return <Panasonic />;
    case "samsung":
      return <Samsung />;
    case "sanyo":
      return <Sanyo />;
    case "sharp":
      return <Sharp />;
    default:
      return <></>;
  }
};

export default RenderBrand;
