import React, { Component } from "react";
import { fetchUpcomingMovies } from "../actions";
import { connect } from "react-redux";
import MovieDetails from "./MovieDetails";
import Navbar from "./Navbar";
class PupularMovies extends Component {
  componentDidMount() {
    this.props.fetchUpcomingMovies();
  }
  render() {
    return (
      <div className="">
        <Navbar Tab="popular" />
        <p className="h3 ml-3 mt-3" style={{ color: "rgb(124, 168, 135)" }}>
          Movies releasing in the next 3 months.
        </p>
        <div className="px-5 py-4">
          <div className="row d-flex justify-content-center align-items-center">
            {this.props.movies.map(movie => (
              <MovieDetails key={movie.id} Movie={movie} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: Object.values(state.getMovies)
  };
};

export default connect(mapStateToProps, { fetchUpcomingMovies })(PupularMovies);
