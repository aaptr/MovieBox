import {
  IRequestGusetSessionResponse,
  ICreateRequestTokenResponse,
  IRequestSessionResponse
} from '@/types/authTypes'

export const sessions = {
  _guestSessionId: 'guest_session_id',
  _requestToken: 'request_token',
  _sessionId: 'user_session',

  setToLocalStorageGuestSession(guestSessionId: IRequestGusetSessionResponse) {
    localStorage.setItem(this._guestSessionId, JSON.stringify(guestSessionId))
  },
  getFromLocalStorageGuestSession() {
    const guestSession = localStorage.getItem(this._guestSessionId)
    if (!guestSession) {
      return null
    }
    return JSON.parse(guestSession)
  },

  removeGuestSessionFromLocalStorage() {
    localStorage.removeItem(this._guestSessionId)
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

  removeRequestTokenFromLocalStorage() {
    localStorage.removeItem(this._requestToken)
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
  },

  removeSessionIdFromLocalStorage() {
    localStorage.removeItem(this._sessionId)
  }
}

