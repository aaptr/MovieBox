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

export interface IMovieCategoryState {
  list: IMovieListItem[]
  currentPage: number
  totalPages: number
  totalResults: number
}

export interface IMoviesState {
  now_playing: IMovieCategoryState
  popular: IMovieCategoryState
  top_rated: IMovieCategoryState
  upcoming: IMovieCategoryState
  search: IMovieCategoryState
  favorite: IMovieCategoryState
  rated: IMovieCategoryState
  watchlist: IMovieCategoryState
  isLoading: boolean
  error: string | null
}

export interface IMoviesListProps {
  movies: IMovieListItem[]
}

export type FetchMoviesListArgs = {
  endpoint: string
  listType: 'popular' | 'top_rated' | 'upcoming'
}

export type FetchMoviesListResponse = {
  listType: 'popular' | 'top_rated' | 'upcoming'
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

export interface IMovieDetailsState {
  movieDetails: IMovieDetails | null
  movieCredits: IMovieCredits | null
  isLoading: boolean
  error: string | null
}

export interface IMovieCredits {
  id: number
  cast: {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string | null
    cast_id: number
    character: string
    credit_id: string
    order: number
  }[]
  crew: {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string | null
    credit_id: string
    department: string
    job: string
  }[]
}

export interface ICrewMember {
  id: number
  name: string
  profile_path: string | null
  job: string
}

export interface ICastMember {
  id: number
  name: string
  profile_path: string | null
  character: string
}

export interface IRequestError {
  hasError: true
  message?: string
  code?: number
}