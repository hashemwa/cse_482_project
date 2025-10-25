import type { Movie } from "@/types/movie";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const IMAGE_BASE_URL = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

// TMDB Genre IDs mapping
const TMDB_GENRE_MAP: { [key: string]: number } = {
  Action: 28,
  Adventure: 12,
  Animation: 16,
  Comedy: 35,
  Crime: 80,
  Documentary: 99,
  Drama: 18,
  Family: 10751,
  Fantasy: 14,
  History: 36,
  Horror: 27,
  Music: 10402,
  Mystery: 9648,
  Romance: 10749,
  "Science Fiction": 878,
  "TV Movie": 10770,
  Thriller: 53,
  War: 10752,
  Western: 37,
};

// Reverse mapping: TMDB ID to our genre names
const TMDB_ID_TO_GENRE: { [key: number]: string } = Object.fromEntries(
  Object.entries(TMDB_GENRE_MAP).map(([name, id]) => [id, name]),
);

interface TMDBMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  genre_ids: number[];
  adult: boolean;
}

interface TMDBResponse {
  page: number;
  results: TMDBMovie[];
  total_pages: number;
  total_results: number;
}

// Transform TMDB movie data to our Movie type
function transformTMDBMovie(tmdbMovie: TMDBMovie): Movie {
  const year = tmdbMovie.release_date
    ? new Date(tmdbMovie.release_date).getFullYear()
    : undefined;

  const genres = tmdbMovie.genre_ids
    .map((id) => TMDB_ID_TO_GENRE[id])
    .filter(Boolean);

  return {
    id: tmdbMovie.id,
    title: tmdbMovie.title,
    year,
    genres,
    posterUrl: tmdbMovie.poster_path
      ? `${IMAGE_BASE_URL}/w342${tmdbMovie.poster_path}`
      : undefined,
    backdropUrl: tmdbMovie.backdrop_path
      ? `${IMAGE_BASE_URL}/w1280${tmdbMovie.backdrop_path}`
      : undefined,
    rating: tmdbMovie.vote_average,
    overview: tmdbMovie.overview,
    releaseDate: tmdbMovie.release_date,
    voteCount: tmdbMovie.vote_count,
    popularity: tmdbMovie.popularity,
  };
}

// Fetch popular movies
export async function getPopularMovies(page: number = 1): Promise<Movie[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}&language=en-US`,
    );

    if (!response.ok) {
      throw new Error(`TMDB API Error: ${response.statusText}`);
    }

    const data: TMDBResponse = await response.json();
    return data.results.map(transformTMDBMovie);
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
}

// Fetch top rated movies
export async function getTopRatedMovies(page: number = 1): Promise<Movie[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}&language=en-US`,
    );

    if (!response.ok) {
      throw new Error(`TMDB API Error: ${response.statusText}`);
    }

    const data: TMDBResponse = await response.json();
    return data.results.map(transformTMDBMovie);
  } catch (error) {
    console.error("Error fetching top rated movies:", error);
    return [];
  }
}

// Fetch trending movies
export async function getTrendingMovies(
  timeWindow: "day" | "week" = "week",
): Promise<Movie[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/trending/movie/${timeWindow}?api_key=${API_KEY}&language=en-US`,
    );

    if (!response.ok) {
      throw new Error(`TMDB API Error: ${response.statusText}`);
    }

    const data: TMDBResponse = await response.json();
    return data.results.map(transformTMDBMovie);
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
}

// Search movies
export async function searchMovies(
  query: string,
  page: number = 1,
): Promise<Movie[]> {
  try {
    if (!query.trim()) {
      return [];
    }

    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}&language=en-US`,
    );

    if (!response.ok) {
      throw new Error(`TMDB API Error: ${response.statusText}`);
    }

    const data: TMDBResponse = await response.json();
    return data.results.map(transformTMDBMovie);
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
}

// Discover movies with filters
export async function discoverMovies(
  filters: {
    genres?: string[];
    sortBy?: "popularity.desc" | "vote_average.desc" | "release_date.desc";
    page?: number;
  } = {},
): Promise<Movie[]> {
  try {
    const { genres = [], sortBy = "popularity.desc", page = 1 } = filters;

    // Convert genre names to TMDB IDs
    const genreIds = genres
      .map((genre) => TMDB_GENRE_MAP[genre])
      .filter(Boolean)
      .join(",");

    let url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${page}&language=en-US&sort_by=${sortBy}`;

    if (genreIds) {
      url += `&with_genres=${genreIds}`;
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`TMDB API Error: ${response.statusText}`);
    }

    const data: TMDBResponse = await response.json();
    return data.results.map(transformTMDBMovie);
  } catch (error) {
    console.error("Error discovering movies:", error);
    return [];
  }
}

// Get movie details
export async function getMovieDetails(movieId: number): Promise<Movie | null> {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    );

    if (!response.ok) {
      throw new Error(`TMDB API Error: ${response.statusText}`);
    }

    const data = await response.json();

    return {
      id: data.id,
      title: data.title,
      year: data.release_date
        ? new Date(data.release_date).getFullYear()
        : undefined,
      genres: data.genres.map((g: { name: string }) => g.name),
      posterUrl: data.poster_path
        ? `${IMAGE_BASE_URL}/w500${data.poster_path}`
        : undefined,
      backdropUrl: data.backdrop_path
        ? `${IMAGE_BASE_URL}/w1280${data.backdrop_path}`
        : undefined,
      rating: data.vote_average,
      overview: data.overview,
      releaseDate: data.release_date,
      runtime: data.runtime,
      voteCount: data.vote_count,
      popularity: data.popularity,
    };
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
}

// Get similar movies (can be used for recommendations)
export async function getSimilarMovies(movieId: number): Promise<Movie[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}&page=1&language=en-US`,
    );

    if (!response.ok) {
      throw new Error(`TMDB API Error: ${response.statusText}`);
    }

    const data: TMDBResponse = await response.json();
    return data.results.map(transformTMDBMovie);
  } catch (error) {
    console.error("Error fetching similar movies:", error);
    return [];
  }
}

// Get now playing movies
export async function getNowPlayingMovies(page: number = 1): Promise<Movie[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&page=${page}&language=en-US`,
    );

    if (!response.ok) {
      throw new Error(`TMDB API Error: ${response.statusText}`);
    }

    const data: TMDBResponse = await response.json();
    return data.results.map(transformTMDBMovie);
  } catch (error) {
    console.error("Error fetching now playing movies:", error);
    return [];
  }
}

// Get upcoming movies
export async function getUpcomingMovies(page: number = 1): Promise<Movie[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=${page}&language=en-US`,
    );

    if (!response.ok) {
      throw new Error(`TMDB API Error: ${response.statusText}`);
    }

    const data: TMDBResponse = await response.json();
    return data.results.map(transformTMDBMovie);
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
    return [];
  }
}

// Combined search and filter function
export async function searchAndFilterMovies(
  query: string,
  genres: string[] = [],
  sortBy?: "popularity.desc" | "vote_average.desc" | "release_date.desc",
): Promise<Movie[]> {
  try {
    // If there's a search query, use search endpoint
    if (query.trim()) {
      const searchResults = await searchMovies(query);

      // Filter by genres if specified
      if (genres.length > 0) {
        return searchResults.filter((movie) =>
          movie.genres.some((genre) => genres.includes(genre)),
        );
      }

      return searchResults;
    }

    // If no query, use discover with filters
    return discoverMovies({ genres, sortBy });
  } catch (error) {
    console.error("Error in search and filter:", error);
    return [];
  }
}

// Export genre mapping for use in components
export { TMDB_GENRE_MAP };
