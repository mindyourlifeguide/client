import React from 'react';
import TextField from '@material-ui/core/TextField';

const SearchActor = () => {
	return (
		<div className="search">
			<TextField
				id="outlined-search"
				label="Search actor"
				type="search"
				variant="outlined"
				size="small"
			/>
		</div>
	);
};

export { SearchActor };
