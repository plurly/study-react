import { handleActions } from 'redux-actions';

const FETCH_MOVIES = "movies/FETCH_MOVIES";
const FETCH_MOVIE = "movies/FETCH_MOVIE";

const initialState = {
    movies: [],
    movie: {
        starring: []
    }
};

export const fetchMoviesActionCreator = (movies) => ({
    type: FETCH_MOVIES,
    movies
});

export const fetchMovieActionCreator = (index) => ({
    type: FETCH_MOVIE,
    index
});

export const movieReducers = handleActions({
    [FETCH_MOVIES]: (state, action) => {
        return {
            ...state,
            movies: action.movies
        };
    },
    [FETCH_MOVIE]: (state, action) => {
        return {
            ...state,
            movie: state.movies[action.index - 1]
        }
    }
}, initialState);
