import React, { Component } from "react";

class PupularMovies extends Component {
  render() {
    return (
      <div className="my-4">
        <p className="h5 ml-3" style={{ color: "rgb(124, 168, 135)" }}>
          Currently trending movies.
        </p>
        <div className="p-3">
          <div className="row">
            <div className="col-sm-4 col-md-3 col-xl-2 my-3 overlay-container">
              <img className="card-img" src="./poster.jpg" alt="imagePoster" />
              <div className="d-flex align-items-baseline p-1 overlay-right">
                <i className="fa fa-clock-o mr-1 text-white"></i>
                <p className="text-white m-0">2h 12m</p>
              </div>
              <div className="d-flex align-items-baseline p-1 overlay-left">
                <i className="fa fa-star mr-1"></i>
                <p className="text-white m-0">6</p>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 col-xl-2 my-3 overlay-container">
              <img className="card-img" src="./poster.jpg" alt="imagePoster" />
              <div className="d-flex align-items-baseline p-1 overlay-right">
                <i className="fa fa-clock-o mr-1 text-white"></i>
                <p className="text-white m-0">2h 12m</p>
              </div>
              <div className="d-flex align-items-baseline p-1 overlay-left">
                <i className="fa fa-star mr-1"></i>
                <p className="text-white m-0">6</p>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 col-xl-2 my-3 overlay-container">
              <img className="card-img" src="./poster.jpg" alt="imagePoster" />
              <div className="d-flex align-items-baseline p-1 overlay-right">
                <i className="fa fa-clock-o mr-1 text-white"></i>
                <p className="text-white m-0">2h 12m</p>
              </div>
              <div className="d-flex align-items-baseline p-1 overlay-left">
                <i className="fa fa-star mr-1"></i>
                <p className="text-white m-0">6</p>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 col-xl-2 my-3 overlay-container">
              <img className="card-img" src="./poster.jpg" alt="imagePoster" />
              <div className="d-flex align-items-baseline p-1 overlay-right">
                <i className="fa fa-clock-o mr-1 text-white"></i>
                <p className="text-white m-0">2h 12m</p>
              </div>
              <div className="d-flex align-items-baseline p-1 overlay-left">
                <i className="fa fa-star mr-1"></i>
                <p className="text-white m-0">6</p>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 col-xl-2 my-3 overlay-container">
              <img className="card-img" src="./poster.jpg" alt="imagePoster" />
              <div className="d-flex align-items-baseline p-1 overlay-right">
                <i className="fa fa-clock-o mr-1 text-white"></i>
                <p className="text-white m-0">2h 12m</p>
              </div>
              <div className="d-flex align-items-baseline p-1 overlay-left">
                <i className="fa fa-star mr-1"></i>
                <p className="text-white m-0">6</p>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 col-xl-2 my-3 overlay-container">
              <img className="card-img" src="./poster.jpg" alt="imagePoster" />
              <div className="d-flex align-items-baseline p-1 overlay-right">
                <i className="fa fa-clock-o mr-1 text-white"></i>
                <p className="text-white m-0">2h 12m</p>
              </div>
              <div className="d-flex align-items-baseline p-1 overlay-left">
                <i className="fa fa-star mr-1"></i>
                <p className="text-white m-0">6</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PupularMovies;
