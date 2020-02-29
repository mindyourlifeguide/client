import React, { useEffect, useState } from 'react';
import './App.scss';

import axios from 'axios';
import { Title } from './components/Title';
import { UploadFilmsList } from './components/UploadFilmsList';
import { AddFilm } from './components/AddFilm';
import { SortAlphabetically } from './components/SortAlphabetically';
import { Search } from './components/Search';
import { FilmsList } from './components/Films/FilmsList';
import { Spinner } from './components/Modal/Spinner';
import { ErrorIndicator } from './components/Modal/ErrorIndicator';

const App = () => {
	const [films, setFilms] = useState([]);
	const [searchLine, setSearchLine] = useState('');
	const [radio, setRadio] = useState('Film');
	const [forceRerender, setForceRerender] = useState(true);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	// upload data with DB
	useEffect(() => {
		axios
			.get('http://localhost:5000/api/films')
			.then(res => {
				setFilms(res.data);
				setLoading(false);
			})
			.catch(err => {
				setLoading(false);
				setError(true);
				console.log(err);
			});
	}, []);
	// alphabetical sorting list
	const sorting = () => {
		setFilms(films.sort((a, b) => a.title.localeCompare(b.title)));
		setForceRerender(!forceRerender);
	};

	return (
		<div>
			{error && <ErrorIndicator />}
			{loading && <Spinner />}
			{!error && !loading && (
				<div>
					<Title />
					<div className="button">
						<UploadFilmsList
							className="upload"
							films={films}
							setFilms={setFilms}
						/>
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
					{films.length === 0 ? (
						<>
							<h3>Our movie database is empty.</h3>
							<div>
								You can manually add files through the <b>"ADD"</b> button or
								download the list via <b>"CHOOSE A FILE → UPLOAD"</b>
							</div>
						</>
					) : (
						<FilmsList
							films={films}
							setFilms={setFilms}
							searchLine={searchLine}
							radio={radio}
							forceRerender={forceRerender}
							setForceRerender={setForceRerender}
						/>
					)}
				</div>
			)}
		</div>
	);
};

export { App };
