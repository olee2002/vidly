import React, { Component } from 'react';

class Like extends Component {

    render() {
        let likeButton = "fa fa-heart"
        if (!this.props.liked) likeButton += "-o"
        return (
            <i
                onClick={() => this.props.handleLike(this.props.movie)}
                style={{ cursor: 'pointer' }}
                className={likeButton}
                aria-hidden="true"></i>
        );
    }
}

export default Like;