import React from "react";

import "./outputContainer.css";

const OutputContainer = ({ srcDoc }) => {
  return (
    <div className="output-container">
      <iframe
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default OutputContainer;
