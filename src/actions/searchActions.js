import { SET_RADIO_SEARCH_ACTOR, SET_RADIO_SEARCH_FILM } from '../constants';

const setRadioSearchFilm = radioSearchFilm => {
	return {
		type: SET_RADIO_SEARCH_FILM,
		radio: radioSearchFilm,
	};
};
const setRadioSearchActor = radioSearchActor => {
	return {
		type: SET_RADIO_SEARCH_ACTOR,
		radio: radioSearchActor,
	};
};
