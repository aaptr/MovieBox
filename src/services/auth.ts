import {
  createGuestSessionEndpoint,
  createRequestTokenEndpoint,
  authUserEndpoint,
  createSessionEndpoint
} from '@/config/api'

import {
  ICreateRequestTokenResponse,
  IRequestGusetSessionResponse,
  IRequestSessionResponse,
  ICreateSessionBody
} from '@/types/authTypes'

import { get, post } from '@/utils/client'

export const createRequestToken = async (): Promise<ICreateRequestTokenResponse> => {
  const response = await get(createRequestTokenEndpoint)
  return response.data.request_token
}

export const createGuestSession = async (): Promise<IRequestGusetSessionResponse> => {
  const response = await get(createGuestSessionEndpoint)
  return response.data
}

export const createSession = async (body: ICreateSessionBody): Promise<IRequestSessionResponse> => {
  const response = await post(createSessionEndpoint, body)
  return response.data
}
