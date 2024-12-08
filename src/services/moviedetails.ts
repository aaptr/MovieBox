import { get } from '@/utils/client'


export const requestMoviesList = async (url: string, params = {}) => {
  try {
    const response = await get(url, { params })
    return response.data
  } catch (error: any) {
    return {
      hasError: true,
      message: error?.message || 'Something went wrong',
      ...(error?.response && { response: error.response })
    }
  }
}