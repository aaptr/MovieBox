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
  try {
    const response = await get(url)
    return response.data
  } catch (error) {
    console.error("Thomething went wrong. Couldn't get user account details", error)
    throw error
  }
}

export const setFavorites = async (url: string, body: IRequestFavoritesBody): Promise<IRequestFavoritesResponse> => {
  try {
    const response = await post(url, body)
    return response.data
  } catch (error) {
    console.error("Thomething went wrong. Couldn't post favorites", error)
    throw error
  }
}

export const setWatchlist = async (url: string, body: IRequestWatchlistBody): Promise<IRequestFavoritesResponse> => {
  try {
    const response = await post(url, body)
    return response.data
  } catch (error) {
    console.error("Thomething went wrong. Couldn't post watchlist", error)
    throw error
  }
}

export const requestAddRating = async (url: string, body: IRequestRaitngBody): Promise<IRequestRaitngResponse> => {
  try {
    const response = await post(url, body, {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8'
      }
    })
    return response.data
  } catch (error) {
    console.error("Thomething went wrong. Couldn't post rating", error)
    throw error
  }
}

export const requestDeleteRating = async (url: string): Promise<IRequestRaitngResponse> => {
  try {
    const response = await del(url, {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8'
      }
    })
    return response.data
  } catch (error) {
    console.error("Thomething went wrong. Couldn't delete rating", error)
    throw error
  }
}

export const requestAccountStates = async (url: string): Promise<IRequestAccountStatesResponse> => {
  try {
    const response = await get(url)
    return response.data
  } catch (error) {
    console.error("Thomething went wrong. Couldn't get account states", error)
    throw error
  }
}