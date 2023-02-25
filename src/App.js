import React from "react";
import "./App.css";
import Student from "./components/Student";
//import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Student name="VIKAS" age={28} />

      <Student name="SITARAM" age={30} />

      <Student name="JAANU" age={35} />
    </div>
  );
}

export default App;
