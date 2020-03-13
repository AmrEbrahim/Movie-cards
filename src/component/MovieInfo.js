import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovie, fetchImages, fetchVideos } from './../actions/index';
import { connect } from 'react-redux';

class MovieInfo extends Component {
    async componentDidMount() {
        await this.props.fetchMovie(this.props.match.params.id);
        this.props.fetchImages(this.props.match.params.id);
        this.props.fetchVideos(this.props.match.params.id);
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

    openTab = () => {
        window.open(`https://www.youtube.com/watch?v=${this.props.videos.results[0].key}`);
    };

    render() {
        if (!this.props.movie || !this.props.images) {
            return <div>Loading...</div>;
        }
        return (
            <div
                key={this.props.movie.id}
                className="row m-0 movieInfo"
                style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.97) 10%, rgba(0, 0, 0, 0.92) 20%, rgba(0, 0, 0, 0.92) 80%, rgba(0, 0, 0, 0.97) 100%) 0% 0% / cover, url(https://image.tmdb.org/t/p/original/${this.props.movie.backdrop_path}) center center no-repeat rgb(44, 57, 73)`
                }}
            >
                <Link to="/" className="btn btn-primary backBtn">
                    Back
                </Link>
                <div className="col-8 col-sm-5 pt-5 col-lg-3 d-flex justify-content-center align-items-center flex-column">
                    <div className="w-75">
                        <img
                            className="card-img"
                            alt="Movie poster"
                            src={`https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`}
                        />
                    </div>
                    <p className="text-white pt-3 pb-3 font-weight-bold text-center">
                        <em>"{this.props.movie.tagline}"</em>
                    </p>
                    <Link
                        to=""
                        target="_blank"
                        onClick={this.openTab}
                        className="btn btn-primary rounded-pill m-1"
                    >
                        <i className="fa fa-play mr-1"></i>
                        Watch Trailer
                    </Link>
                    <div className="btn btn-primary rounded-pill m-1">
                        <i className="fa fa-plus mr-1"></i>
                        Add to List
                    </div>
                </div>
                <div className="col-12 col-lg-6 d-flex justify-content-center flex-column p-5 Movie-info">
                    <div className="">
                        <p className="h1 text-white">{this.props.movie.original_title}</p>
                        <p className="font-weight-bold text-white m-0">
                            {this.props.movie.genres.map(genre => `${genre.name}, `)}
                        </p>
                        <div className="d-flex">
                            {this.getDuration(this.props.movie.runtime) === null ? null : (
                                <div className="d-flex align-items-baseline">
                                    <i className="fa fa-clock-o mr-1 text-white"></i>
                                    <p className="text-white m-0">
                                        {this.getDuration(this.props.movie.runtime)}
                                    </p>
                                </div>
                            )}
                            {this.props.movie.vote_average > 0 ? (
                                <div className="d-flex align-items-baseline ml-2 gold">
                                    <i className="fa fa-star mr-1"></i>
                                    <p className="text-white m-0">
                                        {this.props.movie.vote_average}
                                    </p>
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div className="text-white pt-5">
                        <p className="font-weight-bold h6">Overview</p>
                        <p className="">{this.props.movie.overview}</p>
                    </div>
                    <div className="w-75 pt-5 d-flex justify-content-between align-items-center">
                        <div className="text-white d-flex justify-content-center align-items-center flex-column">
                            <p className="m-0 font-weight-bold">Revenue:</p>
                            <p className="m-0">$ {this.props.movie.revenue}</p>
                        </div>
                        <div className="text-white d-flex justify-content-center align-items-center flex-column">
                            <p className="m-0 font-weight-bold">Budget:</p>
                            <p className="m-0">$ {this.props.movie.budget}</p>
                        </div>
                        <div className="text-white d-flex justify-content-center align-items-center flex-column">
                            <p className="m-0 font-weight-bold">Release Date:</p>
                            <p className="m-0">$ {this.props.movie.release_date}</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-3 w-100 d-flex justify-content-center align-items-center flex-column posterContainer">
                    <div className="poster-image p-3">
                        {this.props.images.backdrops[0] ? (
                            <img
                                className="img-fluid"
                                alt="posterImage"
                                src={`https://image.tmdb.org/t/p/w500${this.props.images.backdrops[0].file_path}`}
                            />
                        ) : null}
                    </div>
                    <div className="poster-image p-3">
                        {this.props.images.backdrops[1] ? (
                            <img
                                className="img-fluid"
                                alt="posterImage"
                                src={`https://image.tmdb.org/t/p/w500${this.props.images.backdrops[1].file_path}`}
                            />
                        ) : null}
                    </div>
                    <div className="poster-image p-3">
                        {this.props.images.backdrops[2] ? (
                            <img
                                className="img-fluid"
                                alt="posterImage"
                                src={`https://image.tmdb.org/t/p/w500${this.props.images.backdrops[2].file_path}`}
                            />
                        ) : null}
                    </div>
                    <div className="poster-image p-3">
                        {this.props.images.backdrops[3] ? (
                            <img
                                className="img-fluid"
                                alt="posterImage"
                                src={`https://image.tmdb.org/t/p/w500${this.props.images.backdrops[3].file_path}`}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        movie: state.movies[ownProps.match.params.id],
        images: state.images[ownProps.match.params.id],
        videos: state.videos[ownProps.match.params.id]
    };
};

export default connect(mapStateToProps, {
    fetchMovie,
    fetchImages,
    fetchVideos
})(MovieInfo);
