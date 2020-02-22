export class ServerDataService {
	getFilms = async url => {
		const res = await fetch(`http://localhost:5000/api/films`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`);
		}
		return await res.json();
	};
}
