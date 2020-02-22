import React from 'react';
import TextField from '@material-ui/core/TextField';

const SearchFilm = () => {
	return (
		<div className="search">
			<TextField
				id="outlined-search"
				label="Search film"
				type="search"
				variant="outlined"
				size="small"
			/>
		</div>
	);
};

export { SearchFilm };
