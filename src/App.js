import React, { useState, useRef, useEffect } from "react";

function App() {
  const [techs, setTechs] = useState([]); // <-declaring variables using useState
  const [newTech, setNewTech] = useState(""); // <-declaring variables using useState
  const inputElement = useRef(null);

  function handleAdd() {
    setTechs([...techs, newTech]); // <-similar to setState
    setNewTech(""); // <-similar to setState
    inputElement.current.focus();
  }

  //simulates the componentDidMount when no dependency is passed
  useEffect(() => {
    const storageTech = localStorage.getItem("techs");
    if (storageTech) setTechs(JSON.parse(storageTech));
    console.log("mounted");
  }, []); // <-dependency

  //simulates the componentDidUpdate when a dependency is passed
  useEffect(() => {
    localStorage.setItem("techs", JSON.stringify(techs));
    console.log("updated");
  }, [techs]); // <-dependency

  return (
    <div>
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
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
