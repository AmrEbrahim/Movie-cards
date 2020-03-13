import React, { Component } from 'react';
import { fetchMovie } from '../actions';
import MovieDetails from './movie-details';
import { connect } from 'react-redux';

class PupularMovieDetails extends Component {
    async componentDidMount() {
        await this.props.fetchMovie(this.props.Movie.id);
    }

    render() {
        return <MovieDetails movie={this.props.movie} />;
    }
}

const mapStateToProps = (state, ownProps) => {
    return { movie: state.movies?.[ownProps.Movie.id] };
};

export default connect(mapStateToProps, { fetchMovie })(PupularMovieDetails);
