import {
  createGuestSessionEndpoint,
  createRequestTokenEndpoint,
  createSessionEndpoint
} from '@/config/api'

import {
  ICreateRequestTokenResponse,
  IRequestGuestSessionResponse,
  IRequestSessionResponse,
  ICreateSessionBody
} from '@/types/authTypes'

import { get, post } from '@/utils/client'

export const createRequestToken = async (): Promise<ICreateRequestTokenResponse> => {
  try {
    const response = await get(createRequestTokenEndpoint)
    return response.data.request_token
  } catch (error) {
    console.error("Thomething went wrong. Couldn't get request token", error)
    throw error
  }
}

export const createGuestSession = async (): Promise<IRequestGuestSessionResponse> => {
  try {
    const response = await get(createGuestSessionEndpoint)
    return response.data
  } catch (error) {
    console.error("Thomething went wrong. Couldn't get guest session", error)
    throw error
  }
}

export const createSession = async (body: ICreateSessionBody): Promise<IRequestSessionResponse> => {
  try {
    const response = await post(createSessionEndpoint, body)
    return response.data
  } catch (error) {
    console.error("Thomething went wrong. Couldn't get session ID", error)
    throw error
  }
}
