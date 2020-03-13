import React, { Component } from 'react';
import { fetchMovies } from '../actions';
import { connect } from 'react-redux';
import PopularMovieDetails from './popular-movie-details';

class PupularMovies extends Component {
    componentDidMount() {
        this.props.fetchMovies();
    }
    render() {
        return (
            <div className="">
                <p className="h3 ml-3 mt-3" style={{ color: 'rgb(124, 168, 135)' }}>
                    Currently trending movies.
                </p>
                <div className="px-5 py-4">
                    <div className="row d-flex justify-content-center align-items-center">
                        {this.props.movies.map(movie => (
                            <PopularMovieDetails key={movie.id} Movie={movie} />
                        ))}
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

export default connect(mapStateToProps, { fetchMovies })(PupularMovies);
