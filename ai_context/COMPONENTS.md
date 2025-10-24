# MovieLens UI Components Guide

A comprehensive guide to all UI components in the MovieLens Recommendation System.

---

## 📦 Component Categories

### 1. Layout Components
Located in `src/components/layout/`

#### Header
**File:** `Header.tsx`

**Purpose:** Main navigation bar with logo and page navigation

**Props:**
```typescript
{
  currentView: 'home' | 'browse' | 'profile';
  onNavigate: (view: 'home' | 'browse' | 'profile') => void;
}
```

**Features:**
- Sticky positioning
- Logo with gradient background
- Three navigation buttons (Home, Browse, Profile)
- Active state highlighting
- SVG icons for each section

**Usage:**
```tsx
<Header 
  currentView={currentView} 
  onNavigate={handleNavigate} 
/>
```

---

### 2. Movie Components
Located in `src/components/movies/`

#### MovieCard
**File:** `MovieCard.tsx`

**Purpose:** Display individual movie with interactive features

**Props:**
```typescript
{
  movie: Movie;
  onRate?: (movieId: number, rating: number) => void;
  onAddToWatchlist?: (movieId: number) => void;
  onMovieClick?: (movieId: number) => void;
}
```

**Features:**
- Hover effects with overlay
- 5-star rating system
- Quick add to watchlist
- Genre badges
- Movie poster with fallback icon
- Rating badge display
- Smooth animations

**Styling:**
- Aspect ratio: 2:3 (standard poster)
- Hover scale effect on image
- Gradient overlay on hover
- Interactive star rating

**Usage:**
```tsx
<MovieCard
  movie={movie}
  onRate={handleRate}
  onAddToWatchlist={handleAddToWatchlist}
  onMovieClick={handleMovieClick}
/>
```

---

#### MovieGrid
**File:** `MovieGrid.tsx`

**Purpose:** Responsive grid layout for displaying multiple movies

**Props:**
```typescript
{
  movies: Movie[];
  loading?: boolean;
  onRate?: (movieId: number, rating: number) => void;
  onAddToWatchlist?: (movieId: number) => void;
  onMovieClick?: (movieId: number) => void;
}
```

**Features:**
- Responsive grid (2-5 columns)
- Loading skeletons
- Empty state with illustration
- Passes through interaction handlers

**Grid Breakpoints:**
- Mobile: 2 columns
- Tablet: 3 columns
- Desktop: 4 columns
- Large: 5 columns

**Usage:**
```tsx
<MovieGrid
  movies={movies}
  loading={isLoading}
  onRate={handleRate}
  onAddToWatchlist={handleAddToWatchlist}
  onMovieClick={handleMovieClick}
/>
```

---

#### SearchBar
**File:** `SearchBar.tsx`

**Purpose:** Search input with advanced genre filtering

**Props:**
```typescript
{
  onSearch: (query: string, genres: string[]) => void;
  placeholder?: string;
}
```

**Features:**
- Text search input with icon
- Enter key support
- Genre filter toggle
- Multi-select genre chips
- Active filters display
- Clear all filters
- Animated filter panel

**State Management:**
- Local state for query and selected genres
- Triggers search on button click or Enter
- Updates parent on search

**Usage:**
```tsx
<SearchBar
  onSearch={handleSearch}
  placeholder="Search from 86,000+ movies..."
/>
```

---

### 3. Page Components
Located in `src/pages/`

#### Home
**File:** `Home.tsx`

**Purpose:** Landing page with hero and recommendations

**Props:**
```typescript
{
  onSearch: (query: string, genres: string[]) => void;
  onRate: (movieId: number, rating: number) => void;
  onAddToWatchlist: (movieId: number) => void;
  onMovieClick: (movieId: number) => void;
  recommendedMovies: Movie[];
  trendingMovies: Movie[];
  loading?: boolean;
}
```

**Sections:**
1. **Hero Section**
   - Gradient background (purple to pink)
   - Main heading with highlighted text
   - Search bar integration
   - Decorative elements

2. **Stats Cards**
   - 33M+ ratings
   - 86K+ movies
   - 330K+ users

3. **Recommended For You**
   - Personalized recommendations
   - Movie grid display
   - "View All" button

4. **Trending Now**
   - Most popular movies
   - Highlighted section with icon
   - Movie grid display

5. **CTA Section**
   - Call-to-action card
   - Gradient background
   - "Get Started" button

---

#### Browse
**File:** `Browse.tsx`

**Purpose:** Search and explore movies with filters

**Props:**
```typescript
{
  onSearch: (query: string, genres: string[]) => void;
  onRate: (movieId: number, rating: number) => void;
  onAddToWatchlist: (movieId: number) => void;
  onMovieClick: (movieId: number) => void;
  movies: Movie[];
  loading?: boolean;
}
```

**Sections:**
1. **Header**
   - Page title
   - Description

2. **Search Bar**
   - Full-width search with filters

3. **Sidebar** (Desktop only)
   - Sort options (Rating, Popularity, Year)
   - Popular genres quick links
   - Sticky positioning

4. **Results**
   - Movie count display
   - Mobile sort dropdown
   - Movie grid
   - Load more button

**Features:**
- Responsive layout
- Sidebar hidden on mobile
- Sort state management
- Genre quick filters

---

#### Profile
**File:** `Profile.tsx`

**Purpose:** User profile, stats, and watchlist

**Props:**
```typescript
{
  userName?: string;
  userEmail?: string;
  ratedMoviesCount: number;
  watchlistMovies: Movie[];
  favoriteGenres: string[];
  onRate: (movieId: number, rating: number) => void;
  onAddToWatchlist: (movieId: number) => void;
  onMovieClick: (movieId: number) => void;
  loading?: boolean;
}
```

