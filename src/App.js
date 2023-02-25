import React from "react";
import "./App.css";

//import header by default,footer as object
import Header,{Footer} from "./Header";

function App() {

  let name = "VIKAS";
  return (
    <div className="App">
    {/* use header */}
    <Header/>
      <h1>{name}</h1>
        {/* use footer */}
      <Footer/>

    </div>
  );
}

export default App;
