import React, { Component } from "react";
import { fetchSearchMovie } from "../actions";
import { connect } from "react-redux";
import MovieDetails from "./MovieDetails";

class SearchMovieDetails extends Component {
  componentDidMount() {
    this.props.fetchSearchMovie(this.props.Movie.id);
  }
  render() {
    return <MovieDetails movie={this.props.movie} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { movie: state.movies[ownProps.Movie.id] };
};

export default connect(mapStateToProps, { fetchSearchMovie })(
  SearchMovieDetails
);
