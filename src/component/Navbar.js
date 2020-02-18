import React, { Component } from "react";

class Navbar extends Component {
  handleCollapse = () => {
    document.querySelector(".navbar-toggler").classList.toggle("collapsed");
    document.querySelector("#navbarSupportedContent").classList.toggle("hide");
    document.querySelector("#navbarSupportedContent").classList.toggle("show");
  };

  handleActive = e => {
    if (e.target.tagName.toLowerCase() === "div") {
      document.querySelectorAll(".nav-link").forEach(item => {
        item.classList.remove("active");
      });
      e.target.classList.add("active");
    }
  };

  render() {
    return (
      <nav className="navbar navbar-expand-md">
        <button
          onClick={this.handleCollapse}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars text-white"></i>
        </button>
        <div
          className="collapse navbar-collapse hide"
          id="navbarSupportedContent"
        >
          <ul
            onClick={e => {
              this.handleActive(e);
            }}
            className="navbar-nav mr-auto"
          >
            <li className="nav-item mr-1">
              <div className="nav-link font-weight-bold active h5">
                Popular Movies
              </div>
            </li>
            <li className="nav-item mr-1">
              <div className="nav-link font-weight-bold h5">
                Upcoming Movies
              </div>
            </li>
            <li className="nav-item mr-1">
              <div className="nav-link font-weight-bold h5">Search</div>
            </li>
            <li className="nav-item mr-1">
              <div className="nav-link font-weight-bold h5">Favorites</div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
