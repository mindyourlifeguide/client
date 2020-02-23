import React from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import './Search.scss';

const Search = () => {
	const [selectedValue, setSelectedValue] = React.useState('Film');
	const [search, setSearch] = React.useState('');

	const handleChange = event => {
		setSelectedValue(console.log(event.target.value));
	};

	return (
		<div className="search">
			<TextField
				value={search}
				id="outlined-search"
				label="Search film"
				type="search"
				variant="outlined"
				size="small"
				onChange={e => setSearch(console.log(e.target.value))}
			/>
			<div>
				<Radio
					checked={selectedValue === 'Film'}
					onChange={handleChange}
					value="Film"
					color="primary"
					name="radio-button-demo"
					inputProps={{ 'aria-label': 'Film' }}
				/>
				<label>Film</label>
				<Radio
					checked={selectedValue === 'Actor'}
					onChange={handleChange}
					value="Actor"
					color="secondary"
					name="radio-button-demo"
					inputProps={{ 'aria-label': 'Actor' }}
				/>
				<label>Actor</label>
			</div>
		</div>
	);
};

export { Search };
