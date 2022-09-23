import { Http } from '@config-app/http/http.instance'
import { TokenStore } from './token.store'

export const TokenService = {
  /**
   * verified token in api
   */
  verifiedConnected: () => {
    Http.get('auth/verified').then(res => {
      if (res.data.authenticated) {
        TokenService.setToken(localStorage.getItem('nekto')!)
        // UserService.setUserCurrent(res.data.user);
      } else {
        TokenService.removeTokenAndStorage()
        // UserService.removeUserCurrent();
      }
    }).catch(() => TokenService.removeTokenAndStorage())
  },

  /**
     * if token exist in storage
     * add token intoken$
     * else remove token in storage and reset token$
     */
  checkStorageForConnected: () => {
    if (localStorage.getItem('nekto')) {
      TokenService.setToken(localStorage.getItem('nekto')!)
      return localStorage.getItem('nekto')!
    }
    TokenService.removeTokenAndStorage()
    return null
  },

  /**
   * set token in token$
   * @param token
   */
  setToken: (token: string) => {
    TokenStore.token$.next(token)
  },

  /**
   * remove token in storage and reset token$
   */
  removeTokenAndStorage: () => {
    localStorage.removeItem('nekto')
    TokenStore.token$.next('')
  }
}
