import React, { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DescriptionIcon from '@material-ui/icons/Description';
import { yellow, blue, pink } from '@material-ui/core/colors';
import './UploadFile.scss';

const UploadFile = ({ getFilms }) => {
	const films = [];
	const [data, setData] = useState([]);
	const [titles, setTitles] = useState([]);
	const [releaseYears, setReleaseYears] = useState([]);
	const [formats, setFormats] = useState([]);
	const [stars, setStars] = useState([]);

	const postFilms = i => {
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
		if (
			films.filter(
				film =>
					film.title !== titles[i] ||
					Number(film.release_year) !== Number(releaseYears[i]) ||
					film.format !== formats[i] ||
					compareArray(i, film),
			).length === films.length
		) {
			axios
				.post(`http://localhost:5000/api/films`, {
					title: titles[i],
					release_year: Number(releaseYears[i]),
					format: formats[i],
					stars: stars[i].split(', ').filter((star, index) => {
						return index === stars[i].split(', ').indexOf(star);
					}),
				})
				.then(response => window.location.reload());
		}
	};

	const handleFileLoad = e => {
		setData(e.target.result.split('\n'));
	};

	const sortingBetweenArray = () => {
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

	const uploadFile = e => {
		const reader = new FileReader();
		reader.onload = handleFileLoad;
		reader.readAsText(e.target.files[0]);
	};

	return (
		<div className="upload">
			<input
				id="file"
				type="file"
				name="file"
				className="inputfile"
				onChange={e => {
					uploadFile(e);
				}}
			/>

			<Button
				className="chooseFile"
				style={{
					color: yellow[50],
					background: pink[300],
					marginRight: 10,
				}}
				startIcon={<DescriptionIcon />}
			>
				<label htmlFor="file">Choose a file</label>
			</Button>
			<Button
				variant="contained"
				style={{ color: yellow[50], background: blue[900] }}
				startIcon={<CloudUploadIcon />}
				onClick={() => {
					sortingBetweenArray();
				}}
			>
				Upload
			</Button>
		</div>
	);
};

export { UploadFile };
// setTimeout(() => resolve(window.location.reload(), 3000)
