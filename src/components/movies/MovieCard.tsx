import type { Movie } from "@/types/movie";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface MovieCardProps {
  movie: Movie;
  onRate?: (movieId: number, rating: number) => void;
  onAddToWatchlist?: (movieId: number) => void;
  onMovieClick?: (movieId: number) => void;
}

export function MovieCard({
  movie,
  onRate,
  onAddToWatchlist,
  onMovieClick,
}: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [userRating, setUserRating] = useState<number>(0);

  const handleRatingClick = (rating: number) => {
    setUserRating(rating);
    onRate?.(movie.id, rating);
  };

  return (
    <Card
      className="group overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer border-0 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onMovieClick?.(movie.id)}
    >
      {/* Movie Poster */}
      <div className="relative aspect-2/3] overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
        {movie.posterUrl ? (
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg
              className="w-16 h-16 text-gray-400"
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
        )}

        {/* Overlay on Hover */}
        <div
          className={`absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
            {/* Rating Stars */}
            <div className="flex gap-1 justify-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRatingClick(star);
                  }}
                  className="transition-transform hover:scale-125"
                >
                  <svg
                    className={`w-6 h-6 ${
                      star <= userRating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-white/50"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </button>
              ))}
            </div>

            {/* Watchlist Button */}
            <Button
              variant="secondary"
              size="sm"
              className="w-full"
              onClick={(e) => {
                e.stopPropagation();
                onAddToWatchlist?.(movie.id);
              }}
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add to Watchlist
            </Button>
          </div>
        </div>

        {/* Rating Badge */}
        {movie.rating && (
          <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1">
            <svg
              className="w-4 h-4 text-yellow-400 fill-yellow-400"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-white text-sm font-semibold">
              {movie.rating.toFixed(1)}
            </span>
          </div>
        )}
      </div>

      {/* Movie Info */}
      <CardContent className="p-4">
        <h3 className="font-semibold text-base line-clamp-1 mb-1">
          {movie.title}
        </h3>
        {movie.year && (
          <p className="text-sm text-gray-500 mb-2">{movie.year}</p>
        )}
        <div className="flex flex-wrap gap-1">
          {movie.genres.slice(0, 3).map((genre) => (
            <span
              key={genre}
              className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
            >
              {genre}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
