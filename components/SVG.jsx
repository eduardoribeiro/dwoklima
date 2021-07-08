import React from "react";

const SVG = ({
  name = "",
  width = "100%",
  height = "100%",
  viewport,
  paths,
  fill = "#666",
  transform = null,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewport}
      name={name}
    >
      {paths.length > 1 ? (
        <g {...transform}>
          {paths.map((path, i) => (
            <path key={i} d={path} fill={fill} />
          ))}
        </g>
      ) : (
        <path d={paths[0]} fill={fill} />
      )}
    </svg>
  );
};

export default SVG;
