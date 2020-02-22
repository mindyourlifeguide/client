import React from 'react';
import { FilmsListItem } from './FilmsListItem';
import './FilmList.scss';

export const FilmsList = ({ films }) => {
	return (
		<div>
			<ul>
				{films.map(({ _id, stars, title, release_year, format }) => {
					return (
						<li key={_id}>
							<FilmsListItem
								title={title}
								year={release_year}
								format={format}
								stars={stars}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
