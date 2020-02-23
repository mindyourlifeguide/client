import React from 'react';
import './FilmsListItem.scss';
import { IconButton } from '@material-ui/core';
import { TreeView, TreeItem } from '@material-ui/lab';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import TheatersIcon from '@material-ui/icons/Theaters';
import TimelineIcon from '@material-ui/icons/Timeline';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';

import { green, deepOrange, deepPurple } from '@material-ui/core/colors';

const FilmsListItem = ({ title, year, format, stars }) => {
	const [expanded, setExpanded] = React.useState([]);

	const handleChange = (event, nodes) => {
		setExpanded(nodes);
	};

	const actor = stars.join(', ');

	return (
		<div className="item">
			<IconButton
				className="delete"
				color="secondary"
				aria-label="delete"
				component="span"
			>
				<DeleteOutlineIcon />
			</IconButton>
			<TreeView
				defaultCollapseIcon={<ErrorOutlineIcon color="primary" />}
				defaultExpandIcon={<ErrorOutlineIcon color="primary" />}
				expanded={expanded}
				onNodeToggle={handleChange}
			>
				<TreeItem nodeId="1" label={title}>
					<TreeItem
						nodeId="2"
						label={year}
						icon={<TimelineIcon style={{ color: deepOrange[500] }} />}
					/>
					<TreeItem
						nodeId="3"
						label={format}
						icon={<TheatersIcon style={{ color: green[500] }} />}
					/>
					<TreeItem
						nodeId="4"
						label={actor}
						icon={<PeopleAltRoundedIcon style={{ color: deepPurple[500] }} />}
					/>
				</TreeItem>
			</TreeView>
		</div>
	);
};

export { FilmsListItem };
