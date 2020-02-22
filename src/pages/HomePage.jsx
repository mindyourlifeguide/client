import React from 'react';
import './HomePage.scss';
import { Films } from '../containers/FilmsContainers';
import { Upload } from '../components/Upload';
import { Add } from '../components/Add';
import { Title } from '../components/Title';
import { Sort } from '../components/Sort';
import { SearchActor } from '../components/SearchActor';
import { SearchFilm } from '../components/SearchFilm';

export const HomePage = () => {
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
				<Sort /> <SearchFilm />
				<SearchActor />
			</div>
			<Films />
		</div>
	);
};
