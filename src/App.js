import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
//import { useState } from "react";
//import Header from "./Header";

function App() {
const[num,setNum] = useState(2);

function inc (n){
  setNum(num+n);
}

function dec (n){
  setNum(num-n);
}
  return (
    <div className="App">
      <Header />
      <div className="main">
        <h1 className="heading">{num}</h1>
        <div className="buttons">
          <button className="btn" onClick={() => inc(1)}>increment</button>
          <button className="btn" onClick={() => dec(2)}>decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
