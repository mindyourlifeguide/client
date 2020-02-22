import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer';

export const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(thunkMiddleware, logger),
		// other store enhancers if any
	),
);
