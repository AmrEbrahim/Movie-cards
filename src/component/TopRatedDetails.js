import React, { Component } from "react";
import { fetchTopRatedMovie } from "../actions";
import { connect } from "react-redux";
import MovieDetails from "./MovieDetails";

class TopRatedDetails extends Component {
  async componentDidMount() {
    await this.props.fetchTopRatedMovie(this.props.Movie.id);
  }
  render() {
    return <MovieDetails movie={this.props.movie} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { movie: state.movies[ownProps.Movie.id] };
};

export default connect(mapStateToProps, { fetchTopRatedMovie })(
  TopRatedDetails
);
