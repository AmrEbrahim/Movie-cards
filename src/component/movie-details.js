import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
    getDuration = duration => {
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
        if (!this.props.movie) {
            return null;
        }
        return (
            <Link
                className="col-4 col-xs-6 col-sm-4 col-md-3 col-xl-2 my-3 overlay-container"
                to={`/UpcomingMovieInfo/${this.props.movie.id}`}
            >
                <img
                    className="card-img"
                    src={
                        this.props.movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`
                            : '/imageNotFound.jpg'
                    }
                    alt="imagePoster"
                />
                {this.props.movie.runtime && (
                    <div className="d-flex align-items-baseline p-1 overlay-right">
                        <i className="fa fa-clock-o mr-1 text-white"></i>
                        <p className="text-white m-0">
                            {this.getDuration(this.props.movie.runtime)}
                        </p>
                    </div>
                )}
                {this.props.movie.vote_average > 0 ? (
                    <div className="d-flex align-items-baseline p-1 overlay-left gold">
                        <i className="fa fa-star mr-1"></i>
                        <p className="text-white m-0">{this.props.movie.vote_average}</p>
                    </div>
                ) : null}
            </Link>
        );
    }
}

export default MovieDetails;
