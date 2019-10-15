import styles from './movie.css';

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchMovieActionCreator } from 'reducers/movies';

class Movie extends React.Component {

    componentDidMount() {

        const { match, fetchMovie } = this.props;

        fetchMovie(match.params.id);
    }

    componentDidUpdate(prevProps, prevState) {

        const { match, fetchMovie } = this.props;

        if (match.params.id != prevProps.match.params.id) {
            fetchMovie(prevProps.match.params.id);
        }
    }

    render() {

        const {
            movie = {
                starring: []
            }
        } = this.props;

        return (
            <div className={styles.movie} style={{backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.625) 100%), url(${movie.cover})`}}>
                <div className={styles.cover} style={{backgroundImage: `url(${movie.cover})`}} />
                <div className={styles.description}>
                    <div className={styles.title}>{movie.title}</div>
                    <div className={styles.year}>{movie.year}</div>
                    <div className={styles.starring}>
                        {
                            movie.starring.map((actor = {}, index) => (
                                <div key={index} className={styles.actor}>{actor.name}</div>
                            ))
                        }
                    </div>
                </div>
                <Link className={styles.closeButton} to={"/"}>&lt;-</Link>
            </div>
        );
    }
}

const mapStateToProps = ({ movieReducers }) => {

    const { movie } = movieReducers;
    return { movie };
};

// (dispatch) => object | object
const mapDispatchToProps = {
    fetchMovie: fetchMovieActionCreator
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
