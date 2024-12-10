import { get, post } from '@/utils/client'


export const requestMoviesList = async (endpoint: string, params = {}) => {
  try {
    const response = await get(endpoint, { params })
    return response.data
  } catch (error) {
    if (typeof error === 'object' && error !== null) {
      return {
        hasError: true,
        ...error
      }
    }
  }
}

export const requestSearchMovies = async (url: string) => {
  try {
    const response = await get(url)
    return response.data
  } catch (error) {
    if (typeof error === 'object' && error !== null) {
      return {
        hasError: true,
        ...error
      }
    }
  }
}