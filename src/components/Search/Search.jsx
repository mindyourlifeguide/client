import React from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import './Search.scss';

const Search = ({ searchLine, setSearchLine, radio, setRadio }) => {
	return (
		// search fields with radio button "Film" or "Actor"
		// searching logic in the /src/components/Films/FilmsList/
		<div className="search">
			<form noValidate autoComplete="off">
				<TextField
					className="searchInput"
					label="Search field"
					type="search"
					variant="outlined"
					size="small"
					value={searchLine}
					onChange={e => {
						setSearchLine(e.target.value);
					}}
				/>
			</form>

			<div>
				<Radio
					checked={radio === 'Film'}
					color="primary"
					onChange={() => {
						setRadio('Film');
					}}
				/>
				<label>Film</label>

				<Radio
					checked={radio === 'Actor'}
					onChange={() => {
						setRadio('Actor');
					}}
					color="secondary"
				/>
				<label>Actor</label>
			</div>
		</div>
	);
};

export { Search };
