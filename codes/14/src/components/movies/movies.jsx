import styles from './movies.css';

import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';

import Movie from 'components/movie/movie';

class Movies extends React.Component {

    render() {

        const {
            movies = []
        } = this.props;

        return (
            <div className={styles.movies}>
                <div className={styles.list}>
                    {
                        movies.map((movie, index) => (
                            <Link key={index} to={`/${index + 1}`}>
                                <div className={styles.movie} style={{backgroundImage: `url(${movie.cover})`}}/>
                            </Link>
                        ))
                    }
                </div>
                <Route path={`/:id`} component={Movie} />
            </div>
        );
    }
}

const mapStateToProps = ({ movieReducers }) => {

    const { movies } = movieReducers;
    return { movies };
};

export default connect(mapStateToProps)(Movies);
