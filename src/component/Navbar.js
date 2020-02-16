import React, { Component } from "react";

class Navbar extends Component {
  handleCollapse = () => {
    document.querySelector(".navbar-toggler").classList.toggle("collapsed");
    document.querySelector("#navbarSupportedContent").classList.toggle("hide");
    document.querySelector("#navbarSupportedContent").classList.toggle("show");
  };

  handleActive = e => {
    if (e.target.tagName.toLowerCase() === "a") {
      document.querySelectorAll(".nav-link").forEach(item => {
        item.classList.remove("active");
      });
      e.target.classList.add("active");
    }
  };

  render() {
    return (
      <nav className="navbar navbar-expand-sm">
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
              <a className="nav-link text-white active">Popular Movies</a>
            </li>
            <li className="nav-item mr-1">
              <a className="nav-link text-white">Upcoming Movies</a>
            </li>
            <li className="nav-item mr-1">
              <a className="nav-link text-white">Search</a>
            </li>
            <li className="nav-item mr-1">
              <a className="nav-link text-white">Favorites</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
