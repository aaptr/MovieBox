export interface ICreateRequestTokenResponse {
  success: boolean
  expires_at: string
  request_token: string
}

export interface IRequestGusetSessionResponse {
  success: boolean
  expires_at: string
  guest_session_id: string
}

export interface IRequestSessionResponse {
  success: boolean
  session_id: string
}

export interface IAuthState {
  guestSession: IRequestGusetSessionResponse | null
  requestToken: string | null
  isLoading: boolean
  error: string | null
}

