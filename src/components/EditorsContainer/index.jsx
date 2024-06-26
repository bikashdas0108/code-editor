import React, { useEffect } from "react";
import CodeEditor from "../CodeEditor";
import useLocalStorage from "../../hooks/useLocalStorage";

const EditorsContainer = ({ setSrcDoc }) => {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className="pane top-pane">
      <CodeEditor
        language="xml"
        displayName="HTML"
        value={html}
        onChange={setHtml}
      />
      <CodeEditor
        language="css"
        displayName="CSS"
        value={css}
        onChange={setCss}
      />
      <CodeEditor
        language="javascript"
        displayName="JS"
        value={js}
        onChange={setJs}
      />
    </div>
  );
};

export default EditorsContainer;
