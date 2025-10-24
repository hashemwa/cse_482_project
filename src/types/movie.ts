export interface Movie {
  id: number;
  title: string;
  year?: number;
  genres: string[];
  posterUrl?: string;
  rating?: number;
  overview?: string;
  releaseDate?: string;
  runtime?: number;
  voteCount?: number;
  popularity?: number;
  backdropUrl?: string;
}

export interface MovieRating {
  userId: number;
  movieId: number;
  rating: number;
  timestamp: number;
}

export interface MovieTag {
  userId: number;
  movieId: number;
  tag: string;
  timestamp: number;
}

export interface UserPreferences {
  userId: number;
  favoriteGenres: string[];
  ratedMovies: MovieRating[];
  watchlist: number[];
}

export interface MovieRecommendation {
  movie: Movie;
  score: number;
  reason?: string;
}

export const GENRES = [
  'Action',
  'Adventure',
  'Animation',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Family',
  'Fantasy',
  'History',
  'Horror',
  'Music',
  'Mystery',
  'Romance',
  'Science Fiction',
  'TV Movie',
  'Thriller',
  'War',
  'Western',
] as const;

export type Genre = typeof GENRES[number];
