import React from 'react';
import Like from './like';
import Sort from './sort';

const Movie = (props) => <div className='row' >
    <div className='col-3'>
        <Sort
            handleGenre={props.handleGenre}
            filteredMovies={props.filteredMovies}
        />
    </div>
    <div className='col'>
        <h6>Currently {props.count} movies available.</h6>
        <table className="table">
            <thead>
                <tr>
                    {props.tableHead.map(elem => <th key={elem} scope="col">{elem}</th>)}
                </tr>
            </thead>
            <tbody>

                {props.movies.map(movie =>
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
                            />
                        </td>
                        <td scope="row">
                            <button
                                onClick={() => { props.deleteMovie(movie._id) }}
                                className="btn-danger"><i className="fa fa-trash" aria-hidden="true"></i></button></td>
                    </tr>
                )}


            </tbody>

        </table>
    </div>
</div>

export default Movie;