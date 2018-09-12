import React, { Component } from 'react';
import _ from 'lodash';

const Pagination = (props) => {
    const { count, perPage } = props;
    const pageCount = Math.floor(count / perPage);
    if (pageCount <= 1) return null;
    const pages = _.range(1, pageCount + 1);
    console.log(pages)
    return <nav>
        <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            {pages.map(page => <li key={page} className="page-item">
                <a className="page-link" href="#">{page}</a>
            </li>)}
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
        </ul>
    </nav >
}


export default Pagination;