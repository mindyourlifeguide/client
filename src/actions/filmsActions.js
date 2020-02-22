import {
	FETCH_FILMS_FAILURE,
	FETCH_FILMS_REQUESTED,
	FETCH_FILMS_SUCCESS,
} from '../constants';

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
		.then(contacts => dispatch(fetchFilmsSuccess(contacts)))
		.catch(err => dispatch(fetchFilmsFailure(err)));
};
