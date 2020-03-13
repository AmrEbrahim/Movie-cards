import React, { Component } from "react";
import { fetchSearch, clearMovies } from "../actions";
import { connect } from "react-redux";
import SearchMovieDetails from "./SearchMovieDetails";

class Search extends Component {
  state = { term: "" };
  componentDidMount() {
    this.props.clearMovies();
  }
  onFormSubmit = e => {
    e.preventDefault();
    this.props.fetchSearch(this.state.term);
  };
  render() {
    return (
      <div className="">
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
            {this.state.loading ? (
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="loader"></div>
                <p className="text-white">Loading...</p>
              </div>
            ) : (
              <React.Fragment>
                {this.props.movies.map(movie => (
                  <SearchMovieDetails key={movie.id} Movie={movie} />
                ))}
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.moviesList
  };
};

export default connect(mapStateToProps, { fetchSearch, clearMovies })(Search);
