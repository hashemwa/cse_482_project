# MovieLens Recommendation System - Frontend

A modern, responsive movie recommendation system UI built with React, TypeScript, shadcn/ui, and Tailwind CSS.

## 🎯 Features

- **Home Page**: Personalized movie recommendations, trending movies, and hero section
- **Browse Page**: Advanced search with genre filtering and sorting options
- **Profile Page**: User statistics, watchlist management, and activity tracking
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern UI**: Clean, minimal design with smooth animations
- **Type-Safe**: Full TypeScript support

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   └── Header.tsx              # Navigation header component
│   ├── movies/
│   │   ├── MovieCard.tsx           # Individual movie card with hover effects
│   │   ├── MovieGrid.tsx           # Responsive grid layout for movies
│   │   └── SearchBar.tsx           # Search input with genre filters
│   └── ui/                         # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── separator.tsx
│       ├── skeleton.tsx
│       └── ...
├── pages/
│   ├── Home.tsx                    # Landing page with recommendations
│   ├── Browse.tsx                  # Search and browse movies
│   └── Profile.tsx                 # User profile and watchlist
├── types/
│   └── movie.ts                    # TypeScript interfaces and types
├── lib/
│   ├── mockData.ts                 # Mock data for development
│   └── utils.ts                    # Utility functions
├── App.tsx                         # Main app with routing logic
└── main.tsx                        # App entry point
```

## 🎨 Design System

### Colors
- **Primary**: Purple gradient (`from-purple-600 to-pink-600`)
- **Accent**: Pink (`pink-600`)
- **Neutral**: Gray scale for text and backgrounds

### Components

#### Header
- Sticky navigation bar
- Logo with gradient
- Navigation buttons (Home, Browse, Profile)

#### MovieCard
- Hover effects with overlay
- Star rating system (1-5 stars)
- Quick actions (Rate, Add to Watchlist)
- Genre badges
- Movie poster with fallback

#### SearchBar
- Text search input
- Genre filter dropdown
- Active filters display
- Clear filters option

#### MovieGrid
- Responsive grid layout
- Loading skeletons
- Empty state handling
- Supports 2-5 columns based on screen size

## 🔧 Key Features

### Search & Filter
- Text-based search across movie titles
- Multi-select genre filtering
- Sort by: Rating, Popularity, Release Year
- Real-time search results

### Rating System
- Interactive 5-star rating
- Visual feedback on hover
- Persistent rating storage
- Aggregate ratings display

### Watchlist
- Add/remove movies
- Dedicated watchlist page
- Quick access from profile
- Visual indicators for saved movies

### Recommendations
- Personalized recommendations section
- Trending movies display
- Based on user preferences and ratings

## 📊 Data Structure

### Movie Interface
```typescript
interface Movie {
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
}
```

### User Preferences
```typescript
interface UserPreferences {
  userId: number;
  favoriteGenres: string[];
  ratedMovies: MovieRating[];
  watchlist: number[];
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## 🎯 Future Integration

### Backend API Integration
The UI is designed to integrate with a Python backend (to be implemented). Key API endpoints needed:

- `GET /api/movies` - Get movies list
- `GET /api/movies/:id` - Get movie details
- `GET /api/recommendations` - Get personalized recommendations
- `POST /api/ratings` - Submit movie rating
- `GET /api/user/watchlist` - Get user watchlist
- `POST /api/user/watchlist` - Add to watchlist
- `DELETE /api/user/watchlist/:id` - Remove from watchlist

### State Management
For production, consider adding:
- React Query for server state
- Zustand/Redux for client state
- Context API for auth state

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (2 columns)
- **Tablet**: 768px - 1024px (3 columns)
- **Desktop**: 1024px - 1280px (4 columns)
- **Large Desktop**: > 1280px (5 columns)

## 🎨 UI Components Used

- **Button**: Primary, secondary, outline, ghost variants
- **Card**: Movie cards, stat cards, info cards
- **Input**: Search, filters, forms
- **Skeleton**: Loading states
- **Separator**: Visual dividers

## 🌟 Best Practices

1. **Component Composition**: Small, reusable components
2. **Type Safety**: Full TypeScript coverage
3. **Accessibility**: Semantic HTML and ARIA labels
4. **Performance**: Lazy loading, code splitting
5. **Responsive**: Mobile-first approach

## 📝 Notes

- Mock data is currently used for development
- All images use placeholder URLs (Unsplash)
- Ready for backend integration
- Optimized for MovieLens dataset (33M ratings, 86K movies)

## 🤝 Contributing

When adding new features:
1. Follow the existing folder structure
2. Use TypeScript for all new files
3. Maintain consistent styling with Tailwind
4. Use shadcn/ui components when possible
5. Keep components small and focused

## 📄 License

Part of CSE 482 Project - Movie Recommendation System