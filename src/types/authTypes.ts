export interface ICreateRequestTokenResponse {
  success: boolean
  expires_at: string
  request_token: string
}

export interface IRequestGuestSessionResponse {
  success: boolean
  expires_at: string
  guest_session_id: string
}

export interface IRequestSessionResponse {
  success: boolean
  session_id: string
}

export interface IAuthState {
  guestSession: IRequestGuestSessionResponse | null
  requestToken: ICreateRequestTokenResponse | null
  sessionId: IRequestSessionResponse | null
  isLoading: boolean
  error: string | null
}

export interface ICreateSessionBody {
  request_token: string
}