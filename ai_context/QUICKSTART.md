# QuickStart Guide - MovieLens Recommendation System

## 🚀 Getting Started

Follow these steps to run the MovieLens Recommendation System UI locally.

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- A modern web browser (Chrome, Firefox, Safari, or Edge)

### Installation & Running

1. **Navigate to the project directory:**
   ```bash
   cd cse_482_project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - The app will automatically open, or navigate to: `http://localhost:5173`
   - You should see the MovieLens home page with the hero section

### 🎮 Exploring the UI

#### Home Page
- **Hero Section**: Main landing area with search functionality
- **Stats Cards**: Display system statistics (33M ratings, 86K movies, 330K users)
- **Recommended For You**: Personalized movie recommendations
- **Trending Now**: Most popular movies
- **CTA Section**: Call-to-action for getting started

#### Browse Page
- **Search Bar**: Search movies by title
- **Filters**: Filter by multiple genres
- **Sidebar**: Quick filters and sorting options (desktop only)
- **Sort Options**: By rating, popularity, or release year
- **Movie Grid**: Responsive grid of movie cards

#### Profile Page
- **User Stats**: Movies rated, watchlist count, favorite genres
- **Watchlist**: View and manage your saved movies
- **Activity**: Recently rated movies
- **Taste Profile**: Visual breakdown of favorite genres

### 🎬 Interacting with Movies

1. **Rating a Movie:**
   - Hover over any movie card
   - Click on 1-5 stars to rate
   - Stars turn yellow when rated

2. **Adding to Watchlist:**
   - Hover over a movie card
   - Click "Add to Watchlist" button
   - View watchlist in Profile page

3. **Searching Movies:**
   - Use the search bar on Home or Browse page
   - Type movie title or genre name
   - Press Enter or click Search button

4. **Filtering by Genre:**
   - Click "Filters" button in search bar
   - Select one or multiple genres
   - Click genre tags to toggle selection
   - Active filters shown as badges

### 📱 Responsive Design

The UI is fully responsive:
- **Mobile** (< 768px): 2 columns
- **Tablet** (768px - 1024px): 3 columns
- **Desktop** (1024px - 1280px): 4 columns
- **Large Desktop** (> 1280px): 5 columns

### 🧪 Mock Data

Currently using mock data with:
- 50 sample movies
- User profile: Alex Johnson
- Pre-populated watchlist (5 movies)
- Various genres and ratings

### 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run type-check

# Lint code
npm run lint
```

### 📂 Project Structure

```
src/
├── components/
│   ├── layout/          # Navigation, headers
│   ├── movies/          # Movie-specific components
│   └── ui/              # shadcn/ui components
├── pages/               # Main page components
├── types/               # TypeScript interfaces
├── lib/                 # Utilities and mock data
└── App.tsx              # Main application
```

### 🎨 Customization

To customize colors or theme:
1. Edit `src/index.css` for global theme colors
2. Modify Tailwind classes in components
3. Update gradient colors (currently purple-to-pink)

### 🔧 Troubleshooting

**Issue: Port already in use**
```bash
# Kill process on port 5173
npx kill-port 5173
# Or use a different port
npm run dev -- --port 3000
```

**Issue: Dependencies not installing**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue: TypeScript errors**
```bash
# Run type check
npm run type-check
```

### 📝 Notes

- All images use Unsplash placeholders
- Search and filters work with mock data
- Ratings and watchlist changes are stored in component state
- Ready for backend API integration

### 🔜 Next Steps

1. **Backend Integration**: Connect to Python backend API
2. **Authentication**: Add user login/signup
3. **Real Data**: Replace mock data with API calls
4. **Persistence**: Save user preferences to database
5. **Advanced Features**: Movie details modal, reviews, social features

### 📞 Need Help?

- Check `FRONTEND_README.md` for detailed documentation
- Review component files for implementation details
- Inspect browser console for any runtime errors

---

**Enjoy exploring the MovieLens Recommendation System! 🎬🍿**