import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { ErrorBoundry } from './components/Error/ErrorBoundry';
import { DataStoreService } from './services/dataStoreService';
import { DataStoreServiceProvider } from './utils/dataStoreServiceContext';
import { store } from './store';
import { App } from './App';

const dataStoreService = new DataStoreService();

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundry>
			<DataStoreServiceProvider value={dataStoreService}>
				<Router>
					<App />
				</Router>
			</DataStoreServiceProvider>
		</ErrorBoundry>
	</Provider>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
