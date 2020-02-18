import React, { Component } from "react";
import { fetchMovies } from "../actions";
import { connect } from "react-redux";

class PupularMovies extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }
  render() {
    return (
      <div className="my-4">
        <p className="h3 ml-3 my-3" style={{ color: "rgb(124, 168, 135)" }}>
          Currently trending movies.
        </p>
        <div className="px-5">
          <div className="row">
            {this.props.movies.map(movie => (
              <div
                className="col-sm-4 col-md-3 col-xl-2 my-3 overlay-container"
                key={movie.id}
              >
                <img
                  className="card-img"
                  src="./poster.jpg"
                  alt="imagePoster"
                />
                <div className="d-flex align-items-baseline p-1 overlay-right">
                  <i className="fa fa-clock-o mr-1 text-white"></i>
                  <p className="text-white m-0">2h 12m</p>
                </div>
                <div className="d-flex align-items-baseline p-1 overlay-left">
                  <i className="fa fa-star mr-1"></i>
                  <p className="text-white m-0">{movie.vote_average}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { movies: Object.values(state.getMovies) };
};

export default connect(mapStateToProps, { fetchMovies })(PupularMovies);
