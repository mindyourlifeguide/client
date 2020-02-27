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
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@material-ui/core';

import { yellow, green, red } from '@material-ui/core/colors';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const AddFilm = ({ setFilms, films }) => {
	const [open, setOpen] = useState(false);
	const [format, setFormat] = useState('DVD');
	const [title, setTitle] = useState('');
	const [releaseYear, setReleaseYear] = useState('');
	const [stars, setStars] = useState('');
	const [repeat, setRepeat] = useState(false);
	const [confirmYear, setConfirmYear] = useState(false);

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

	const repeatProperties = film => {
		return (
			stars
				.split((', ' && ',') || ' ,')
				.filter((star, index) => {
					return index === stars.split((', ' && ',') || ' ,').indexOf(star);
				})
				.sort()
				.join(', ') !== film.stars.sort().join(', ')
		);
	};

	const repeatFilms = e => {
		e.preventDefault();
		if (
			films.filter(
				film =>
					film.title !== title ||
					Number(film.releaseYear) !== Number(releaseYear) ||
					film.format !== format ||
					repeatProperties(film),
			).length === films.length
		) {
			setRepeat(false);
			handleAdd();
		} else {
			setRepeat(true);
		}
	};

	// the modal window adding film
	const handleClickOpen = () => {
		setOpen(true);
		setRepeat(false);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const handleFormatChange = e => {
		setFormat(e.target.value);
	};

	// adding film to list
	const handleAdd = () => {
		axios
			.post(`http://localhost:5000/api/films`, {
				title: title,
				releaseYear: releaseYear,
				format: format,
				stars: stars.split(', ').filter((star, index) => {
					return index === stars.split(', ').indexOf(star);
				}),
			})
			.then(handleClose)
			.then(res => {
				setFilms(res.data);
			})
			.then(window.location.reload());
	};

	return (
		<div>
			<Button
				className="add"
				variant="contained"
				style={{ color: yellow[50], background: green[900] }}
				startIcon={<AddCircleIcon />}
				onClick={handleClickOpen}
			>
				Add
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
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
					<Button onClick={handleClose} color="primary">
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
