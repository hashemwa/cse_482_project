import type { Movie } from "@/types/movie";

// Mock movie data for development
export const mockMovies: Movie[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    genres: ["Drama", "Crime"],
    rating: 9.3,
    overview:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    posterUrl:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
    voteCount: 2500000,
    popularity: 95,
    runtime: 142,
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    genres: ["Crime", "Drama"],
    rating: 9.2,
    overview:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    posterUrl:
      "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop",
    voteCount: 1800000,
    popularity: 92,
    runtime: 175,
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    genres: ["Action", "Crime", "Drama"],
    rating: 9.0,
    overview:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
    posterUrl:
      "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
    voteCount: 2700000,
    popularity: 98,
    runtime: 152,
  },
  {
    id: 4,
    title: "Pulp Fiction",
    year: 1994,
    genres: ["Crime", "Drama"],
    rating: 8.9,
    overview:
      "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    posterUrl:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
    voteCount: 2000000,
    popularity: 90,
    runtime: 154,
  },
  {
    id: 5,
    title: "Forrest Gump",
    year: 1994,
    genres: ["Drama", "Romance"],
    rating: 8.8,
    overview:
      "The presidencies of Kennedy and Johnson unfold through the perspective of an Alabama man with an IQ of 75.",
    posterUrl:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
    voteCount: 2100000,
    popularity: 94,
    runtime: 142,
  },
  {
    id: 6,
    title: "Inception",
    year: 2010,
    genres: ["Action", "Science Fiction", "Thriller"],
    rating: 8.8,
    overview:
      "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
    posterUrl:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop",
    voteCount: 2300000,
    popularity: 96,
    runtime: 148,
  },
  {
    id: 7,
    title: "The Matrix",
    year: 1999,
    genres: ["Action", "Science Fiction"],
    rating: 8.7,
    overview:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    posterUrl:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
    voteCount: 1900000,
    popularity: 93,
    runtime: 136,
  },
  {
    id: 8,
    title: "Goodfellas",
    year: 1990,
    genres: ["Crime", "Drama"],
    rating: 8.7,
    overview:
      "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners.",
    posterUrl:
      "https://images.unsplash.com/photo-1574267432644-f915ab64ec92?w=400&h=600&fit=crop",
    voteCount: 1200000,
    popularity: 88,
    runtime: 146,
  },
  {
    id: 9,
    title: "Interstellar",
    year: 2014,
    genres: ["Adventure", "Drama", "Science Fiction"],
    rating: 8.6,
    overview:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    posterUrl:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop",
    voteCount: 1700000,
    popularity: 91,
    runtime: 169,
  },
  {
    id: 10,
    title: "The Silence of the Lambs",
    year: 1991,
    genres: ["Crime", "Drama", "Thriller"],
    rating: 8.6,
    overview:
      "A young FBI cadet must receive the help of an incarcerated cannibal killer to catch another serial killer.",
    posterUrl:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop",
    voteCount: 1400000,
    popularity: 87,
    runtime: 118,
  },
  {
    id: 11,
    title: "Parasite",
    year: 2019,
    genres: ["Comedy", "Thriller", "Drama"],
    rating: 8.6,
    overview:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    posterUrl:
      "https://images.unsplash.com/photo-1574267432644-f915ab64ec92?w=400&h=600&fit=crop",
    voteCount: 800000,
    popularity: 89,
    runtime: 132,
  },
  {
    id: 12,
    title: "Gladiator",
    year: 2000,
    genres: ["Action", "Drama", "Adventure"],
    rating: 8.5,
    overview:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.",
    posterUrl:
      "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
    voteCount: 1500000,
    popularity: 86,
    runtime: 155,
  },
  {
    id: 13,
    title: "The Departed",
    year: 2006,
    genres: ["Crime", "Drama", "Thriller"],
    rating: 8.5,
    overview:
      "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in Boston.",
    posterUrl:
      "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop",
    voteCount: 1300000,
    popularity: 84,
    runtime: 151,
  },
  {
    id: 14,
    title: "Whiplash",
    year: 2014,
    genres: ["Drama", "Music"],
    rating: 8.5,
    overview:
      "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing.",
    posterUrl:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=600&fit=crop",
    voteCount: 900000,
    popularity: 82,
    runtime: 106,
  },
  {
    id: 15,
    title: "The Prestige",
    year: 2006,
    genres: ["Drama", "Mystery", "Thriller"],
    rating: 8.5,
    overview:
      "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have.",
    posterUrl:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=600&fit=crop",
    voteCount: 1200000,
    popularity: 85,
    runtime: 130,
  },
  {
    id: 16,
    title: "Spirited Away",
    year: 2001,
    genres: ["Animation", "Family", "Fantasy"],
    rating: 8.6,
    overview:
      "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.",
    posterUrl:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=600&fit=crop",
    voteCount: 700000,
    popularity: 88,
    runtime: 125,
  },
  {
    id: 17,
    title: "Avengers: Endgame",
    year: 2019,
    genres: ["Action", "Adventure", "Science Fiction"],
    rating: 8.4,
    overview:
      "After the devastating events, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
    posterUrl:
      "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop",
    voteCount: 1100000,
    popularity: 99,
    runtime: 181,
  },
  {
    id: 18,
    title: "The Lion King",
    year: 1994,
    genres: ["Animation", "Family", "Drama"],
    rating: 8.5,
    overview:
      "Lion prince Simba flees his kingdom after the murder of his father, only to learn the true meaning of responsibility and bravery.",
    posterUrl:
      "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=400&h=600&fit=crop",
    voteCount: 1000000,
    popularity: 92,
    runtime: 88,
  },
  {
    id: 19,
    title: "Back to the Future",
    year: 1985,
    genres: ["Adventure", "Comedy", "Science Fiction"],
    rating: 8.5,
    overview:
      "Marty McFly is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his friend Doc Brown.",
    posterUrl:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop",
    voteCount: 1200000,
    popularity: 90,
    runtime: 116,
  },
  {
    id: 20,
    title: "Coco",
    year: 2017,
    genres: ["Animation", "Family", "Fantasy"],
    rating: 8.4,
    overview:
      "Aspiring musician Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events.",
    posterUrl:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=600&fit=crop",
    voteCount: 500000,
    popularity: 87,
    runtime: 105,
  },
];

