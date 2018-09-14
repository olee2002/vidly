import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Pagination = (props) => {
    const { count, perPage, currentPage, onPageChange, handlePrevious } = props;
    const pageCount = Math.ceil(count / perPage);
    // if (pageCount <= 1) return null;
    const pages = _.range(1, pageCount + 1);
    return <nav>
        <ul className="pagination">
            <li className="page-item" onClick={() => handlePrevious(currentPage)} value='previous'><a className="page-link" >Previous</a></li>
            {pages.map(page => <li key={page}
                className={page === currentPage ? 'page-item active' : 'page-item'}>
                <a className="page-link"
                    onClick={() => onPageChange(page)}>{page}</a>
            </li>)}
            <li className="page-item"><a className="page-link">Next</a></li>
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