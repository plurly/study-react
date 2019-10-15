import styles from './app.css';
import { hot } from 'react-hot-loader/root';

import React from 'react';
import { connect } from 'react-redux';

import { fetchMoviesActionCreator } from 'reducers/movies';

import data from 'data/movies';

class App extends React.Component {

    componentDidMount() {
        this.props.fetchMovies(data);
    }

    render() {
        return <div className={styles.app}>{this.props.children}</div>;
    }
}

// (dispatch) => object | object
const mapDispatchToProps = {
    fetchMovies: fetchMoviesActionCreator
};

export default connect(null, mapDispatchToProps)(hot(App));
