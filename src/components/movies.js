import React, { Component } from 'react';
import { getMovies, deleteMovie } from '../services/fakeMovieService';

class Movies extends Component {

    state = {
        movies: []
    }

    componentDidMount = () => {
        const movieData = getMovies();
        this.setState({
            movies: movieData
        })
    }
    deleteMovie = (id) => {

    }

    render() {
        const tableHead = ['Title', 'Genre', 'Stock', 'Rate', ''];
        console.log(this.state.movies)
        return <div>
            <h2 className="m-3">Movie Information</h2>
            <table className="table">
                <thead>
                    <tr>
                        {tableHead.map(elem => <th scope="col">{elem}</th>)}
                    </tr>
                </thead>
                <tbody>

                    {this.state.movies && this.state.movies.map(movie =>
                        <tr>
                            <td scope="row">{movie.title}</td>
                            <td scope="row">{movie.genre.name}</td>
                            <td scope="row">{movie.numberInStock}</td>
                            <td scope="row">{movie.dailyRentalRate}</td>
                            <td scope="row">
                                <button
                                    onClick={() => {
                                        const deleted = deleteMovie(movie._id);
                                        const data = this.state.movies.filter(elem => elem !== deleted)
                                        console.log(data)
                                        this.setState({ movies: data })
                                    }
                                    }
                                    className="btn-danger">Delete</button></td>
                        </tr>
                    )}


                </tbody>

            </table>
        </div>
    }
}

export default Movies;