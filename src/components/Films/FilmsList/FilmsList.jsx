import React from 'react';
import './FilmList.scss';
import { FilmsListItem } from '../FilmsListItem';

const FilmsList = ({ films }) => {
	return (
		<div>
			<ul>
				{films.map(({ _id, stars, title, release_year, format }) => {
					return (
						<li key={_id}>
							<FilmsListItem
								title={title}
								year={release_year}
								format={format}
								stars={stars}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export { FilmsList };

// import React from 'react';
// import './FilmList.scss';
// import { FilmsListItem } from '../FilmsListItem';
//
// const FilmsList = ({ films, term, radio }) => {
// 	const searching = (term, radio) => {
// 		if (radio === 'Film') {
// 			return x => {
// 				return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
// 			};
// 		} else {
// 			return x => {
// 				return x.stars.find(actor =>
// 					actor.toLowerCase().includes(term.toLowerCase()),
// 				);
// 			};
// 		}
// 	};
// 	return (
// 		<div>
// 			<ul>
// 				{films
// 					.filter(searching(term, radio))
// 					.map(({ _id, stars, title, release_year, format }) => {
// 						return (
// 							<li key={_id}>
// 								<FilmsListItem
// 									title={title}
// 									year={release_year}
// 									format={format}
// 									stars={stars}
// 								/>
// 							</li>
// 						);
// 					})}
// 			</ul>
// 		</div>
// 	);
// };
//
// export { FilmsList };
