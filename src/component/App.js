import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./Navbar";
import PupularMovies from "./PupularMovies";
import UpcomingMovies from "./UpcomingMovies";
import MovieInfo from "./MovieInfo";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";

const App = () => {
  return (
    <div className="fluid-container">
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact component={PupularMovies}></Route>
        <Route path="/upcoming" exact component={UpcomingMovies}></Route>
        <Route path="/MovieInfo/:id" exact component={MovieInfo}></Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
