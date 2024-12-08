export interface IMovieListItem {
  adult: boolean
  backdrop_path: string
  genre_ids: [number]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface IMovieList {
  page: number
  results: IMovieListItem[]
  total_pages: number
  total_results: number
}

export interface IMoviesState {
  popularList: IMovieListItem[]
  topRatedList: IMovieListItem[]
  upcomingList: IMovieListItem[]
  isLoading: boolean
  error: string | null
  popularPageCount: number | null
  ordering: string
}

export interface IMoviesListProps {
  movies: IMovieListItem[]
}

export type FetchMoviesListArgs = {
  endpoint: string
  listType: 'popular' | 'topRated' | 'upcoming'
}

export type FetchMoviesListResponse = {
  listType: 'popular' | 'topRated' | 'upcoming'
  data: IMovieList
}

export interface IMovieDetails {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: {
    id: number
    name: string
    poster_path: string
    backdrop_path: string
  }
  budget: number
  genres: [{
    id: number
    name: string
  }]
  homepage: string
  id: number
  imdb_id: string
  original_country: [string]
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: [{
    id: number
    logo_path: string
    name: string
    origin_country: string
  }]
  production_countries: [{
    iso_3166_1: string
    name: string
  }]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: [{
    english_name: string
    iso_639_1: string
    name: string
  }]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

