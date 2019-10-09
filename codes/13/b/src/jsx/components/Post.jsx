import React from 'react';

export default (props) => {

    const { match, location, history } = props;

    setTimeout(() => {
        history.push("/");
    }, 3000);

    return <div>Post {match.params.id}</div>;
};
