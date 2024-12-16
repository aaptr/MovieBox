import { accountEndpoint } from '@/config/api'

import {
  IUserAccountDetails,
  IRequestFavoritesBody,
  IRequestWatchlistBody,
  IRequestFavoritesResponse,
  IRequestAccountStatesResponse,
  IRequestRaitngBody,
  IRequestRaitngResponse
} from '@/types/userAccountTypes'

import { get, post, del } from '@/utils/client'

export const requestUserAccountDetails = async (url: string): Promise<IUserAccountDetails> => {
  const response = await get(url)
  return response.data
}

export const setFavorites = async (url: string, body: IRequestFavoritesBody): Promise<IRequestFavoritesResponse> => {
  const response = await post(url, body)
  return response.data
}

export const setWatchlist = async (url: string, body: IRequestWatchlistBody): Promise<IRequestFavoritesResponse> => {
  const response = await post(url, body)
  return response.data
}

export const requestAddRating = async (url: string, body: IRequestRaitngBody): Promise<IRequestRaitngResponse> => {
  const response = await post(url, body, {
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
  return response.data
}

export const requestDeleteRating = async (url: string): Promise<IRequestRaitngResponse> => {
  const response = await del(url, {
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
  return response.data
}

export const requestAccountStates = async (url: string): Promise<IRequestAccountStatesResponse> => {
  const response = await get(url)
  return response.data
}