import React, { Component } from "react";
import { fetchSearch } from "../actions";
import { connect } from "react-redux";
import MovieDetails from "./MovieDetails";
import Navbar from "./Navbar";

class Search extends Component {
  state = { term: "" };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.fetchSearch(this.state.term);
  };
  render() {
    return (
      <div className="">
        <Navbar />
        <div className="px-5 py-4">
          <form onSubmit={this.onFormSubmit}>
            <input
              className="mr-3"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              placeholder="Search..."
            />
            <button className="searchBtn" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
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
    movies: Object.values(state.getSearch)
  };
};

export default connect(mapStateToProps, { fetchSearch })(Search);
