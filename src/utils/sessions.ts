import {
  IRequestGusetSessionResponse,
  ICreateRequestTokenResponse,
  IRequestSessionResponse
} from '@/types/requestTypes'

export const sessions = {
  _guestSessionId: 'guest_session_id',
  _requestToken: 'request_token',
  _sessionId: 'session_id',

  setToLocalStorageGuestSessionId(guestSessionId: IRequestGusetSessionResponse) {
    localStorage.setItem(this._guestSessionId, JSON.stringify(guestSessionId))
  },
  getFromLocalStorageGuestSessionId() {
    const guestSession = localStorage.getItem(this._guestSessionId)
    if (!guestSession) {
      return null
    }
    return JSON.parse(guestSession)
  },

  setToLocalStorageRequestToken(requestToken: ICreateRequestTokenResponse) {
    localStorage.setItem(this._requestToken, JSON.stringify(requestToken))
  },
  getFromLocalStorageRequestToken() {
    const token = localStorage.getItem(this._requestToken)
    if (!token) {
      return null
    }
    return JSON.parse(token)
  },

  setToLocalStorageSessionId(sessionId: IRequestSessionResponse) {
    localStorage.setItem(this._sessionId, JSON.stringify(sessionId))
  },
  getFromLocalStorageSessionId() {
    const session = localStorage.getItem(this._sessionId)
    if (!session) {
      return null
    }
    return JSON.parse(session)
  }
}

