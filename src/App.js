import React from "react";
import "./App.css";

//imporet header
import Application from "./Header";

function App() {

  let name = "VIKAS";
  return (
    <div className="App">
    {/* use header */}
    <Application/>
      <h1>{name}</h1>
      <Application/>

    </div>
  );
}

export default App;
