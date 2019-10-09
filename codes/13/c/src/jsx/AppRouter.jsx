import { hot } from 'react-hot-loader/root';

import React from 'react';

class AppRouter extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    <li><a href="#/">Home</a></li>
                    <li><a href="#/about">About</a></li>
                    <li><a href="#/posts">Posts</a></li>
                    <li><a href="#/contact">Contact</a></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default hot(AppRouter);
