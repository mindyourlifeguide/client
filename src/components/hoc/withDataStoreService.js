import React from 'react';
import { DataStoreServiceConsumer } from '../../utils/dataStoreServiceContext';

export const withDataStoreService = () => Wrapped => {
	return props => {
		return (
			<DataStoreServiceConsumer>
				{dataStoreService => {
					return <Wrapped {...props} dataStoreService={dataStoreService} />;
				}}
			</DataStoreServiceConsumer>
		);
	};
};
