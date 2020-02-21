import React, { Component } from "react";
import { fetchMovie } from "./../actions/index";
import { connect } from "react-redux";

class MovieInfo extends Component {
  async componentDidMount() {
    await this.props.fetchMovie(this.props.match.params.id);
  }
  render() {
    return <div>{console.log(this.props.movie)}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    movie: state.getMovies[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { fetchMovie })(MovieInfo);
