import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from './pages';

export const App = () => {
	return (
		<Switch>
			<Route path="/" component={HomePage} exact />
		</Switch>
	);
};
