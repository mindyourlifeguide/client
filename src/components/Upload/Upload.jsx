import React from 'react';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { yellow, blue } from '@material-ui/core/colors';

const Upload = () => {
	return (
		<div>
			<Button
				variant="contained"
				style={{ color: yellow[50], background: blue[900] }}
				startIcon={<CloudUploadIcon />}
			>
				Upload
			</Button>
		</div>
	);
};

export { Upload };
