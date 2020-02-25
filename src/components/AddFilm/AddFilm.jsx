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

import { yellow, green } from '@material-ui/core/colors';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const AddFilm = ({ setFilms }) => {
	const [open, setOpen] = useState(false);
	const [format, setFormat] = useState('DVD');
	const [title, setTitle] = useState('');
	const [release_year, setReleaseYear] = useState('');
	const [enterStars, setEnterStars] = useState('');

	// the modal window adding film
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const handleFormatChange = event => {
		setFormat(event.target.value);
	};

	// adding film to list
	const handlAdd = () => {
		axios
			.post(`http://localhost:5000/api/films`, {
				title: title,
				release_year: release_year,
				format: format,
				stars: enterStars.split(', ').filter((star, index) => {
					return index === enterStars.split(', ').indexOf(star);
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
					<DialogContentText>
						To add film to this website, please enter info here.
					</DialogContentText>
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
						margin="dense"
						id="year"
						label="Year (only digits)"
						type="text"
						fullWidth
						onChange={e =>
							setReleaseYear(e.target.value.replace(/[^0-9]/gim, ''))
						}
					/>
					<TextField
						margin="dense"
						id="stars"
						label="Actor"
						type="text"
						fullWidth
						onChange={e => {
							setEnterStars(
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
					<Button onClick={handlAdd} color="primary">
						Add
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export { AddFilm };
