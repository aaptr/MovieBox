import { Search } from "lucide-react";

export const en = {
  requestLang: 'en-US',
  header: {
    menubar: {
      movies: {
        groupname: 'Movies',
        popular: 'Popular movies',
        top_rated: 'Top rated movies',
        upcoming: 'Upcoming movies',
      },
      mymovies: {
        groupname: 'My Movies',
        favorite: 'My favorite movies',
        rated: 'My rated movies',
        watchlist: 'My watchlist',
      },
      about: 'About MovieBox'
    },
    quicksearch: {
      placeholder: 'Quick search...',
      buttontext: 'Search',
    },
    themetoggler: {
      todark: 'Switch to dark mode',
      tolight: 'Switch to light mode',
    },
    languageswitcher: {
      en: 'English',
      pl: 'Polski',
      ru: 'Русский',
    },
    useravatar: {
      login: 'Login',
      logout: 'Logout',
      userID: 'User ID:',
      name: 'Name:',
    }
  },
  homePage: {
    title: 'Welcome to MovieBox',
    subtitle: 'The world of film is at your fingertips. Explore thousands of movies across all genres and time periods.',
    now_playing: 'Now playing',
    popular: 'Popular movies',
    top_rated: 'Top rated movies',
    upcoming: 'Upcoming movies',
  },
  movies: {
    now_playingtab: 'Now playing',
    populartab: 'Popular',
    top_ratedtab: 'Top Rated',
    upcomingtab: 'Upcoming',
  },
  mymovies: {
    favoritetab: 'My favorite movies',
    ratedtab: 'My Rated movies',
    watchlisttab: 'My Watchlist',
  },
  movie: {
    moviePage: {
      noID: 'Invalid movie ID',
      isLoading: 'Loading...',
      error: 'Error',
    },
    movieDetails: {
      originalTitle: 'Original title: ',
      releaseDate: 'Release date: ',
      genres: 'Genres: ',
      runtime: 'Duration: ',
      hour: 'h',
      minutes: 'min',
      userRating: {
        unrated: `What's your rating?`,
        rated: 'Your rating: ',
        submit: 'Submit',
        clearRating: 'Clear your rating',
      },
      tagline: 'Tagline: ',
      overview: 'Overview: ',
      // cast: 'Cast: ',
      // crew: 'Crew: ',
      // budget: 'Budget: ',
      // revenue: 'Revenue: ',
      // keywords: 'Keywords: ',
      // productionCompanies: 'Production companies: ',
    }
  },
  search: {
    title: 'Search results',
    noResults: 'No results found.',
    isLoading: 'Searching movies...',
  },
  about: {
    title: 'About MovieBox',
    text: `Welcome to our Movie Catalog! Here, you'll find an extensive collection of films from various genres, ranging from the latest blockbusters to timeless classics. Whether you're in the mood for an action-packed adventure, a heartwarming drama, or a thrilling mystery, we have something for everyone. Our platform provides detailed information about each film, including plot summaries, cast and crew details, and user ratings, making it easier to find exactly what you're looking for. We regularly update our catalog with new releases and hidden gems, ensuring that you always have fresh content to explore. You can filter your search by genre, release year, rating, and more, helping you discover films that perfectly suit your taste. Whether you're a casual viewer or a movie enthusiast, our catalog offers a seamless and enjoyable browsing experience. Enjoy exploring and discovering new cinematic gems!`,
  },
  authApproved: {
    title: 'Authenthification approved',
    button: {
      text: 'Go to Home Page...',
      suffix: 's'
    }
  }
}
