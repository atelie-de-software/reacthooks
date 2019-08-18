import React, { useState } from "react";

function App() {
  const [techs, setTechs] = useState([]);

  return (
    <div>
      <ul>{techs && techs.map(tech => <li>{tech}</li>)}</ul>
    </div>
  );
}

export default App;
