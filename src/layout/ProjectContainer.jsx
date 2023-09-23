import React, { useState } from "react";
import { hoverStyleForHeadding, styleForHeadding } from "../constants";

const ProjectContainer = (props) => {
  const [textStyle, setTextStyle] = useState("d-none");
  const [mainDivStyle, setMainDivStyle] = useState("d-none bg-transparent");
  const [headingStyle, setHeadingStyle] = useState(styleForHeadding);

  const handleMouseOver = () => {
    setMainDivStyle("d-flex bg-warning bg-opacity-75");
    setTextStyle("d-block bg-transparent text-dark fw-500");
    setHeadingStyle(hoverStyleForHeadding);
  };

  const handleMouseLeave = () => {
    setTextStyle("d-none");
    setMainDivStyle("d-none bg-transparent");
    setHeadingStyle(styleForHeadding);
  };

  return (
    <>
      <div
        className={`${props.mainClass} rounded bg-white`}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`h-100 p-4 text-center rounded ${mainDivStyle}`}
        >
          <span className="my-auto bg-transparent">
            <h2 className={headingStyle}>{props.title}</h2>
            <p className={textStyle}>{props.description}</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default ProjectContainer;
