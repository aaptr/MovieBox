import {
  createGuestSessionEndpoint,
  createRequestTokenEndpoint,
  authUserEndpoint,
  createSessionEndpoint
} from '@/config/api'

import {
  ICreateRequestTokenResponse,
  IRequestGusetSessionResponse
} from '@/types/requestTypes'

import { get } from '@/utils/client'

export const createRequestToken = async (): Promise<ICreateRequestTokenResponse> => {
  const response = await get(createRequestTokenEndpoint)
  return response.data
}

export const createGuestSession = async () => {
  const response = await get(createGuestSessionEndpoint)
  return response.data
}