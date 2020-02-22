import React from 'react';
import './Sort.scss';
import SortIcon from '@material-ui/icons/Sort';
import { deepPurple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

const Sort = () => {
	return (
		<div className={'sort'}>
			<Button style={{ color: deepPurple[500] }}>
				<SortIcon size="medium" />
			</Button>
		</div>
	);
};

export { Sort };