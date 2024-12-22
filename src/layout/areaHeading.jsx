import React from "react";

const AreaHeading = ({ word1, word2 }) => {
  return (
    <div className="d-flex justify-content-center">
      <h3 className="fw-bolder text-light text-center pt-3 mb-3 display-5 border border-0 border-bottom border-warning">
        {word1} {word2 && <span className="text-warning">{word2}</span>}
      </h3>
    </div>
  );
};

export default AreaHeading;
