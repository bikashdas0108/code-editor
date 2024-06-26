import React, { useState } from "react";
import EditorsContainer from "./EditorsContainer";
import OutputContainer from "./OutputContainer";

import "./app.css";

function App() {
  const [srcDoc, setSrcDoc] = useState("");

  return (
    <>
      <EditorsContainer setSrcDoc={setSrcDoc} />
      <OutputContainer srcDoc={srcDoc} />
    </>
  );
}

export default App;
