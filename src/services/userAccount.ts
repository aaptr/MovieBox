import { accountEndpoint } from '@/config/api'

import { IUserAccountDetails } from '@/types/userAccountTypes'

import { get, post } from '@/utils/client'

export const requestUserAccountDetails = async (url: string): Promise<IUserAccountDetails> => {
  const response = await get(url)
  return response.data
}