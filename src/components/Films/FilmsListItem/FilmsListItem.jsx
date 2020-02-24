import React, { useState } from 'react';
import './FilmsListItem.scss';

import { TreeView, TreeItem } from '@material-ui/lab';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import TheatersIcon from '@material-ui/icons/Theaters';
import TimelineIcon from '@material-ui/icons/Timeline';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import { green, deepOrange, deepPurple } from '@material-ui/core/colors';

const FilmsListItem = ({ title, year, format, stars, id }) => {
	const [expanded, setExpanded] = useState([]);

	const handleChange = (event, nodes) => {
		setExpanded(nodes);
	};

	const star = stars.join(', ');

	return (
		<div className="item" id={id}>
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
						label={star}
						icon={<PeopleAltRoundedIcon style={{ color: deepPurple[500] }} />}
					/>
				</TreeItem>
			</TreeView>
		</div>
	);
};

export { FilmsListItem };
