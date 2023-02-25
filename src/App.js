import React from "react";
import "./App.css";
import Student from "./components/Student";
//import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Student name="VIKAS" age={20} />
    </div>
  );
}

export default App;
