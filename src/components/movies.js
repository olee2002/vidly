import React, { Component } from 'react';
import { getMovies, deleteMovie } from '../services/fakeMovieService';
import Movie from './movie';
import Pagination from './pagination';

class Movies extends Component {

    state = {
        movies: [],
        perPage: 2
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
    }
    handlePageChange = page => {
        console.log(page)
    }

    render() {
        const tableHead = ['Title', 'Genre', 'Stock', 'Rate', 'Like', 'Delete'];
        const { length: count } = this.state.movies;
        if (count === 0) return <div className='m-5'> There are no movies available.</div>;
        return <div>
            <Movie
                movies={this.state.movies}
                tableHead={tableHead}
                deleteMovie={this.deleteMovie}
                count={count}
                handleLike={this.handleLike}
            />
            <Pagination
                count={count}
                perPage={this.state.perPage}
                onPageChange={this.handlePageChange}
            />
        </div>
    }
}

export default Movies;