import React from 'react';

import { HashRouter, Route } from 'react-router-dom';

import Movies from 'components/movies/movies';

export default class AppRouter extends React.Component {

    render() {
        return (
            <HashRouter basename="/movies">
                <Route exact={true} path={''} component={Movies} />
            </HashRouter>
        );
    }
};
