import React from 'react';
import './ErrorIndicator.scss';

const ErrorIndicator = () => {
	function refreshPage() {
		window.location.reload();
	}
	return (
		<>
			<div className="spinner">
				<div className="spinner-circle spinner-circle-outer" />
				<div className="spinner-circle spinner-circle-single-1" />
				<div className="spinner-circle spinner-circle-single-2" />
			</div>
			<div className="error-indicator">Oops ... Something went wrong</div>
			<div className="error-indicator text" onClick={refreshPage}>
				Please reload your page
			</div>
		</>
	);
};

export { ErrorIndicator };
