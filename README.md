# News Explorer

A React application that allows users to search for news articles by keyword using the [News API](https://newsapi.org/).

![News Explorer screenshot](https://github.com/user-attachments/assets/701685a8-7461-4b82-9791-007b4410f60a)

## Features

- **Keyword search** — type any topic and instantly fetch relevant articles from the last 7 days via the News API
- **Paginated results** — shows 3 cards at a time with a "Show more" button to load additional articles
- **Save articles** — signed-in users can bookmark articles; saved status is reflected with a filled icon
- **Saved Articles page** — a dedicated `/saved-news` route that lists all bookmarked articles, grouped by keyword
- **Authentication** — Sign In / Sign Up modals with client-side form validation and a success tooltip
- **Responsive layout** — adapts to desktop, tablet, and mobile viewports

## Tech stack

| Layer        | Technology                                      |
| ------------ | ----------------------------------------------- |
| UI framework | React 19 (Vite)                                 |
| Routing      | React Router v7                                 |
| API          | [newsapi.org](https://newsapi.org/)             |
| Styling      | Plain CSS modules                               |
| Linting      | ESLint with react-hooks + react-refresh plugins |

## Getting started

### 1. Clone the repo

```bash
git clone https://github.com/lydianoh-tech/lydianoh-tech-se_finalProject_frondend.git
cd lydianoh-tech-se_finalProject_frondend
```

### 2. Install dependencies

```bash
npm install
```

```
VITE_NEWS_API_KEY=your_news_api_key_here
```

### 4. Start the development server

```bash
npm run dev
```

The app is served at `http://localhost:5173` by default.

## Available scripts

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start Vite dev server                |
| `npm run build`   | Production build to `dist/`          |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint across all source files   |

## Project structure

```
src/
├── components/
│   ├── App/              # Root component, global state & routing
│   ├── Header/           # Logo + navigation bar
│   ├── SearchForm/       # Keyword input & submit button
│   ├── Main/             # Home page: hero + search results
│   ├── NewsCard/         # Individual article card
│   ├── NewsCardList/     # Grid of cards + "Show more" button
│   ├── Preloader/        # Spinning loader shown during API call
│   ├── NothingFound/     # Empty-state message
│   ├── About/            # "About the author" section
│   ├── Footer/           # Site footer
│   ├── PopupWithForm/    # Reusable modal wrapper
│   ├── LoginPopup/       # Sign-in modal
│   ├── RegisterPopup/    # Sign-up modal
│   ├── InfoTooltip/      # Registration-success confirmation modal
│   ├── SavedNews/        # Saved articles page
│   └── SavedNewsHeader/  # Header for the saved-articles page
├── contexts/
│   └── CurrentUserContext.js   # React context for the signed-in user
├── utils/
│   ├── NewsApi.js        # Fetch wrapper for newsapi.org /everything endpoint
│   └── constants.js      # Shared constants (page size, date range, etc.)
├── index.css             # Global reset & Google Fonts import
└── main.jsx              # App entry point
```

# lydianoh-tech-se_finalProject-frontend

url: https://lydianewsexplorer.crabdance.com
url: http://www.lydianewsexplorer.crabdance.com
