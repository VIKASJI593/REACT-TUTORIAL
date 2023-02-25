import React from "react";
import Footer from "./components/Footer"
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1 id="topic">This is Header</h1>
      <p style = {{backgroundColor:"grey"}}>This is child</p>
      <Footer />
    </div>
  );
}

export default Header;

