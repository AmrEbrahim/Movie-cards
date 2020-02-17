import React from "react";
import Navbar from "./Navbar";
import PupularMovies from "./PupularMovies";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";

const App = () => {
  return (
    <div
      className="fluid-container"
      style={{ backgroundColor: "rgb(44, 57, 73)", minHeight: "100vh" }}
    >
      <Navbar />
      <PupularMovies />
    </div>
  );
};

export default App;
