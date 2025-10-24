import { SearchBar } from "@/components/movies/SearchBar";
import { MovieGrid } from "@/components/movies/MovieGrid";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Movie } from "@/types/movie";

interface HomeProps {
  onSearch: (query: string, genres: string[]) => void;
  onRate: (movieId: number, rating: number) => void;
  onAddToWatchlist: (movieId: number) => void;
  onMovieClick: (movieId: number) => void;
  recommendedMovies: Movie[];
  trendingMovies: Movie[];
  loading?: boolean;
}

export function Home({
  onSearch,
  onRate,
  onAddToWatchlist,
  onMovieClick,
  recommendedMovies,
  trendingMovies,
  loading = false,
}: HomeProps) {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-purple-600 via-purple-700 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Discover Your Next
              <br />
              <span className="text-yellow-300">Favorite Movie</span>
            </h1>
            <p className="text-xl text-purple-100">
              Personalized recommendations powered by 33 million ratings from
              movie lovers like you
            </p>
            <div className="pt-4">
              <SearchBar
                onSearch={onSearch}
                placeholder="Search from 86,000+ movies..."
              />
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="text-4xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                33M+
              </div>
              <p className="text-gray-600">Movie Ratings</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="text-4xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                86K+
              </div>
              <p className="text-gray-600">Movies</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="text-4xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                330K+
              </div>
              <p className="text-gray-600">Active Users</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recommended For You Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Recommended For You
            </h2>
            <p className="text-gray-600 mt-1">
              Based on your viewing history and preferences
            </p>
          </div>
          <Button variant="outline" className="gap-2">
            View All
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>
        <MovieGrid
          movies={recommendedMovies}
          loading={loading}
          onRate={onRate}
          onAddToWatchlist={onAddToWatchlist}
          onMovieClick={onMovieClick}
        />
      </section>

      {/* Trending Now Section */}
      <section className="container mx-auto px-4 py-16 bg-linear-to-br from-gray-50 to-purple-50 rounded-3xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <svg
                className="w-8 h-8 text-pink-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13 10h5l-6 8v-6H7l6-8v6z" />
              </svg>
              Trending Now
            </h2>
            <p className="text-gray-600 mt-1">Most popular movies this week</p>
          </div>
          <Button variant="outline" className="gap-2">
            View All
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>
        <MovieGrid
          movies={trendingMovies}
          loading={loading}
          onRate={onRate}
          onAddToWatchlist={onAddToWatchlist}
          onMovieClick={onMovieClick}
        />
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="border-0 bg-linear-to-br from-purple-600 to-pink-600 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-white/10"></div>
          <CardContent className="py-16 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-4">
              Rate Movies, Get Better Recommendations
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              The more movies you rate, the better our AI-powered
              recommendations become. Start building your personalized movie
              experience today.
            </p>
            <Button size="lg" variant="secondary" className="gap-2">
              Get Started
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
