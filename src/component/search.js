import React, { Component } from 'react';
import { fetchSearch, clearMoviesList } from '../actions';
import { connect } from 'react-redux';
import SearchMovieDetails from './SearchMovieDetails';

class Search extends Component {
    state = { term: '' };

    componentDidMount() {
        this.props.clearMoviesList();
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
                        {this.props.movies.map(movie => (
                            <SearchMovieDetails key={movie.id} Movie={movie} />
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

export default connect(mapStateToProps, { fetchSearch, clearMoviesList })(Search);
