import React, { Component } from 'react';
import { getMovies, deleteMovie } from '../services/fakeMovieService';
import Movie from './movie'

class Movies extends Component {

    state = {
        movies: [],
    };

    componentDidMount = () => {
        const movieData = getMovies();
        this.setState({
            movies: movieData
        });
    }
    deleteMovie = (id) => {
        const deleted = deleteMovie(id);
        const data = this.state.movies.filter(elem => elem !== deleted)
        this.setState({ movies: data })
    }

    handleLike = (movie) => {
        let movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        let movieObj = movies[index];
        movieObj.liked = !movie.liked
        this.setState({ movies: movies })
        console.log(this.state.movies)
    }

    render() {
        const tableHead = ['Title', 'Genre', 'Stock', 'Rate', 'Like', 'Delete'];
        const { length: count } = this.state.movies;
        if (count === 0) return <div className='m-5'> There are no movies available.</div>;
        return <Movie
            movies={this.state.movies}
            tableHead={tableHead}
            deleteMovie={this.deleteMovie}
            count={count}
            handleLike={this.handleLike}
        />;
    }
}

export default Movies;