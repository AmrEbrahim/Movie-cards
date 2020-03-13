import React, { Component } from 'react';
import { fetchUpcomingMovies } from '../actions';
import { connect } from 'react-redux';
import UpcomingMovieDetails from './UpcomingMovieDetails';

class UpcomingMovies extends Component {
    componentDidMount() {
        this.props.fetchUpcomingMovies();
    }
    render() {
        return (
            <div className="">
                <p className="h3 ml-3 mt-3" style={{ color: 'rgb(124, 168, 135)' }}>
                    Movies releasing in the next 3 months.
                </p>
                <div className="px-5 py-4">
                    <div className="row d-flex justify-content-center align-items-center">
                        {this.props.movies.map(movie => (
                            <UpcomingMovieDetails key={movie.id} Movie={movie} />
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

export default connect(mapStateToProps, {
    fetchUpcomingMovies
})(UpcomingMovies);
