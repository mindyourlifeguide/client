import {
	FETCH_FILMS_FAILURE,
	FETCH_FILMS_REQUESTED,
	FETCH_FILMS_SUCCESS,
	SET_RADIO_SEARCH_ACTOR,
	SET_RADIO_SEARCH_FILM,
	SET_SORT_FILMS_ALPHABET,
} from './constants';

const fetchFilmsRequested = () => {
	return {
		type: FETCH_FILMS_REQUESTED,
	};
};

const fetchFilmsSuccess = filmsState => {
	return {
		type: FETCH_FILMS_SUCCESS,
		payload: filmsState,
	};
};

const fetchFilmsFailure = error => {
	return {
		type: FETCH_FILMS_FAILURE,
		payload: error,
	};
};

export const fetchFilms = dataStoreService => () => dispatch => {
	dispatch(fetchFilmsRequested());
	dataStoreService
		.getFilms()
		.then(films => dispatch(fetchFilmsSuccess(films)))
		.catch(err => dispatch(fetchFilmsFailure(err)));
};

export const sortFilmsAlphabet = filmsSort => {
	return {
		type: FETCH_FILMS_SUCCESS,
		payload: filmsSort,
	};
};
