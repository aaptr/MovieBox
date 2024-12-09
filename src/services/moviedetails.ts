import { get } from '@/utils/client'


export const requestMovieDetails = async (url: string) => {
  try {
    const response = await get(url)
    return response.data
  } catch (error: any) {
    return {
      hasError: true,
      message: error?.message || 'Something went wrong',
      ...(error?.response && { response: error.response })
    }
  }
}