import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "./search";

class Navbar extends Component {
  handleCollapse = () => {
    document.querySelector(".navbar-toggler").classList.toggle("collapsed");
    document.querySelector("#navbarSupportedContent").classList.toggle("hide");
    document.querySelector("#navbarSupportedContent").classList.toggle("show");
  };

  render() {
    return (
      <nav className="navbar navbar-expand-md">
        <Link to="/" className="navbar-brand">
          <img src="/Logo.png" width="100" height="40" alt="" />
        </Link>
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
                onClick={this.handleCollapse}
                to="/"
                className={`${
                  this.props.location.pathname === "/" ? "active" : null
                } nav-link px-2 text-center`}
              >
                Trending Movies
              </Link>
            </li>
            <li className="nav-item mr-2">
              <Link
                onClick={this.handleCollapse}
                id="upcoming"
                to="/upcoming"
                className={`${
                  this.props.location.pathname === "/upcoming" ? "active" : null
                } nav-link px-2 text-center`}
              >
                Upcoming Movies
              </Link>
            </li>
            <li className="nav-item mr-2">
              <Link
                onClick={this.handleCollapse}
                to="/TopRatedMovies"
                className={`${
                  this.props.location.pathname === "/TopRatedMovies"
                    ? "active"
                    : null
                } nav-link px-2 text-center`}
              >
                Top Rated Movies
              </Link>
            </li>
          </ul>
          <Search />
        </div>
      </nav>
    );
  }
}

export default Navbar;
