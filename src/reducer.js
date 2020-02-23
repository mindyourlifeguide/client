import {
	FETCH_FILMS_FAILURE,
	FETCH_FILMS_SUCCESS,
	FETCH_FILMS_REQUESTED,
	SET_SORT_FILMS_ALPHABET,
} from './constants';

export const reducer = (state, action) => {
	if (state === undefined) {
		return {
			films: [],
			loading: true,
			error: null,
		};
	}
	switch (action.type) {
		case FETCH_FILMS_REQUESTED:
			return { films: [], loading: true, error: null };
		case FETCH_FILMS_SUCCESS:
			return { films: action.payload, loading: false };
		case FETCH_FILMS_FAILURE:
			return {
				films: [],
				loading: false,
				error: action.payload,
			};
		case SET_SORT_FILMS_ALPHABET:
			return { films: action.payload, loading: false };

		default:
			return state;
	}
};
