import React from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import './Search.scss';

import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

const Search = ({ films, term }) => {
	const [selectedValue, setSelectedValue] = React.useState('b');
	const handleChange = event => {
		setSelectedValue(event.target.value);
	};

	const dataSearch = e => {};
	return (
		<div className="search">
			<TextField
				value={term}
				id="outlined-search"
				label="Search film"
				type="search"
				variant="outlined"
				size="small"
				onChange={dataSearch}
			/>
			<div>
				<Radio
					checked={selectedValue === 'b'}
					onChange={handleChange}
					value="b"
					color="primary"
					name="radio-button-demo"
					inputProps={{ 'aria-label': 'B' }}
				/>
				<label>Film</label>
				<Radio
					checked={selectedValue === 'd'}
					onChange={handleChange}
					value="d"
					color="secondary"
					name="radio-button-demo"
					inputProps={{ 'aria-label': 'D' }}
				/>
				<label>Actor</label>
			</div>
		</div>
	);
};

export { Search };
