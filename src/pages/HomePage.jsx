import React, { PureComponent } from 'react';
import './HomePage.scss';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { Spinner } from '../components/Spinner';
import { ErrorIndicator } from '../components/Error/ErrorIndicator';
import { withDataStoreService } from '../components/hoc';
import { FilmsList } from '../components/Films/FilmsList';
import { fetchFilms } from '../actions';
import { Search } from '../components/Search';
import { Sort } from '../components/Sort';
import { Title } from '../components/Title';
import { Upload } from '../components/Upload';
import { Add } from '../components/Add';

class HomePage extends PureComponent {
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
		return (
			<div>
				<Title />
				<div className="button">
					<div className="upload">
						<Upload />
					</div>
					<div className="add">
						<Add />
					</div>
				</div>
				<div className="control">
					<Sort films={films} /> <Search films={films} />
				</div>
				<FilmsList films={films} term={term} />
			</div>
		);
	}
}

const mapStateToProps = ({ films, term, loading, error }) => {
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

export const Home = compose(
	withDataStoreService(),
	connect(mapStateToProps, mapDispatchToProps),
)(HomePage);
