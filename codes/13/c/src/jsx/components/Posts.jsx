import React from 'react';

const postItems = Array.from({length: 5}, (x, i) => {

    const index = i + 1;
    const link = `#/posts/${index}`;

    return (
        <li key={'post:' + index}>
            <a href={link}>Post - {index}</a>
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
