import React, { Component } from "react";

class App extends Component {
  render() {

    //declare variable
    let name = "VIKAS"
    return (
      <div className="App">
        <div className="App-header">

         {/* in jsx use curly bracket to use js */}
          <h2>{name}</h2>

          <form action="required">
            <input type={"text"}/>
            <button>submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
