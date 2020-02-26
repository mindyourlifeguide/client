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
	const [confirmDelete, setConfirmDelete] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
		setConfirmDelete(false);
	};

	const handleClose = () => {
		setOpen(false);
		setConfirmDelete(false);
	};
	const handleClickAgree = () => {
		setConfirmDelete(true);
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
								<div className="delete">
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
								</div>

								<div>
									<Button
										variant="outlined"
										color="primary"
										onClick={handleClickOpen}
									>
										Open alert dialog
									</Button>
									<Dialog
										style={{ opacity: 0.5 }}
										open={open}
										onClose={handleClose}
										aria-labelledby="alert-dialog-title"
										aria-describedby="alert-dialog-description"
									>
										<DialogTitle id="alert-dialog-title">
											{"Use Google's location service?"}
										</DialogTitle>
										<DialogContent>
											<DialogContentText id="alert-dialog-description">
												Let Google help apps determine location. This means
												sending anonymous location data to Google, even when no
												apps are running.
											</DialogContentText>
										</DialogContent>
										<DialogActions>
											<Button onClick={handleClose} color="primary">
												Disagree
											</Button>
											<Button
												onClick={handleClickAgree}
												color="primary"
												autoFocus
											>
												Agree
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
						Sorry. The file you are looking for is not in our database. You can
						write to us to fix this or add a file manually using the "Add"
						button
					</p>
				)}
			</ul>
		</div>
	);
};

export { FilmsList };
