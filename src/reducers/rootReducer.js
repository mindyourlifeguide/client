import { filmsReducer } from './filmsReducer';

export const rootReducer = (state, action) => {
	return {
		filmsState: filmsReducer(state, action),
	};
};
