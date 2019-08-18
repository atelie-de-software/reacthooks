import React, { useState } from "react";

function App() {
  const [techs, setTechs] = useState([]);

  function handleAdd() {
    setTechs([...techs, "New Tech"]);
  }

  return (
    <div>
      <ul>{techs && techs.map(tech => <li>{tech}</li>)}</ul>
      <button type="button" onClick={handleAdd}>
        Add New Tech
      </button>
    </div>
  );
}

export default App;
