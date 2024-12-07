// AUTH
export const createGuestSessionEndpoint: string = 'https://api.themoviedb.org/3/authentication/guest_session/new'
export const createRequestTokenEndpoint: string = 'https://api.themoviedb.org/3/authentication/token/new'
export const authUserEndpoint: string = 'https://www.themoviedb.org/authenticate/'
export const createSessionEndpoint: string = 'https://api.themoviedb.org/3/authentication/session/new'

// account
export const accountEndpoint: string = 'https://api.themoviedb.org/3/account'

// movie lists
export const popularEndpoint: string = 'https://api.themoviedb.org/3/movie/popular?language=ru-Ru&page=1'
export const topRatedEndpoint: string = 'https://api.themoviedb.org/movie/3/top_rated'
export const upcomingEndpoint: string = 'https://api.themoviedb.org/movie/3/upcoming'
export const posterPath: string = 'https://image.tmdb.org/t/p/original/'
export const cardImagePath: string = 'https://media.themoviedb.org/t/p/w220_and_h330_face'
