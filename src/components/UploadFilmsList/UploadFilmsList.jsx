import React, { useState } from 'react';
import './UploadFilmsList.scss';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DescriptionIcon from '@material-ui/icons/Description';
import { yellow, blue, pink } from '@material-ui/core/colors';

const UploadFilmsList = () => {
	const [data, setData] = useState([]);
	const [titles, setTitles] = useState([]);
	const [releaseYears, setReleaseYears] = useState([]);
	const [formats, setFormats] = useState([]);
	const [stars, setStars] = useState([]);

	// upload films list
	const postFilms = i => {
		axios
			.post(`http://localhost:5000/api/films`, {
				title: titles[i],
				releaseYear: Number(releaseYears[i]),
				format: formats[i],
				stars: stars[i].split(', ').filter((star, index) => {
					return index === stars[i].split(', ').indexOf(star);
				}),
			})
			.then(response => window.location.reload());
	};
	const onButtonClick = () => {
		document.getElementById('file').click();
	};
	const handleFileLoad = e => {
		setData(e.target.result.split('\n'));
	};
	const uploadFile = e => {
		const reader = new FileReader();
		reader.onload = handleFileLoad;
		reader.readAsText(e.target.files[0]);
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
