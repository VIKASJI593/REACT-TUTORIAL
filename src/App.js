/*
import { element } from "prop-types";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import movies from "./movie.json";
//import Header from "./Header";

function App() {
  let login = false;

  if (login == false) {
    return <h1>ja mai tujhe nhi dekhna chahta</h1>;
  }

  // if (login == true) {
  //   return <h1>ja mai tujhe nhi dekhna chahta</h1>;
  // }


  

  return (
    <div className="App">
      <Header />
      <div className="main">
        {movies.map((element, index) => {
          return (
            <Movie
              key={index}
              title={element.Title}
              year={element.Year}
              img={element.Poster}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
*/


//------------------------------ternary operator------------


import { element } from "prop-types";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import movies from "./movie.json";
//import Header from "./Header";

function App() {
  let login = false;

  {
  login == false? <h1 style ={{color="black"}}>mai tujhe abhi bhi nhi dikhaunga</h1> :<div>dekh le bhai</div>
}



  // if (login == true) {
  //   return <h1>ja mai tujhe nhi dekhna chahta</h1>;
  // }


  return (
    <div className="App">

    {
      login == false? <h1 style ={{color="black"}}>mai tujhe abhi bhi nhi dikhaunga</h1> :<div>dekh le bhai</div>
    }
      <Header />
      <div className="main">
        {movies.map((element, index) => {
          return (
            <Movie
              key={index}
              title={element.Title}
              year={element.Year}
              img={element.Poster}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
