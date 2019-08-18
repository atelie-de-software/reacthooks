import React, { useState } from "react";

function App() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState("");

  function handleAdd() {
    setTechs([...techs, newTech]);
    setNewTech("");
  }

  return (
    <div>
      <ul>{techs && techs.map(tech => <li>{tech}</li>)}</ul>
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Add New Tech
      </button>
    </div>
  );
}

export default App;
