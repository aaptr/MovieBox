import { accountEndpoint } from '@/config/api'

import {
  IUserAccountDetails,
  IRequestFavoritesBody,
  IRequestFavoritesResponse,
  IRequestAccountStatesResponse
} from '@/types/userAccountTypes'

import { get, post } from '@/utils/client'

export const requestUserAccountDetails = async (url: string): Promise<IUserAccountDetails> => {
  const response = await get(url)
  return response.data
}

export const setFavorites = async (url: string, body: IRequestFavoritesBody): Promise<IRequestFavoritesResponse> => {
  const response = await post(url, body)
  return response.data
}

export const requestAccountStates = async (url: string): Promise<IRequestAccountStatesResponse> => {
  const response = await get(url)
  return response.data
}