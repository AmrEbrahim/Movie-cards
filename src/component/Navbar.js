import React, { Component } from "react";
import { Link } from "react-router-dom";

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
            <li className="nav-item mr-2">
              <Link to="/" className="nav-link font-weight-bold active h5 px-2">
                Popular Movies
              </Link>
            </li>
            <li className="nav-item mr-2">
              <Link
                id="upcoming"
                to="/upcoming"
                className="nav-link font-weight-bold h5 px-2"
              >
                Upcoming Movies
              </Link>
            </li>
            <li className="nav-item mr-2">
              <Link to="/search" className="nav-link font-weight-bold h5 px-2">
                Search
              </Link>
            </li>
            <li className="nav-item mr-2">
              <div className="nav-link font-weight-bold h5 px-2">Favorites</div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
