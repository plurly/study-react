import React from 'react';
import { Link } from 'react-router-dom';

const postItems = Array.from({length: 5}, (x, i) => {

    const index = i + 1;
    const link = `/posts/${index}`;

    return (
        <li key={'post:' + index}>
            <Link to={link}>Post - {index}</Link>
        </li>
    );
});

export default (props) => {

    return (
        <div>
            <h1>Posts</h1>
            <ul>{postItems}</ul>
        </div>
    );
};
