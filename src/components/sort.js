import React from 'react';

const Sort = (props) => {
    const { handleGenre, filteredMovies } = props;
    console.log('test', filteredMovies)

    const genre = ['All Genre', 'Action', 'Comedy', 'Thriller'];
    return <select
        class="custom-select"
        onChange={handleGenre}
        id="inputGroupSelect02">
        {genre.map(g =>
            <option
                value={g}
                className={"list-group-item"}>{g}</option>
        )}
    </select>
}

export default Sort;