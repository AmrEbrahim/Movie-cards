import React, { Component } from 'react';
import { fetchUpcomingMovie } from '../actions';
import { connect } from 'react-redux';
import MovieDetails from './movie-details';

class UpcomingMovieDetails extends Component {
    async componentDidMount() {
        await this.props.fetchUpcomingMovie(this.props.Movie.id);
    }

    render() {
        return <MovieDetails movie={this.props.movie} />;
    }
}

const mapStateToProps = (state, ownProps) => {
    return { movie: state.movies[ownProps.Movie.id] };
};

export default connect(mapStateToProps, { fetchUpcomingMovie })(UpcomingMovieDetails);
