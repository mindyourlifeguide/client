import React from 'react';
import './SortList.scss';
import SortIcon from '@material-ui/icons/Sort';
import { deepPurple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

const SortList = ({ films }) => {
	const alphabetSort = films => {
		const sorted = films.sort(function(a, b) {
			if (
				a.title.substr(0, 1).toLowerCase() > b.title.substr(0, 1).toLowerCase()
			) {
				return films === 1 ? 1 : -1;
			}
			if (
				a.title.substr(0, 1).toLowerCase() < b.title.substr(0, 1).toLowerCase()
			) {
				return films === 1 ? -1 : 1;
			}
			return 0;
		});
		return films;
	};

	return (
		<div className="sort">
			<Button
				style={{ color: deepPurple[500] }}
				onClick={() => {
					alphabetSort();
				}}
			>
				<SortIcon size="medium" />
			</Button>
		</div>
	);
};

export { SortList };
