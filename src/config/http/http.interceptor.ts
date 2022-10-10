import { Store } from '@store/store'
import { http } from './http.instance'

export const HttpInterceptor = {
  /**
   * interceptor request
   * */
  request: () => {
    http.interceptors.request.use(
      config => {
        const storageToken = Store.token.checkStorageForConnected()
        if (storageToken) {
          config.headers!.Authorization = `Bearer ${storageToken}`
        } else {
          config.headers!.Authorization = 'Bearer'
        }
        console.log('request Interceptor', config)
        return config
      },
      error => {
        console.log('Error request Interceptor', error)
        return Promise.reject(error)
      },
    )
  },

  /**
   * interceptor response
   * */
  response: () => {
    http.interceptors.response.use(
      response => {
        if (response.status === 401) {
          Store.token.removeTokenAndStorage()
          Store.user.removeUserCurrent()
        }
        console.log('response Interceptor', response)
        return response
      },
      error => {
        console.log('Error response Interceptor', error)
        return Promise.reject(error)
      },
    )
  },
}
