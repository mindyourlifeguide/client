import React from 'react';
import './HomePage.scss';
import { Films } from '../containers/FilmsContainers';
import { UploadFile } from '../components/UploadFile';
import { Add } from '../components/Add';
import { Title } from '../components/Title';
import { Sort } from '../components/Sort';
import { SearchActor } from '../components/SearchActor';
import { Search } from '../components/SearchFilm';

export const HomePage = () => {
	return (
		<div>
			<Title />
			<div className="button">
				<div className="upload">
					<UploadFile />
				</div>
				<div className="add">
					<Add />
				</div>
			</div>
			<div className="control">
				<Sort /> <Search />
			</div>
			<Films />
		</div>
	);
};
