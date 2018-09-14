import React, { Component } from 'react';
import { getMovies, deleteMovie } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Movie from './movie';
import Pagination from './pagination';

import { paginate } from '../utils/paginate';

class Movies extends Component {

    state = {
        movies: [],
        perPage: 5,
        currentPage: 1,
        isSelected: false
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
        this.setState({ currentPage: page })
    }

    handleGenre = (e) => {
        const { movies } = this.state;
        const genre = e.target.value;
        const filteredMovies = movies.filter(movie => {
            if (genre === 'All Genre') {
                return movie;
            } else { return movie.genre.name === genre; }

        })
        this.setState({ filteredMovies, isSelected: !this.state.isSeleted })
    }

    render() {
        const tableHead = ['Title', 'Genre', 'Stock', 'Rate', 'Like', 'Delete'];
        const { perPage, currentPage, movies, filteredMovies, isSelected } = this.state;
        console.log('test movies', filteredMovies)
        const moviesPerPage = paginate(isSelected ? filteredMovies : movies, currentPage, perPage)
        const count = isSelected ? filteredMovies.length : movies.length;
        if (count === 0) return <div className='m-5'> There are no movies available.</div>;

        return <div>
            <h2 className="m-3">Movie Information</h2>
            <Movie
                movies={moviesPerPage}
                tableHead={tableHead}
                deleteMovie={this.deleteMovie}
                count={count}
                handleGenre={this.handleGenre}
                handleLike={this.handleLike}
                filteredMovies={filteredMovies}
            />
            <Pagination
                count={count}
                currentPage={currentPage}
                perPage={perPage}
                onPageChange={this.handlePageChange}
            />
        </div>
    }
}

export default Movies;