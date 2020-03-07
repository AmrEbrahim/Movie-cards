import React, { Component } from "react";
import { fetchUpcomingMovie } from "../actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class UpcomingMovieDetails extends Component {
  async componentDidMount() {
    await this.props.fetchUpcomingMovie(this.props.Movie.id);
  }
  getDuration = duration => {
    const movieTime = duration / 60;
    const hours = Math.floor(movieTime);
    const minutes = Math.round((movieTime - hours) * 60);
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
        to={`/MovieInfo/${this.props.UpcomingMovie.id}`}
      >
        <img
          className="card-img"
          src={
            this.props.UpcomingMovie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${this.props.UpcomingMovie.poster_path}`
              : "/imageNotFound.jpg"
          }
          alt="imagePoster"
        />
        {this.props.UpcomingMovie.runtime && (
          <div className="d-flex align-items-baseline p-1 overlay-right">
            <i className="fa fa-clock-o mr-1 text-white"></i>
            <p className="text-white m-0">
              {/* {console.log(this.getDuration(this.props.UpcomingMovie.runtime))} */}
              {this.getDuration(this.props.UpcomingMovie.runtime)}
            </p>
          </div>
        )}
        {this.props.UpcomingMovie.vote_average > 0 ? (
          <div className="d-flex align-items-baseline p-1 overlay-left gold">
            <i className="fa fa-star mr-1"></i>
            <p className="text-white m-0">
              {this.props.UpcomingMovie.vote_average}
            </p>
          </div>
        ) : null}
      </Link>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { UpcomingMovie: state.getUpcoming[ownProps.Movie.id] };
};

export default connect(mapStateToProps, { fetchUpcomingMovie })(
  UpcomingMovieDetails
);
