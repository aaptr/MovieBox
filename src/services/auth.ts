import {
  createGuestSessionEndpoint,
  createRequestTokenEndpoint,
  authUserEndpoint,
  createSessionEndpoint
} from '@/config/api'

import {
  ICreateRequestTokenResponse,
  IRequestGusetSessionResponse,
  IRequestSessionResponse
} from '@/types/authTypes'

import { get, post } from '@/utils/client'

export const createRequestToken = async (): Promise<ICreateRequestTokenResponse> => {
  const response = await get(createRequestTokenEndpoint)
  return response.data
}

export const createGuestSession = async (): Promise<IRequestGusetSessionResponse> => {
  const response = await get(createGuestSessionEndpoint)
  return response.data
}

export const createSession = async (requestToken: string): Promise<IRequestSessionResponse> => {
  const response = await post(createSessionEndpoint, { request_token: requestToken })
}