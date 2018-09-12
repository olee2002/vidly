import React, { Component } from 'react';
import { getMovies, deleteMovie } from '../services/fakeMovieService';
import Movie from './movie';
import Pagination from './pagination';
import { paginate } from '../utils/paginate';

class Movies extends Component {

    state = {
        movies: [],
        perPage: 4,
        currentPage: 1
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

    render() {
        const tableHead = ['Title', 'Genre', 'Stock', 'Rate', 'Like', 'Delete'];
        const { length: count } = this.state.movies;
        const { perPage, currentPage, movies } = this.state;
        if (count === 0) return <div className='m-5'> There are no movies available.</div>;

        const moviesPerPage = paginate(movies, currentPage, perPage)
        console.log(moviesPerPage)
        return <div>
            <Movie
                movies={moviesPerPage}
                tableHead={tableHead}
                deleteMovie={this.deleteMovie}
                count={count}
                handleLike={this.handleLike}
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