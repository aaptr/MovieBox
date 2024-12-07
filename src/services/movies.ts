import { get, post } from '@/utils/client'


export const requestMoviesList = async (endpoint: string, params = {}) => {
  const response = await get(endpoint, { params })
  return response.data

  // try {
  //   const response = await get(endpoint, { params })
  //   return response.data
  // } catch (error) {
  //   if (typeof error === 'object' && error !== null) {
  //     return {
  //       hasError: true,
  //       ...error
  //     }
  //   }
  // }
}