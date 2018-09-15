import React, { Component } from 'react';
import PropTypes from 'prop-types';
import range from 'lodash/range';

const Pagination = (props) => {
    const { count, perPage, currentPage, onPageChange, handlePrevious, handleNext } = props;
    const pageCount = Math.ceil(count / perPage);
    const pages = range(1, pageCount + 1);
    return <nav>
        <ul className="pagination">
            <li
                className="page-item"
                onClick={() => handlePrevious(currentPage)}>
                <a className="page-link" >Previous</a>
            </li>
            {pages.map(page => <li key={page}
                className={page === currentPage ? 'page-item active' : 'page-item'}>
                <a className="page-link"
                    onClick={() => onPageChange(page)}>{page}</a>
            </li>)}
            <li className="page-item"
                onClick={() => handleNext(currentPage, pageCount)}>
                <a className="page-link">Next</a>
            </li>
        </ul>
    </nav >
}

Pagination.propType = {
    count: PropTypes.number.isRequired,
    perPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.number.isRequired
};

export default Pagination;