**Sections:**
1. **Profile Header**
   - Avatar with initial
   - User name and email
   - Edit profile button
   - Settings button
   - Gradient background

2. **Stats Cards**
   - Movies rated count
   - Watchlist count
   - Favorite genres chips

3. **Watchlist Section**
   - Movie grid of saved movies
   - Empty state if no movies
   - Clear all button

4. **Activity Section**
   - Recently rated movies list
   - Taste profile chart
   - Genre preference bars

**Features:**
- User customization
- Visual statistics
- Empty states
- Activity tracking UI

---

### 4. shadcn/ui Components
Located in `src/components/ui/`

#### Button
**Variants:** default, secondary, outline, ghost
**Sizes:** sm, default, lg

#### Card
**Sub-components:** Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter

#### Input
**Features:** Standard text input with styling

#### Skeleton
**Purpose:** Loading state placeholders

#### Separator
**Purpose:** Visual dividers

#### Spinner
**Purpose:** Loading indicators

---

## 🎨 Design Patterns

### Color Scheme
- **Primary Gradient:** Purple-600 to Pink-600
- **Accent:** Pink-600
- **Background:** White, Gray-50
- **Text:** Gray-900, Gray-600, Gray-500

### Typography
- **Headings:** Bold, various sizes (text-xl to text-5xl)
- **Body:** Regular, text-sm to text-base
- **Small Text:** text-xs for labels and meta

### Spacing
- **Container:** mx-auto with px-4
- **Sections:** py-8, py-12, py-16, py-20
- **Cards:** p-4, p-6
- **Gaps:** gap-1 to gap-8

### Animations
- **Hover:** scale, shadow, opacity transitions
- **Duration:** 200-300ms
- **Easing:** Default Tailwind

---

## 🔧 Component Patterns

### Error Handling
- All components handle missing/optional data gracefully
- Fallback UI for missing images
- Empty states for no data

### Loading States
- Skeleton components during load
- Loading prop support
- Disabled state for buttons

### Responsive Design
- Mobile-first approach
- Breakpoint-based layouts
- Hidden elements on mobile (sidebar)
- Responsive grids

### Accessibility
- Semantic HTML
- Button elements for interactions
- Alt text for images
- Keyboard navigation support

---

## 📚 Type Definitions

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
  backdropUrl?: string;
}
```

### Genre List
```typescript
const GENRES = [
  'Action', 'Adventure', 'Animation', 'Comedy',
  'Crime', 'Documentary', 'Drama', 'Family',
  'Fantasy', 'History', 'Horror', 'Music',
  'Mystery', 'Romance', 'Science Fiction',
  'TV Movie', 'Thriller', 'War', 'Western'
];
```

---

## 🚀 Usage Examples

### Basic Movie Display
```tsx
import { MovieGrid } from '@/components/movies/MovieGrid';
import { mockMovies } from '@/lib/mockData';

function MyComponent() {
  return (
    <MovieGrid
      movies={mockMovies}
      onMovieClick={(id) => console.log('Movie:', id)}
    />
  );
}
```

### Search with Filters
```tsx
import { SearchBar } from '@/components/movies/SearchBar';

function MyComponent() {
  const handleSearch = (query: string, genres: string[]) => {
    // Filter movies based on query and genres
    const filtered = filterMovies(query, genres);
    setResults(filtered);
  };

  return <SearchBar onSearch={handleSearch} />;
}
```

### Complete Page
```tsx
import { Home } from '@/pages/Home';

function App() {
  return (
    <Home
      onSearch={handleSearch}
      onRate={handleRate}
      onAddToWatchlist={handleAddToWatchlist}
      onMovieClick={handleMovieClick}
      recommendedMovies={recommendations}
      trendingMovies={trending}
    />
  );
}
```

---

## 🎯 Best Practices

1. **Props Drilling:** Keep prop chains shallow, consider context for deep hierarchies
2. **Type Safety:** Always use TypeScript interfaces for props
3. **Composition:** Build complex UIs from simple components
4. **Reusability:** Make components generic and configurable
5. **Performance:** Use React.memo for expensive components
6. **Accessibility:** Include ARIA labels and semantic HTML

---

## 🔄 State Management

### Current Approach
- Local state in App.tsx
- Props passed down to pages and components
- No global state management library

### Recommended for Production
- **React Query:** Server state and caching
- **Zustand/Redux:** Client state management
- **Context API:** Auth and theme state

---

## 📦 Component Dependencies

```
App.tsx
├── Header
│   └── Button (shadcn)
├── Home
│   ├── SearchBar
│   │   ├── Input (shadcn)
│   │   └── Button (shadcn)
│   ├── MovieGrid
│   │   ├── MovieCard
│   │   │   ├── Card (shadcn)
│   │   │   └── Button (shadcn)
│   │   └── Skeleton (shadcn)
│   └── Card (shadcn)
├── Browse
│   ├── SearchBar
│   ├── MovieGrid
│   └── Card (shadcn)
└── Profile
    ├── MovieGrid
    ├── Card (shadcn)
    └── Button (shadcn)
```

---

## 🛠️ Extending Components

### Adding a New Feature to MovieCard
1. Add prop to interface
2. Implement handler logic
3. Update UI with new element
4. Pass prop from parent components

### Creating a New Page
1. Create file in `src/pages/`
2. Define props interface
3. Build layout with sections
4. Import and use in App.tsx
5. Add navigation option

### Adding a shadcn Component
```bash
npx shadcn-ui@latest add [component-name]
```

---

**Component documentation last updated:** 2024