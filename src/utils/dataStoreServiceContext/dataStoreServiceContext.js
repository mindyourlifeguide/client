import React from 'react';

const {
	Provider: DataStoreServiceProvider,
	Consumer: DataStoreServiceConsumer,
} = React.createContext();

export { DataStoreServiceProvider, DataStoreServiceConsumer };
