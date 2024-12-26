import { LocalisationObject } from '@/types/localisationTypes'

export const pl: LocalisationObject = {
  requestLang: 'pl-PL',
  header: {
    menubar: {
      movies: {
        groupname: 'Filmy',
        now_playing: 'W kinach',
        popular: 'Popularne filmy',
        top_rated: 'Najwyżej oceniane',
        upcoming: 'Nadchodzące filmy',
      },
      mymovies: {
        groupname: 'Moje filmy',
        favorite: 'Moje ulubione filmy',
        rated: 'Ocenione przez mnie',
        watchlist: 'Do obejrzenia',
      },
      about: 'O MovieBox'
    },
    quicksearch: {
      placeholder: 'Szybkie wyszukiwanie...',
      buttontext: 'Szukaj',
    },
    themetoggler: {
      todark: 'Przełącz na tryb ciemny',
      tolight: 'Przełącz na tryb jasny',
    },
    languageswitcher: {
      en: 'English',
      pl: 'Polski',
      ru: 'Русский',
    },
    useravatar: {
      login: 'Zaloguj się',
      logout: 'Wyloguj się',
      userID: 'ID użytkownika:',
      name: 'Imie:',
    }
  },
  homePage: {
    title: 'Witaj w MovieBox',
    subtitle: 'Świat filmu jest na wyciągnięcie ręki. Odkryj tysiące filmów ze wszystkich gatunków i okresów.',
    now_playing: 'W kinach',
    popular: 'Popularne filmy',
    top_rated: 'Najwyżej oceniane',
    upcoming: 'Nadchodzące filmy',
  },
  movies: {
    now_playingtab: 'W kinach',
    populartab: 'Popularne filmy',
    top_ratedtab: 'Najwyżej oceniane',
    upcomingtab: 'Nadchodzące filmy',
    sortSelectOptions: {
      titleAsc: 'Nazwa (A-Z)',
      titleDesc: 'Nazwa (Z-A)',
      popularAsc: 'Popularność (rosnąco)',
      popularDesc: 'Popularność (malejąco)',
      releaseDateAsc: 'Data premiery (od najstarszych)',
      releaseDateDesc: 'Data premiery (od najnowszych)',
      ratingAsc: 'Ocena (od najnizszych)',
      ratingDesc: 'Ocena (od najwyzszych)',
      voteCountAsc: 'Liczba głosów (rosnąco)',
      voteCountDesc: 'Liczba głosów (malejąco)',
      createdAsc: 'Dodano (od najstarszych)',
      createdDesc: 'Dodano (od najnowszych)',
    }
  },
  mymovies: {
    favoritetab: 'Moje ulubione filmy',
    ratedtab: 'Ocenione przez mnie',
    watchlisttab: 'Do obejrzenia',
  },
  movie: {
    moviePage: {
      noID: 'Nieprawidłowy identyfikator filmu',
      isLoading: 'Ładowanie...',
      error: 'Bład pobierania danych',
      topCastLabel: 'W rolach głównych',
      creativeTeamLabel: 'Zespoł twórców',
    },
    movieDetails: {
      originalTitle: 'Tytuł oryginalny: ',
      releaseDate: 'Data premiery: ',
      genres: 'Gatunki: ',
      runtime: 'Czas trwania: ',
      hour: 'g',
      minutes: 'min',
      userRating: {
        unrated: `Jaka jest twoja ocena?`,
        rated: 'Twoja ocena: ',
        submit: 'Zatwierdź',
        clearRating: 'Usuń swoją ocenę',
      },
      tagline: 'Slogan: ',
      overview: 'Opis: ',
    },
    fullCastAndCrew: {
      title: 'Pełna obsada i załoga',
      cast: 'Obsada aktorska',
      crew: 'Ekipa filmowa',
    },
    trailers: 'Zwiastuny',
  },
  search: {
    title: 'Wyniki wyszukiwania',
    noResults: 'Brak wyników.',
    isLoading: 'Szukam filmów...',
  },
  about: {
    title: 'O stronie MovieBox',
    text: `Witaj w naszym katalogu filmów! Znajdziesz tutaj bogaty zbiór filmów z różnych gatunków, od najnowszych hitów kinowych po ponadczasowe klasyki. Niezależnie od tego, czy masz ochotę na pełną akcji przygodę, wzruszającą dramę, czy ekscytujący thriller, mamy coś dla każdego. Nasza platforma oferuje szczegółowe informacje o każdym filmie, w tym streszczenia fabuły, dane o aktorach i twórcach oraz oceny użytkowników, co ułatwia znalezienie idealnego tytułu. Regularnie aktualizujemy nasz katalog o nowe premiery i ukryte perełki, abyś zawsze miał świeże propozycje do odkrycia. Możesz filtrować wyniki wyszukiwania według gatunku, roku wydania, oceny i innych kryteriów, co pozwoli Ci znaleźć filmy najlepiej odpowiadające Twoim gustom. Nasz katalog to idealne miejsce zarówno dla casualowych widzów, jak i pasjonatów kina, zapewniając łatwe i przyjemne przeglądanie. Ciesz się odkrywaniem nowych filmowych skarbów!`,
  },
  authApproved: {
    title: 'Autoryzacja zatwierdzona',
    button: {
      text: 'Przejdź na strone głoówną...',
      suffix: 's'
    }
  }
}