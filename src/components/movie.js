import React from 'react';
import Like from './like';

const Movie = (props) => <div>
    <h2 className="m-3">Movie Information</h2>
    <h6>Currently {props.count} movies available.</h6>
    <table className="table">
        <thead>
            <tr>
                {props.tableHead.map(elem => <th scope="col">{elem}</th>)}
            </tr>
        </thead>
        <tbody>

            {props.movies && props.movies.map(movie =>
                <tr key={movie._id}>
                    <td scope="row">{movie.title}</td>
                    <td scope="row">{movie.genre.name}</td>
                    <td scope="row">{movie.numberInStock}</td>
                    <td scope="row">{movie.dailyRentalRate}</td>
                    <td scope="row">
                        <Like
                            liked={movie.liked}
                            movie={movie}
                            handleLike={props.handleLike}
                        // onClick={props.handleLike}
                        />
                    </td>
                    <td scope="row">
                        <button
                            onClick={() => { props.deleteMovie(movie._id) }}
                            className="btn-danger">Delete</button></td>
                </tr>
            )}


        </tbody>

    </table>
</div>

export default Movie;