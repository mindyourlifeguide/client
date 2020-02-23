import React, { PureComponent } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { Spinner } from '../components/Spinner';
import { ErrorIndicator } from '../components/Error/ErrorIndicator';
import { withDataStoreService } from '../components/hoc';
import { fetchFilms } from '../actions/filmsActions';
import { SortList } from '../components/SortList';

class SortContainers extends PureComponent {
	componentDidMount() {
		this.props.fetchFilms();
	}

	render() {
		const { films, term, loading, error } = this.props;

		if (loading) {
			return <Spinner />;
		}
		if (error) {
			return <ErrorIndicator />;
		}
		return <SortList films={films} term={term} />;
	}
}

const mapStateToProps = ({ filmsState: { films, term, loading, error } }) => {
	return {
		films,
		term,
		loading,
		error,
	};
};
const mapDispatchToProps = (dispatch, { dataStoreService }) => {
	return bindActionCreators(
		{
			fetchFilms: fetchFilms(dataStoreService),
		},
		dispatch,
	);
};

export const Sort = compose(
	withDataStoreService(),
	connect(mapStateToProps, mapDispatchToProps),
)(SortContainers);
