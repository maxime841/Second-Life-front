import { http } from '@config-app/http/http.instance'
import { userService } from '@store/user/user.service'
import { IjwtVerified } from '@types-app/models/jwt.model'
import { Eroute } from '@types-app/route.type'
import { TokenStore } from './token.store'

export const TokenService = {
  /**
   * verified token in api
   */
  verifiedConnected: () => {
    if (localStorage.getItem('nekto')) {
      http
        .get<IjwtVerified>(`${Eroute.AUTH_VERIFIED}`)
        .then(res => {
          if (res.data.authenticated) {
            TokenService.setToken(localStorage.getItem('nekto')!)
            userService.setUserCurrent(res.data.user)
            return true
          } else {
            TokenService.removeTokenAndStorage()
            userService.removeUserCurrent()
            return false
          }
        })
        .catch(() => {
          TokenService.removeTokenAndStorage()
          userService.removeUserCurrent()
          return false
        })
    } else {
      TokenService.removeTokenAndStorage()
      userService.removeUserCurrent()
      return false
    }
    return false
  },

  /**
   * return a value of storage for token
   * @returns boolean
   */
  checkStorageForExistToken: () => localStorage.getItem('nekto'),

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
   * set token in storage and in token$
   * @param token string
   */
  setTokenWithSetStorage(token: string) {
    localStorage.setItem('nekto', token)
    TokenStore.token$.next(token)
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
  },
}
