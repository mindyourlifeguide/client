import React from 'react';
import './FilmList.scss';
import { FilmsListItem } from '../FilmsListItem';
import { IconButton } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import axios from 'axios';

const FilmsList = ({
	films,
	forceRerender,
	setForceRerender,
	searchLine,
	radio,
	_id,
}) => {
	const searching = (searchLine, radio) => {
		if (radio === 'Film') {
			return film => {
				return (
					film.title.toLowerCase().includes(searchLine.toLowerCase()) ||
					!searchLine
				);
			};
		} else {
			return film => {
				return film.stars.find(stars =>
					stars.toLowerCase().includes(searchLine.toLowerCase()),
				);
			};
		}
	};

	const handleDelete = id => {
		films.splice(
			films.findIndex(film => film._id === id),
			1,
		);
		axios.delete(`http://localhost:5000/api/films/${id}`);
		setForceRerender(!forceRerender);
	};

	return (
		<div className="lists">
			<ul>
				{films.filter(searching(searchLine, radio)).map(film => {
					return (
						<li key={film._id}>
							<div className="info">
								<IconButton
									style={{ padding: 0 }}
									name="delete"
									className="delete"
									color="secondary"
									aria-label="delete"
									component="span"
									onClick={() => handleDelete(film._id)}
								>
									<DeleteOutlineIcon />
								</IconButton>

								<FilmsListItem
									className="info"
									id={film._id}
									title={film.title}
									year={film.release_year}
									format={film.format}
									stars={film.stars}
								/>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export { FilmsList };
