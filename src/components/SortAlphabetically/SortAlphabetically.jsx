import React from 'react';
import { deepPurple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';

const SortAlphabetically = ({ sorting }) => {
	// sorting logic in the /src/App
	return (
		<div className="sort">
			<Button
				style={{ color: deepPurple[500] }}
				onClick={() => {
					sorting();
				}}
			>
				<SortByAlphaIcon size="medium" />
			</Button>
		</div>
	);
};

export { SortAlphabetically };
