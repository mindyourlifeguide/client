import React, { PureComponent } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { Spinner } from '../components/Spinner';
import { ErrorIndicator } from '../components/Error/ErrorIndicator';
import { withDataStoreService } from '../components/hoc';
import { FilmsList } from '../components/Films/FilmsList';
import { fetchFilms } from '../actions/filmsActions';

class HomePageContainers extends PureComponent {
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
		return <FilmsList films={films} term={term} />;
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

export const HomePage = compose(
	withDataStoreService(),
	connect(mapStateToProps, mapDispatchToProps),
)(HomePageContainers);
