import React, { useState } from 'react';
import './AddFilm.scss';
import axios from 'axios';
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Button,
	TextField,
	Dialog,
	DialogContentText,
} from '@material-ui/core';

import { yellow, green, red } from '@material-ui/core/colors';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

const styles = theme => ({
	root: {
		margin: 0,
		padding: theme.spacing(2),
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},
});

const DialogTitle = withStyles(styles)(props => {
	const { children, classes, onClose, ...other } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant="h6">{children}</Typography>
			{onClose ? (
				<IconButton
					aria-label="close"
					className={classes.closeButton}
					onClick={onClose}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
});

const DialogContent = withStyles(theme => ({
	root: {
		padding: theme.spacing(2),
	},
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
	root: {
		margin: 0,
		padding: theme.spacing(1),
	},
}))(MuiDialogActions);

const AddFilm = ({ setFilms, films }) => {
	const [format, setFormat] = useState('DVD');
	const [title, setTitle] = useState('');
	const [releaseYear, setReleaseYear] = useState('');
	const [stars, setStars] = useState('');
	const [repeat, setRepeat] = useState(false);
	const [confirmYear, setConfirmYear] = useState(false);
	const [openAdd, setOpenAdd] = useState(false);
	const [openSuccessfully, setOpenSuccessfully] = useState(false);
	const [errorAdd, setErrorAdd] = useState(false);

	// the modal window adding film
	const handleClickOpenAdd = () => {
		setOpenAdd(true);
		setRepeat(false);
	};
	const handleClickCloseAdd = () => {
		setOpenAdd(false);
	};
	const handleFormatChange = e => {
		setFormat(e.target.value);
	};

	// the modal window successfully adding film
	const handleOpenSuccessfully = () => {
		setOpenSuccessfully(true);
	};
	const handleCloseSuccessfully = () => {
		setOpenSuccessfully(false);
	};

	// the modal window error adding film
	const handleOpenErrorAdd = () => {
		setErrorAdd(true);
		setOpenAdd(false);
	};
	const handleCloseErrorAdd = () => {
		setErrorAdd(false);
	};

	// logic sort and repeat films
	const checkYear = year => {
		const maxYear = new Date().getFullYear();
		const minYear = 1850;
		setReleaseYear(year);
		if (year >= minYear && year <= maxYear) {
			setConfirmYear(true);
		} else {
			setConfirmYear(false);
		}
	};
	const repeatProperties = () => {
		return stars
			.split(',')
			.reduce((acc, current) => {
				current = current.trim().toLowerCase();
				if (!acc.includes(current)) {
					acc.push(current);
				}
				return acc;
			}, [])
			.sort()
			.join(', ')
			.toLowerCase();
	};

	const repeatFilms = e => {
		e.preventDefault();
		if (
			films.filter(
				film =>
					film.title.trim().toLowerCase() !== title.trim().toLowerCase() ||
					Number(film.releaseYear) !== Number(releaseYear) ||
					film.format !== format ||
					repeatProperties() !==
						film.stars
							.sort()
							.join(', ')
							.toLowerCase(),
			).length === films.length
		) {
			setRepeat(false);
			handleAdd();
		} else {
			setRepeat(true);
		}
	};
	// adding film to list
	const handleAdd = () => {
		axios
			.post(`http://localhost:5000/api/films`, {
				title: title
					.trim()
					.toLowerCase()
					.split(/\s+/)
					.map(word => word[0].toUpperCase() + word.substring(1))
					.join(' '),
				releaseYear: releaseYear,
				format: format,
				stars: stars.split(',').reduce((acc, current) => {
					current = current
						.trim()
						.toLowerCase()
						.split(/\s+/)
						.map(word => word[0].toUpperCase() + word.substring(1))
						.join(' ');
					if (!acc.includes(current)) {
						acc.push(current);
					}
					return acc;
				}, []),
			})
			.then(handleClickCloseAdd)
			.then(res => {
				handleOpenSuccessfully();
				axios.get('http://localhost:5000/api/films').then(res => {
					setFilms(res.data);
				});
			})
			.catch(handleOpenErrorAdd);
	};

	return (
		<div>
			{openSuccessfully && (
				<div className="successfullyModal">
					<Dialog
						onClose={handleCloseSuccessfully}
						aria-labelledby="customized-dialog-title"
						open={openSuccessfully}
					>
						<DialogTitle
							id="customized-dialog-title"
							onClose={handleCloseSuccessfully}
							style={{ color: 'green' }}
						>
							Successfully
						</DialogTitle>
						<DialogContent dividers>
							<Typography gutterBottom>
								Thank you for adding to our movie database! Each member’s
								contribution is important to the entire community.
							</Typography>
						</DialogContent>
						<DialogActions />
					</Dialog>
				</div>
			)}
			{errorAdd && (
				<div className="errorModal">
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

			<Button
				className="add"
				variant="contained"
				style={{ color: yellow[50], background: green[900] }}
				startIcon={<AddCircleIcon />}
				onClick={handleClickOpenAdd}
			>
				Add
			</Button>

			<Dialog open={openAdd} onClose={handleClickCloseAdd}>
				<DialogTitle id="form-dialog-title">Add Films</DialogTitle>
				<DialogContent>
					{repeat ? (
						<DialogContentText style={{ color: red[500] }}>
							This film is already in the database. You can repeat the entry by
							adding another movie.
						</DialogContentText>
					) : (
						<DialogContentText>
							To add film to this website, please enter info here.
						</DialogContentText>
					)}
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Films"
						type="text"
						fullWidth
						onChange={e => setTitle(e.target.value)}
					/>
					<TextField
						inputProps={{
							maxLength: 4,
						}}
						margin="dense"
						id="year"
						label="Year (only digits)"
						type="text"
						fullWidth
						onChange={e => checkYear(e.target.value.replace(/[^0-9]/gim, ''))}
					/>

					<TextField
						margin="dense"
						id="stars"
						label="Actor"
						type="text"
						fullWidth
						onChange={e => {
							setStars(
								e.target.value.replace(
									/[0-9.*+?!@#%_~+=&;'"./<>:`№/^${}()|[\]\\]/gim,
									'',
								),
							);
						}}
					/>
					<FormControl fullWidth>
						<InputLabel htmlFor="format">Format</InputLabel>
						<Select
							fullWidth
							autoFocus
							value={format}
							onChange={handleFormatChange}
							inputProps={{
								name: 'format',
								id: 'format',
							}}
						>
							<MenuItem value="DVD">DVD</MenuItem>
							<MenuItem value="VHS">VHS</MenuItem>
							<MenuItem value="Blu-Ray">Blu-Ray</MenuItem>
						</Select>
					</FormControl>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClickCloseAdd} color="primary">
						Cancel
					</Button>
					<Button
						onClick={e => {
							repeatFilms(e);
						}}
						disabled={!title || !confirmYear || !format || !stars}
						color="primary"
					>
						Add
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export { AddFilm };
