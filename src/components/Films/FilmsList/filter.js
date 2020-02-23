const films = [
	{
		stars: [
			'Mel Brooks',
			'Clevon Little',
			'Harvey Korman',
			'Gene Wilder',
			'Slim Pickens',
			'Madeline Kahn',
		],
		_id: '5e4fe687788d95745ab57d14',
		title: 'Blazing Saddles',
		release_year: 1974,
		format: 'VHS',
		__v: 0,
	},
	{
		stars: [
			'Nathan Fillion',
			'Alan Tudyk',
			'Adam Baldwin',
			'Ron Glass',
			'Jewel Staite',
			'Gina Torres',
			'Morena Baccarin',
			'Sean Maher',
			'Summer Glau',
			'Chiwetel Ejiofor',
		],
		_id: '5e4fe687788d95745ab57d16',
		title: 'Serenity',
		release_year: 2005,
		format: 'Blu-Ray',
		__v: 0,
	},
	{
		stars: [
			'Harrison Ford',
			'Mark Hamill',
			'Carrie Fisher',
			'Alec Guinness',
			'James Earl Jones',
		],
		_id: '5e4fe687788d95745ab57d15',
		title: 'Star Wars',
		release_year: 1977,
		format: 'Blu-Ray',
		__v: 0,
	},
	{
		stars: ['Gene Hackman', 'Barbara Hershey', 'Dennis Hopper'],
		_id: '5e4fe687788d95745ab57d17',
		title: 'Hooisers',
		release_year: 1986,
		format: 'VHS',
		__v: 0,
	},
	{
		stars: [
			'Matthew Broderick',
			'Ally Sheedy',
			'Dabney Coleman',
			'John Wood',
			'Barry Corbin',
		],
		_id: '5e4fe687788d95745ab57d18',
		title: 'WarGames',
		release_year: 1983,
		format: 'VHS',
		__v: 0,
	},
	{
		stars: ['Harrison Ford', 'Karen Allen'],
		_id: '5e4fe687788d95745ab57d19',
		title: 'Raiders of the Lost Ark',
		release_year: 1981,
		format: 'DVD',
		__v: 0,
	},
	{
		stars: [
			'Bill Pullman',
			'John Candy',
			'Mel Brooks',
			'Rick Moranis',
			'Daphne Zuniga',
			'Joan Rivers',
		],
		_id: '5e4fe687788d95745ab57d1a',
		title: 'Spaceballs',
		release_year: 1987,
		format: 'DVD',
		__v: 0,
	},
	{
		stars: [
			'Val Kilmer',
			'Gabe Jarret',
			'Michelle Meyrink',
			'William Atherton',
		],
		_id: '5e4fe687788d95745ab57d1c',
		title: 'Real Genius',
		release_year: 1985,
		format: 'VHS',
		__v: 0,
	},
	{
		stars: [
			'Gene Wilder',
			'Kenneth Mars',
			'Terri Garr',
			'Gene Hackman',
			'Peter Boyle',
		],
		_id: '5e4fe687788d95745ab57d1b',
		title: 'Young Frankenstein',
		release_year: 1974,
		format: 'VHS',
		__v: 0,
	},
	{
		stars: [
			'Tom Cruise',
			'Kelly McGillis',
			'Val Kilmer',
			'Anthony Edwards',
			'Tom Skerritt',
		],
		_id: '5e4fe687788d95745ab57d1d',
		title: 'Top Gun',
		release_year: 1986,
		format: 'DVD',
		__v: 0,
	},
	{
		stars: [
			'Donald Sutherland',
			'Elliot Gould',
			'Tom Skerritt',
			'Sally Kellerman',
			'Robert Duvall',
		],
		_id: '5e4fe687788d95745ab57d1e',
		title: 'MASH',
		release_year: 1970,
		format: 'DVD',
		__v: 0,
	},
	{
		stars: ['Carl Reiner', 'Eva Marie Saint', 'Alan Arkin', 'Brian Keith'],
		_id: '5e4fe687788d95745ab57d1f',
		title: 'The Russians Are Coming, The Russians Are Coming',
		release_year: 1966,
		format: 'VHS',
		__v: 0,
	},
	{
		stars: [
			'Roy Scheider',
			'Robert Shaw',
			'Richard Dreyfuss',
			'Lorraine Gary ',
		],
		_id: '5e4fe687788d95745ab57d20',
		title: 'Jaws',
		release_year: 1975,
		format: 'DVD',
		__v: 0,
	},
	{
		stars: [
			'Keir Dullea',
			'Gary Lockwood',
			'William Sylvester',
			'Douglas Rain',
		],
		_id: '5e4fe687788d95745ab57d21',
		title: '2001: A Space Odyssey',
		release_year: 1968,
		format: 'DVD',
		__v: 0,
	},
	{
		stars: ['James Stewart', 'Josephine Hull', 'Peggy Dow', 'Charles Drake'],
		_id: '5e4fe687788d95745ab57d22',
		title: 'Harvey',
		release_year: 1950,
		format: 'DVD',
		__v: 0,
	},
	{
		stars: ['Seth Rogen', 'Katherine Heigl', 'Paul Rudd', 'Leslie Mann'],
		_id: '5e4fe687788d95745ab57d23',
		title: 'Knocked Up',
		release_year: 2007,
		format: 'Blu-Ray',
		__v: 0,
	},
	{
		stars: ['Humphrey Bogart', 'Ingrid Bergman', 'Claude Rains', 'Peter Lorre'],
		_id: '5e4fe687788d95745ab57d24',
		title: 'Casablanca',
		release_year: 1942,
		format: 'DVD',
		__v: 0,
	},
	{
		stars: [
			'Audrey Hepburn',
			'Cary Grant',
			'Walter Matthau',
			'James Coburn',
			'George Kennedy',
		],
		_id: '5e4fe687788d95745ab57d25',
		title: 'Charade',
		release_year: 1953,
		format: 'DVD',
		__v: 0,
	},
	{
		stars: ['Paul Newman', 'George Kennedy', 'Strother Martin'],
		_id: '5e4fe687788d95745ab57d26',
		title: 'Cool Hand Luke',
		release_year: 1967,
		format: 'VHS',
		__v: 0,
	},
	{
		stars: ['Paul Newman', 'Robert Redford', 'Katherine Ross'],
		_id: '5e4fe687788d95745ab57d27',
		title: 'Butch Cassidy and the Sundance Kid',
		release_year: 1969,
		format: 'VHS',
		__v: 0,
	},
	{
		stars: ['Robert Redford', 'Paul Newman', 'Robert Shaw', 'Charles Durning'],
		_id: '5e4fe687788d95745ab57d28',
		title: 'The Sting',
		release_year: 1973,
		format: 'DVD',
		__v: 0,
	},
	{
		stars: [
			'Jim Henson',
			'Frank Oz',
			'Dave Geolz',
			'Mel Brooks',
			'James Coburn',
			'Charles Durning',
			'Austin Pendleton',
		],
		_id: '5e4fe687788d95745ab57d29',
		title: 'The Muppet Movie',
		release_year: 1979,
		format: 'DVD',
		__v: 0,
	},
	{
		stars: [
			'John Travolta',
			'Danny DeVito',
			'Renne Russo',
			'Gene Hackman',
			'Dennis Farina',
		],
		_id: '5e4fe687788d95745ab57d2a',
		title: 'Get Shorty ',
		release_year: 1995,
		format: 'DVD',
		__v: 0,
	},
	{
		stars: [
			'Joe Pesci',
			'Marrisa Tomei',
			'Fred Gwynne',
			'Austin Pendleton',
			'Lane Smith',
			'Ralph Macchio',
		],
		_id: '5e4fe687788d95745ab57d2b',
		title: 'My Cousin Vinny',
		release_year: 1992,
		format: 'DVD',
		__v: 0,
	},
	{
		stars: ['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielson'],
		_id: '5e4fe687788d95745ab57d2c',
		title: 'Gladiator',
		release_year: 2000,
		format: 'Blu-Ray',
		__v: 0,
	},
];
const term = 'w';

const visibleItems = films
	.map(items => {
		return items.title;
	})
	.filter(item => {
		return item.toLowerCase().indexOf(term) > -1;
	});

visibleItems;
console.log(visibleItems);

//
// const sorting = films => {
// 	const sorted = films.sort(function(a, b) {
// 		if (
// 			a.title.substr(0, 1).toLowerCase() > b.title.substr(0, 1).toLowerCase()
// 		) {
// 			return term === 1 ? 1 : -1;
// 		}
// 		if (
// 			a.title.substr(0, 1).toLowerCase() < b.title.substr(0, 1).toLowerCase()
// 		) {
// 			return term === 1 ? -1 : 1;
// 		}
// 		return 0;
// 	});
// 	return sorted;
// };
//
// console.log(sorting(films));
