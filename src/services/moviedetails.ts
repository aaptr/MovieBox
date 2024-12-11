import { get } from '@/utils/client'
import { IRequestError } from '@/types/MoviesTypes'

export const requestMovieDetails = async (
  url: string,
  params: Record<string, any> = {}
): Promise<any | IRequestError> => {
  try {
    const response = await get(url, { params })
    return response.data
  } catch (error: any) {
    return {
      hasError: true,
      message: error?.message || 'Something went wrong',
      ...(error?.response && { response: error.response }),
    }
  }
}
