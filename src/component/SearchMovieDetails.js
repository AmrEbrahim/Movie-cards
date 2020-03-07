import React, { Component } from "react";
import { fetchSearchMovie } from "../actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class SearchMovieDetails extends Component {
  componentDidMount() {
    this.props.fetchSearchMovie(this.props.Movie.id);
  }
  getUpcomingDuration = duration => {
    const SearchMovie = duration / 60;
    const hours = Math.floor(SearchMovie);
    const minutes = Math.round((SearchMovie - hours) * 60);
    if (hours === 0 && minutes === 0) {
      return null;
    } else if (minutes > 0) {
      return `${hours}h ${minutes}m`;
    } else {
      return `${hours}h`;
    }
  };
  render() {
    return (
      <Link
        className="col-4 col-xs-6 col-sm-4 col-md-3 col-xl-2 my-3 overlay-container"
        to={`/UpcomingMovieInfo/${this.props.SearchMovie.id}`}
      >
        <img
          className="card-img"
          src={
            this.props.SearchMovie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${this.props.SearchMovie.poster_path}`
              : "/imageNotFound.jpg"
          }
          alt="imagePoster"
        />
        {this.props.SearchMovie.runtime && (
          <div className="d-flex align-items-baseline p-1 overlay-right">
            <i className="fa fa-clock-o mr-1 text-white"></i>
            <p className="text-white m-0">
              {this.getUpcomingDuration(this.props.SearchMovie.runtime)}
            </p>
          </div>
        )}
        {this.props.SearchMovie.vote_average > 0 ? (
          <div className="d-flex align-items-baseline p-1 overlay-left gold">
            <i className="fa fa-star mr-1"></i>
            <p className="text-white m-0">
              {this.props.SearchMovie.vote_average}
            </p>
          </div>
        ) : null}
      </Link>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { SearchMovie: state.getSearch[ownProps.Movie.id] };
};

export default connect(mapStateToProps, { fetchSearchMovie })(
  SearchMovieDetails
);
