import React from "react";
import "./App.css";

//imporet header
import Header from "./Header";

function App() {

  let name = "VIKAS";
  return (
    <div className="App">
    {/* use header */}
    <Header/>
      <h1>{name}</h1>
      <Header/>

      <Header/>
    </div>
  );
}

export default App;
