import React from 'react';

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

const Add = () => {
	const [open, setOpen] = React.useState(false);
	const [format, setFormat] = React.useState('dvd');

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleFormatChange = event => {
		setFormat(event.target.value);
	};

	return (
		<div>
			<Button
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
				<DialogTitle id="form-dialog-title">Add Film</DialogTitle>
				<DialogContent>
					<DialogContentText>
						To add film to this website, please enter info here.
					</DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Film"
						type="text"
						fullWidth
					/>
					<TextField
						margin="dense"
						id="year"
						label="Year"
						type="text"
						fullWidth
					/>
					<TextField
						margin="dense"
						id="actor"
						label="Actor"
						type="text"
						fullWidth
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
							<MenuItem value="dvd">DVD</MenuItem>
							<MenuItem value="vhs">VHS</MenuItem>
							<MenuItem value="bluRay">Blu-Ray</MenuItem>
						</Select>
					</FormControl>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handleClose} color="primary">
						Add
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export { Add };
