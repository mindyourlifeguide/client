import React, { useEffect, useState } from 'react';
import './App.scss';

import axios from 'axios';
import { Title } from './components/Title';
import { UploadFilmsList } from './components/UploadFilmsList';
import { AddFilm } from './components/AddFilm';
import { SortAlphabetically } from './components/SortAlphabetically';
import { Search } from './components/Search';
import { FilmsList } from './components/Films/FilmsList';

const App = () => {
	const [films, setFilms] = useState([]);
	const [searchLine, setSearchLine] = useState('');
	const [radio, setRadio] = useState('Film');
	const [forceRerender, setForceRerender] = useState(true);

	// upload data with DB
	useEffect(() => {
		axios
			.get('http://localhost:5000/api/films')
			.then(res => {
				setFilms(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);
	// alphabetical sorting list
	const sorting = () => {
		setFilms(films.sort((a, b) => (a.title > b.title ? 1 : -1)));
		setForceRerender(!forceRerender);
	};

	return (
		<div>
			<Title />
			<div className="button">
				<UploadFilmsList className="upload" />
				<div className="add">
					<AddFilm setFilms={setFilms} films={films} />
				</div>
			</div>

			<div className="control">
				<SortAlphabetically sorting={sorting} />

				<Search
					searchLine={searchLine}
					setSearchLine={setSearchLine}
					radio={radio}
					setRadio={setRadio}
				/>
			</div>

			<FilmsList
				films={films}
				setFilms={setFilms}
				searchLine={searchLine}
				radio={radio}
				forceRerender={forceRerender}
				setForceRerender={setForceRerender}
			/>
		</div>
	);
};

export { App };
