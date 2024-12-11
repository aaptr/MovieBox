import { get, post } from '@/utils/client'
import { IRequestError } from '@/types/MoviesTypes'

export const requestMovies = async (
  url: string,
  params: Record<string, any> = {}
): Promise<any | IRequestError> => {
  try {
    const response = await get(url, { params })
    return response.data
  } catch (error: any) {
    return {
      hasError: true,
      message: error.message || 'Unknown error occurred',
      code: error.code || 500,
    }
  }
}

