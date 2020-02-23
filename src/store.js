import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { reducer } from './reducer';

export const store = createStore(
	reducer,
	composeWithDevTools(
		applyMiddleware(thunkMiddleware, logger),
		// other store enhancers if any
	),
);
