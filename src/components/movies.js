import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

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

    render() {
        const tableHead = ['Title', 'Genre', 'Stock', 'Rate'];
        console.log(this.state.movies)
        return <table className="table">
            <thead>
                <tr>
                    {tableHead.map(elem => <th scope="col">{elem}</th>)}
                </tr>
            </thead>
            <tbody>

                {this.state.movies.map(movie =>
                    <tr>
                        <td scope="row">{movie.title}</td>
                        <td scope="row">{movie.genre.name}</td>
                        <td scope="row">{movie.numberInStock}</td>
                        <td scope="row">{movie.dailyRentalRate}</td>
                        <td scope="row"><button className="btn-danger">Delete</button></td>
                    </tr>
                )}


            </tbody>

        </table>;
    }
}

export default Movies;