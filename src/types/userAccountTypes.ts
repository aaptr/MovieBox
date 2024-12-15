export interface IUserAccountDetails {
  avatar: {
    gravatar: {
      hash: string
    }
    tmdb: {
      avatar_path: string
    }
  }
  id: number
  iso_639_1: string
  iso_3166_1: string
  name: string
  include_adult: boolean
  username: string
}

export interface IUserState {
  accountDetails: IUserAccountDetails | null
  isLoading: boolean
  error: string | null
  movieAccountState: IRequestAccountStatesResponse | null
}

export interface IRequestFavoritesBody {
  media_type: string
  media_id: number
  favorite: boolean
}

export interface IRequestFavoritesResponse {
  success: boolean
  status_code: number
  status_message: string
}

export interface IRequestAccountStatesResponse {
  id: number
  favorite: boolean
  rated: { value: number } | null
  watchlist: boolean
}