// Generate additional mock movies for variety
export const generateMockMovies = (count: number = 50): Movie[] => {
  const genres = [
    "Action",
    "Comedy",
    "Drama",
    "Thriller",
    "Science Fiction",
    "Romance",
    "Horror",
    "Animation",
    "Fantasy",
    "Crime",
  ];
  const titles = [
    "The Last Journey",
    "Midnight Dreams",
    "Broken Shadows",
    "City of Lights",
    "Echoes of Tomorrow",
    "Silent Witness",
    "The Rising Sun",
    "Frozen Hearts",
    "Dancing in the Rain",
    "The Final Chapter",
    "Whispers in the Dark",
    "Beyond the Horizon",
    "Lost in Time",
    "The Perfect Storm",
    "Crimson Sky",
    "Hidden Truth",
    "The Wild Heart",
    "Eternal Sunshine",
    "Ghost Protocol",
    "The Last Stand",
    "Midnight Runner",
    "The Silent War",
    "Golden Days",
    "The Dark Side",
    "Crystal Clear",
    "The Long Road",
    "Burning Desire",
    "The Empty Room",
    "Twisted Fate",
    "The Unknown",
    "Shattered Dreams",
  ];

  const additionalMovies: Movie[] = [];

  for (let i = 0; i < count; i++) {
    const randomGenres = genres
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.floor(Math.random() * 3) + 1);

    const movie: Movie = {
      id: 21 + i,
      title:
        titles[i % titles.length] +
        (i >= titles.length ? ` ${Math.floor(i / titles.length) + 1}` : ""),
      year: 1990 + Math.floor(Math.random() * 34),
      genres: randomGenres,
      rating: 6.0 + Math.random() * 3,
      overview:
        "An exciting story that takes you on an unforgettable journey through the depths of human emotion and adventure.",
      posterUrl: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 100000000000)}?w=400&h=600&fit=crop`,
      voteCount: Math.floor(Math.random() * 1000000) + 100000,
      popularity: Math.floor(Math.random() * 100),
      runtime: 90 + Math.floor(Math.random() * 90),
    };

    additionalMovies.push(movie);
  }

  return additionalMovies;
};

export const allMockMovies = [...mockMovies, ...generateMockMovies(30)];

// Mock user data
export const mockUserData = {
  userName: "Alex Johnson",
  userEmail: "alex.johnson@movielens.com",
  ratedMoviesCount: 127,
  favoriteGenres: ["Drama", "Science Fiction", "Thriller", "Action", "Crime"],
  watchlistMovieIds: [1, 3, 6, 9, 15],
};

// Helper function to get movies by IDs
export const getMoviesByIds = (ids: number[]): Movie[] => {
  return allMockMovies.filter((movie) => ids.includes(movie.id));
};

// Helper function to filter movies by genre
export const filterMoviesByGenre = (
  movies: Movie[],
  genres: string[],
): Movie[] => {
  if (genres.length === 0) return movies;
  return movies.filter((movie) =>
    movie.genres.some((genre) => genres.includes(genre)),
  );
};

// Helper function to search movies
export const searchMovies = (movies: Movie[], query: string): Movie[] => {
  if (!query) return movies;
  const lowercaseQuery = query.toLowerCase();
  return movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(lowercaseQuery) ||
      movie.genres.some((genre) =>
        genre.toLowerCase().includes(lowercaseQuery),
      ),
  );
};
