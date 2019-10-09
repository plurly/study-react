import React from 'react';

export default (props) => {

    setTimeout(() => {
        window.location.href = '#/';
    }, 3000);

    return <div>Post {props.id}</div>;
};
