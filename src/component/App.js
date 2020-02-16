import React from "react";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./Navbar.css";

const App = () => {
  return (
    <div
      className="fluid-container"
      style={{ backgroundColor: "rgb(44, 57, 73)", height: "100vh" }}
    >
      <Navbar />
    </div>
  );
};

export default App;
