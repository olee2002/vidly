import React, { Component } from 'react';
import { getMovies, deleteMovie } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Movie from './movie';
import Pagination from './pagination';

import { paginate } from '../utils/paginate';

class Movies extends Component {

    state = {
        movies: [],
        perPage: 4,
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

    handleGenre = (genre) => {

        const filteredMovies = this.state.movies.filter(movie => movie.genre.name === genre)
        console.log(genre === 'All Genre' ? this.state.movies : filteredMovies)
        this.setState({ movies: filteredMovies, isSelected: !this.state.isSeleted })
        console.log(this.state.isSelected)
    }

    render() {
        console.log(getGenres())
        const tableHead = ['Title', 'Genre', 'Stock', 'Rate', 'Like', 'Delete'];
        const { length: count } = this.state.movies;
        const { perPage, currentPage, movies } = this.state;
        if (count === 0) return <div className='m-5'> There are no movies available.</div>;

        const moviesPerPage = paginate(movies, currentPage, perPage)
        console.log(moviesPerPage)
        return <div>
            <h2 className="m-3">Movie Information</h2>
            <Movie
                movies={moviesPerPage}
                tableHead={tableHead}
                deleteMovie={this.deleteMovie}
                count={count}
                handleGenre={this.handleGenre}
                handleLike={this.handleLike}
                isSeleted={this.state.isSeleted}
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