import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  handleCollapse = () => {
    document.querySelector(".navbar-toggler").classList.toggle("collapsed");
    document.querySelector("#navbarSupportedContent").classList.toggle("hide");
    document.querySelector("#navbarSupportedContent").classList.toggle("show");
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
          <ul className="navbar-nav mr-auto">
            <li className="nav-item mr-2">
              <Link
                to="/"
                className={`${
                  this.props.location.pathname === "/" ? "active" : null
                } nav-link font-weight-bold h5 px-2`}
              >
                Popular Movies
              </Link>
            </li>
            <li className="nav-item mr-2">
              <Link
                id="upcoming"
                to="/upcoming"
                className={`${
                  this.props.location.pathname === "/upcoming" ? "active" : null
                } nav-link font-weight-bold h5 px-2`}
              >
                Upcoming Movies
              </Link>
            </li>
            <li className="nav-item mr-2">
              <Link
                to="/search"
                className={`${
                  this.props.location.pathname === "/search" ? "active" : null
                } nav-link font-weight-bold h5 px-2`}
              >
                Search
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
