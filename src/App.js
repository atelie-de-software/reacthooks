import React, { useState, useRef } from "react";

function App() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState("");
  const inputElement = useRef(null);

  function handleAdd() {
    setTechs([...techs, newTech]);
    setNewTech("");
    inputElement.current.focus();
  }

  return (
    <div>
      <ul>{techs && techs.map(tech => <li>{tech}</li>)}</ul>
      <input
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
        ref={inputElement}
      />
      <button type="button" onClick={handleAdd}>
        Add New Tech
      </button>
    </div>
  );
}

export default App;
