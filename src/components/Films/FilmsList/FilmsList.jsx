import React, { useState } from 'react';
import './FilmList.scss';
import { FilmsListItem } from '../FilmsListItem';
import { IconButton } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const FilmsList = ({
	films,
	forceRerender,
	setForceRerender,
	searchLine,
	radio,
	_id,
}) => {
	const [open, setOpen] = React.useState(false);
	const [clickedFilmID, setClickedFilmID] = useState('');

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const handleDelete = () => {
		films.splice(
			films.findIndex(film => film._id === clickedFilmID),
			1,
		);
		axios.delete(`http://localhost:5000/api/films/${clickedFilmID}`);
		setForceRerender(!forceRerender);
		setOpen(false);
	};
	const searching = (searchLine, radio) => {
		if (radio === 'Film') {
			return film => {
				return film.title.toLowerCase().includes(searchLine.toLowerCase());
			};
		} else {
			return film => {
				return film.stars.find(stars =>
					stars.toLowerCase().includes(searchLine.toLowerCase()),
				);
			};
		}
	};

	return (
		<div className="lists">
			<ul>
				{films.filter(searching(searchLine, radio)).map(film => {
					return (
						<li key={film._id}>
							<div className="info">
								<div className="delete"></div>

								<div>
									<IconButton
										style={{ padding: 0 }}
										name="delete"
										className="delete"
										color="secondary"
										aria-label="delete"
										component="span"
										onClick={() => handleClickOpen(setClickedFilmID(film._id))}
									>
										<DeleteOutlineIcon />
									</IconButton>
									<Dialog
										style={{ opacity: 0.5 }}
										open={open}
										onClose={handleClose}
										aria-labelledby="alert-dialog-title"
										aria-describedby="alert-dialog-description"
									>
										<DialogTitle
											id="alert-dialog-title"
											style={{ color: 'red' }}
										>
											{'DANGEROUS ZONE'}
										</DialogTitle>
										<DialogContent>
											<DialogContentText
												id="alert-dialog-description"
												style={{ color: 'black' }}
											>
												This action permanently removes the movie from the
												database. Are you sure you want to delete the movie?
											</DialogContentText>
										</DialogContent>
										<DialogActions>
											<Button onClick={handleClose} color="primary">
												Cancel
											</Button>
											<Button
												onClick={handleDelete}
												color="secondary"
												autoFocus
											>
												Сonfirm deletion
											</Button>
										</DialogActions>
									</Dialog>
								</div>

								<FilmsListItem
									className="info"
									id={film._id}
									title={film.title}
									year={film.releaseYear}
									format={film.format}
									stars={film.stars}
								/>
							</div>
						</li>
					);
				})}
				{films.filter(searching(searchLine, radio)).length === 0 && (
					<p>
						<b>Sorry.</b> The file you are looking for isn&rsquo;t in our
						database. You can write to us to fix this or add a file manually
						using the
						<b>"Add"</b> button
					</p>
				)}
			</ul>
		</div>
	);
};

export { FilmsList };
