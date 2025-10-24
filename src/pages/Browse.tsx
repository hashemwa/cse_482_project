import { SearchBar } from "@/components/movies/SearchBar";
import { MovieGrid } from "@/components/movies/MovieGrid";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Movie } from "@/types/movie";
import { GENRES } from "@/types/movie";
import { useState } from "react";

interface BrowseProps {
  onSearch: (query: string, genres: string[]) => void;
  onRate: (movieId: number, rating: number) => void;
  onAddToWatchlist: (movieId: number) => void;
  onMovieClick: (movieId: number) => void;
  movies: Movie[];
  loading?: boolean;
}

export function Browse({
  onSearch,
  onRate,
  onAddToWatchlist,
  onMovieClick,
  movies,
  loading = false,
}: BrowseProps) {
  const [sortBy, setSortBy] = useState<"rating" | "popularity" | "year">(
    "rating",
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Browse Movies
          </h1>
          <p className="text-gray-600">
            Explore our collection of 86,000+ movies
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <SearchBar onSearch={onSearch} />
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar - Genre Quick Filters */}
          <aside className="hidden lg:block w-64 shrink-0">
            <Card className="sticky top-20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Quick Filters</h3>

                {/* Sort Options */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-700 mb-3">
                    Sort By
                  </p>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSortBy("rating")}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        sortBy === "rating"
                          ? "bg-purple-100 text-purple-700 font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      Highest Rated
                    </button>
                    <button
                      onClick={() => setSortBy("popularity")}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        sortBy === "popularity"
                          ? "bg-purple-100 text-purple-700 font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      Most Popular
                    </button>
                    <button
                      onClick={() => setSortBy("year")}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        sortBy === "year"
                          ? "bg-purple-100 text-purple-700 font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      Newest First
                    </button>
                  </div>
                </div>

                {/* Popular Genres */}
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-3">
                    Popular Genres
                  </p>
                  <div className="space-y-2">
                    {GENRES.slice(0, 8).map((genre) => (
                      <button
                        key={genre}
                        onClick={() => onSearch("", [genre])}
                        className="w-full text-left px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        {genre}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Movies Grid */}
          <main className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-gray-600">
                  {loading ? "Loading..." : `${movies.length} movies found`}
                </p>
              </div>

              {/* Mobile Sort */}
              <div className="lg:hidden">
                <select
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(
                      e.target.value as "rating" | "popularity" | "year",
                    )
                  }
                  className="px-4 py-2 border rounded-md text-sm bg-white"
                >
                  <option value="rating">Highest Rated</option>
                  <option value="popularity">Most Popular</option>
                  <option value="year">Newest First</option>
                </select>
              </div>
            </div>

            {/* Movies Grid */}
            <MovieGrid
              movies={movies}
              loading={loading}
              onRate={onRate}
              onAddToWatchlist={onAddToWatchlist}
              onMovieClick={onMovieClick}
            />

            {/* Load More Button */}
            {!loading && movies.length > 0 && (
              <div className="flex justify-center mt-12">
                <Button size="lg" variant="outline" className="gap-2">
                  Load More Movies
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
