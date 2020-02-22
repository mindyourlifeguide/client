import {
	FETCH_FILMS_FAILURE,
	FETCH_FILMS_SUCCESS,
	FETCH_FILMS_REQUESTED,
} from '../constants';

export const filmsReducer = (state, action) => {
	if (state === undefined) {
		return {
			films: [],
			term: '',
			loading: true,
			error: null,
		};
	}
	switch (action.type) {
		case FETCH_FILMS_REQUESTED:
			return { films: [], term: '', loading: true, error: null };
		case FETCH_FILMS_SUCCESS:
			return { films: action.payload, term: '', loading: false };
		case FETCH_FILMS_FAILURE:
			return {
				films: [],
				term: '',
				loading: false,
				error: action.payload,
			};
		default:
			return state.filmsState;
	}
};
