import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/HomePage';

export const App = () => {
	return (
		<Switch>
			<Route path="/" component={Home} exact />
		</Switch>
	);
};
