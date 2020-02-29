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
import Typography from '@material-ui/core/Typography';

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
	const [errorAdd, setErrorAdd] = useState(false);

	// the modal window error adding film
	const handleOpenErrorAdd = () => {
		setErrorAdd(true);
	};
	const handleCloseErrorAdd = () => {
		setErrorAdd(false);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const handleDelete = () => {
		axios
			.delete(`http://localhost:5000/api/films/${clickedFilmID}`)
			.then(() => {
				films.splice(
					films.findIndex(film => film._id === clickedFilmID),
					1,
				);
			})
			.then(setForceRerender(!forceRerender))
			.then(handleClose)
			.catch(err => {
				handleClose();
				handleOpenErrorAdd();
				console.log(err);
			});
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
			{errorAdd && (
				<div>
					<Dialog
						onClose={handleCloseErrorAdd}
						aria-labelledby="customized-dialog-title"
						open={errorAdd}
					>
						<DialogTitle
							onClose={handleCloseErrorAdd}
							id="customized-dialog-title"
							style={{ color: 'red' }}
						>
							Error
						</DialogTitle>
						<DialogContent dividers>
							<Typography gutterBottom>
								Oops, something went wrong. Please, try again later.
							</Typography>
						</DialogContent>
						<DialogActions />
					</Dialog>
				</div>
			)}
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
										onClick={() => handleClickOpen(setClickedFilmID(film._id))}
									>
										<DeleteOutlineIcon />
									</IconButton>
									<Dialog
										open={open}
										onClose={handleClose}
										aria-labelledby="alert-dialog-title"
										aria-describedby="alert-dialog-description"
									>
										<DialogTitle
											id="alert-dialog-title"
											style={{ color: 'red' }}
										>
											DANGEROUS ZONE
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
						database.
						<p>
							You can write to us to fix this or add a file manually using the{' '}
							<b>"ADD"</b> button.
						</p>
					</p>
				)}
			</ul>
		</div>
	);
};

export { FilmsList };
