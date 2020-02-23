import { SET_RADIO_SEARCH_FILM, SET_RADIO_SEARCH_ACTOR } from '../constants';

export const searchReducer = (state, action) => {
	if (state === undefined) {
		return {
			term: '',
			radio: '',
		};
	}
	switch (action.type) {
		case SET_RADIO_SEARCH_FILM:
			return {
				radio: action.payload,
			};
		case SET_RADIO_SEARCH_ACTOR:
			return {
				radio: action.payload,
			};
		default:
			return state.searchState;
	}
};
