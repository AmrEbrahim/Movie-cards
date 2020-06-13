import React, { Component } from "react";
import { fetchUpcomingMovies } from "../actions";
import { connect } from "react-redux";
import UpcomingMovieDetails from "./UpcomingMovieDetails";

class UpcomingMovies extends Component {
  state = { loading: false };
  async componentDidMount() {
    this.setState({ loading: true });
    await this.props.fetchUpcomingMovies();
    this.setState({ loading: false });
  }
  render() {
    return (
      <div className="">
        <div className="px-5 py-4">
          <div className="row d-flex justify-content-center align-items-center">
            {this.state.loading ? (
              <div className="loader">
                <div className="sk-chase">
                  <div className="sk-chase-dot"></div>
                  <div className="sk-chase-dot"></div>
                  <div className="sk-chase-dot"></div>
                  <div className="sk-chase-dot"></div>
                  <div className="sk-chase-dot"></div>
                  <div className="sk-chase-dot"></div>
                </div>
              </div>
            ) : (
              <React.Fragment>
                {this.props.movies.length === 0 ? (
                  <div>“Sorry, no results were found”</div>
                ) : (
                  this.props.movies.map((movie) => (
                    <UpcomingMovieDetails key={movie.id} Movie={movie} />
                  ))
                )}
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.moviesList,
  };
};

export default connect(mapStateToProps, {
  fetchUpcomingMovies,
})(UpcomingMovies);
