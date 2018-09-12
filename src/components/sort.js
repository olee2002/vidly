import React from 'react';

const Sort = (props) => {
    const { handleGenre, isSelected } = props;

    const genre = ['All Genre', 'Action', 'Comedy', 'Thriller'];
    return <ul className="list-group" style={{ cursor: 'pointer' }}>
        {genre.map(g =>
            <li
                onClick={() => handleGenre(g)}
                className={isSelected ? "list-group-item Active" : "list-group-item"}> {g}
            </li>
        )}
    </ul >
}

export default Sort;