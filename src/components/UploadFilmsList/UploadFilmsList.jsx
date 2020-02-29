import React, { useState } from 'react';
import './UploadFilmsList.scss';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DescriptionIcon from '@material-ui/icons/Description';
import { yellow, blue, pink } from '@material-ui/core/colors';
import { Dialog } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

const UploadFilmsList = ({ setFilms, films }) => {
	const [data, setData] = useState([]);
	const [titles, setTitles] = useState([]);
	const [releaseYears, setReleaseYears] = useState([]);
	const [formats, setFormats] = useState([]);
	const [stars, setStars] = useState([]);
	const [errorAdd, setErrorAdd] = useState(false);
	const [repeatAdd, setRepeatAdd] = useState(false);
	const [uploadSuccessfully, setUploadSuccessfully] = useState(false);

	// the modal window successfully upload film
	const uploadOpenSuccessfully = () => {
		setUploadSuccessfully(true);
	};
	const uploadCloseSuccessfully = () => {
		setUploadSuccessfully(false);
	};
	// the modal window error upload film
	const handleOpenErrorUpload = () => {
		setErrorAdd(true);
	};
	const handleCloseErrorUpload = () => {
		setErrorAdd(false);
	};
	// the modal window repeat upload film
	const handleOpenRepeatUpload = () => {
		setRepeatAdd(true);
	};
	const handleCloseRepeatUpload = () => {
		setRepeatAdd(false);
	};

	const onButtonClick = () => {
		document.getElementById('file').click();
	};
	const handleFileLoad = e => {
		setData(e.target.result.split('\n'));
	};

	// upload films list

	const uploadFile = e => {
		const reader = new FileReader();
		reader.onload = handleFileLoad;
		reader.readAsText(e.target.files[0]);
	};

	const compareArray = (i, film) => {
		return (
			stars[i]
				.split(', ')
				.filter((star, index) => {
					return index === stars[i].split(', ').indexOf(star);
				})
				.sort()
				.join(', ') !== film.stars.sort().join(', ')
		);
	};

	const postFilms = i => {
		if (
			films.filter(
				film =>
					film.title !== titles[i] ||
					+film.releaseYear !== +releaseYears[i] ||
					film.format !== formats[i] ||
					compareArray(i, film),
			).length === films.length
		) {
			axios
				.post(`http://localhost:5000/api/films`, {
					title: titles[i],
					releaseYear: +releaseYears[i],
					format: formats[i],
					stars: stars[i].split(', ').filter((star, index) => {
						return index === stars[i].split(', ').indexOf(star);
					}),
				})
				.then(() => {
					uploadOpenSuccessfully();
					axios.get('http://localhost:5000/api/films').then(res => {
						setFilms(res.data);
					});
				})
				.catch(handleOpenErrorUpload);
		} else {
			handleOpenRepeatUpload();
		}
	};

	const sortingArray = () => {
		for (let i = 0; i < data.length; i++) {
			if (data[i].includes('Title: ')) {
				setTitles(
					titles.push(data[i].replace(/Title: /g, '').replace(/\r/g, '')),
				);
			}
			if (data[i].includes('Release Year: ')) {
				setReleaseYears(
					releaseYears.push(
						data[i].replace(/Release Year: /g, '').replace(/\r/g, ''),
					),
				);
			}
			if (data[i].includes('Format: ')) {
				setFormats(
					formats.push(data[i].replace(/Format: /g, '').replace(/\r/g, '')),
				);
			}
			if (data[i].includes('Stars: ')) {
				setStars(
					stars.push(data[i].replace(/Stars: /g, '').replace(/\r/g, '')),
				);
			}
		}
		for (let i = 0; i < titles.length; i++) {
			postFilms(i);
		}
	};

	return (
		<div className="buttonUpload">
			{uploadSuccessfully && (
				<div className="successfullyModal">
					<Dialog
						onClose={uploadCloseSuccessfully}
						aria-labelledby="customized-dialog-title"
						open={uploadSuccessfully}
					>
						<DialogTitle
							id="customized-dialog-title"
							onClose={uploadCloseSuccessfully}
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
						onClose={handleCloseErrorUpload}
						aria-labelledby="customized-dialog-title"
						open={errorAdd}
					>
						<DialogTitle
							onClose={handleCloseErrorUpload}
							id="customized-dialog-title"
							style={{ color: 'red' }}
						>
							Error
						</DialogTitle>
						<DialogContent dividers>
							<Typography gutterBottom>
								Oops, something went wrong. Data is missing or in the wrong
								format. Check them out and try adding again.
							</Typography>
						</DialogContent>
						<DialogActions />
					</Dialog>
				</div>
			)}

			{repeatAdd && (
				<div className="errorModal">
					<Dialog
						onClose={handleCloseRepeatUpload}
						aria-labelledby="customized-dialog-title"
						open={repeatAdd}
					>
						<DialogTitle
							onClose={handleCloseRepeatUpload}
							id="customized-dialog-title"
							style={{ color: 'red' }}
						>
							Canceled
						</DialogTitle>
						<DialogContent dividers>
							<Typography gutterBottom>
								These films are already in our database.
							</Typography>
						</DialogContent>
						<DialogActions />
					</Dialog>
				</div>
			)}

			<input
				id="file"
				type="file"
				name="file"
				className="uploadInputFile"
				onChange={e => {
					uploadFile(e);
				}}
			/>

			<label htmlFor="file">
				<Button
					htmlFor="file"
					className="chooseFile"
					style={{
						color: yellow[50],
						background: pink[300],
					}}
					startIcon={<DescriptionIcon />}
					onClick={() => {
						onButtonClick();
					}}
				>
					Choose a file
				</Button>
			</label>

			<Button
				className="upload"
				variant="contained"
				style={{ color: yellow[50], background: blue[900] }}
				startIcon={<CloudUploadIcon />}
				onClick={() => {
					sortingArray();
				}}
			>
				Upload
			</Button>
		</div>
	);
};

export { UploadFilmsList };
