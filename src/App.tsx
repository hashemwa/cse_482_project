import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Home } from "@/pages/Home";
import { Browse } from "@/pages/Browse";
import { Profile } from "@/pages/Profile";
import type { Movie } from "@/types/movie";
import {
  getTopRatedMovies,
  getTrendingMovies,
  searchAndFilterMovies,
  discoverMovies,
} from "@/services/tmdb";

type View = "home" | "browse" | "profile";

function App() {
  const [currentView, setCurrentView] = useState<View>("home");
  const [recommendedMovies, setRecommendedMovies] = useState<Movie[]>([]);
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [watchlistIds, setWatchlistIds] = useState<number[]>([]);
  const [ratedMovies, setRatedMovies] = useState<Map<number, number>>(
    new Map(),
  );
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);

  // Load initial data on mount
  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    setLoading(true);
    try {
      // Fetch recommended (top rated) and trending movies in parallel
      const [recommended, trending] = await Promise.all([
        getTopRatedMovies(1),
        getTrendingMovies("week"),
      ]);

      setRecommendedMovies(recommended);
      setTrendingMovies(trending);
      setSearchResults(recommended); // Initialize browse page with top rated
    } catch (error) {
      console.error("Error loading initial data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handler for navigation
  const handleNavigate = (view: View) => {
    setCurrentView(view);
  };

  // Handler for search
  const handleSearch = async (query: string, genres: string[]) => {
    setSearchLoading(true);
    try {
      let results: Movie[];

      if (query || genres.length > 0) {
        // Search with query and/or filters
        results = await searchAndFilterMovies(query, genres);
      } else {
        // No search query or filters, show popular movies
        results = await discoverMovies({
          sortBy: "popularity.desc",
          page: 1,
        });
      }

      setSearchResults(results);

      // Navigate to browse page when searching from home
      if (currentView === "home") {
        setCurrentView("browse");
      }
    } catch (error) {
      console.error("Error searching movies:", error);
      setSearchResults([]);
    } finally {
      setSearchLoading(false);
    }
  };

  // Handler for rating movies
  const handleRate = (movieId: number, rating: number) => {
    setRatedMovies((prev) => {
      const newRatings = new Map(prev);
      newRatings.set(movieId, rating);
      return newRatings;
    });

    // TODO: Send rating to backend API when available
    console.log(`Rated movie ${movieId} with ${rating} stars`);
  };

  // Handler for adding to watchlist
  const handleAddToWatchlist = (movieId: number) => {
    setWatchlistIds((prev) => {
      if (prev.includes(movieId)) {
        // Remove from watchlist
        console.log(`Removed movie ${movieId} from watchlist`);
        return prev.filter((id) => id !== movieId);
      }
      // Add to watchlist
      console.log(`Added movie ${movieId} to watchlist`);
      return [...prev, movieId];
    });

    // TODO: Send to backend API when available
  };

  // Handler for movie click (can be extended for modal/detail view)
  const handleMovieClick = (movieId: number) => {
    console.log("Movie clicked:", movieId);
    // TODO: Implement movie detail modal/page
    // Can use getMovieDetails(movieId) from tmdb service
  };

  // Get watchlist movies
  const watchlistMovies = recommendedMovies
    .concat(trendingMovies)
    .concat(searchResults)
    .filter((movie, index, self) => {
      // Remove duplicates and filter by watchlist IDs
      return (
        watchlistIds.includes(movie.id) &&
        self.findIndex((m) => m.id === movie.id) === index
      );
    });

  // Mock user data (can be replaced with real user data from backend)
  const userData = {
    userName: "Movie Enthusiast",
    userEmail: "user@movielens.com",
    ratedMoviesCount: ratedMovies.size,
    favoriteGenres: ["Drama", "Science Fiction", "Thriller", "Action", "Crime"],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentView={currentView} onNavigate={handleNavigate} />

      <main>
        {currentView === "home" && (
          <Home
            onSearch={handleSearch}
            onRate={handleRate}
            onAddToWatchlist={handleAddToWatchlist}
            onMovieClick={handleMovieClick}
            recommendedMovies={recommendedMovies}
            trendingMovies={trendingMovies}
            loading={loading}
          />
        )}

        {currentView === "browse" && (
          <Browse
            onSearch={handleSearch}
            onRate={handleRate}
            onAddToWatchlist={handleAddToWatchlist}
            onMovieClick={handleMovieClick}
            movies={searchResults}
            loading={searchLoading}
          />
        )}

        {currentView === "profile" && (
          <Profile
            userName={userData.userName}
            userEmail={userData.userEmail}
            ratedMoviesCount={userData.ratedMoviesCount}
            watchlistMovies={watchlistMovies}
            favoriteGenres={userData.favoriteGenres}
            onRate={handleRate}
            onAddToWatchlist={handleAddToWatchlist}
            onMovieClick={handleMovieClick}
            loading={false}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                    />
                  </svg>
                </div>
                <span className="font-bold text-xl">MovieLens</span>
              </div>
              <p className="text-gray-400 text-sm">
                Personalized movie recommendations powered by TMDB and millions
                of ratings from movie enthusiasts worldwide.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Explore</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button
                    onClick={() => handleNavigate("home")}
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigate("browse")}
                    className="hover:text-white transition-colors"
                  >
                    Browse Movies
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigate("profile")}
                    className="hover:text-white transition-colors"
                  >
                    My Profile
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About MovieLens
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
              <div className="flex gap-3 mt-4">
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 MovieLens Recommendation System. Powered by TMDB API.</p>
            <p className="mt-2">
              Data provided by The Movie Database (TMDB) • This product uses the
              TMDB API but is not endorsed or certified by TMDB.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
