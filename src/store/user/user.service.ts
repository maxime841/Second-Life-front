import { http } from '@config-app/http/http.instance'
import { AppService } from '@store/app/app.service'
import { TokenService } from '@store/token/token.service'
import { Eerror } from '@types-app/error.type'
import { Ijwt } from '@types-app/models/jwt.model'
import {
  Iuser,
  IuserLogout,
  TresetPassword,
} from '@types-app/models/user.model'
import { Eroute } from '@types-app/route.type'
import { userStore } from './user.store'

export const userService = {
  /**
   * set user connected
   * @param user Iuser
   */
  setUserCurrent: (user: Iuser) => {
    userStore.userCurrent$.next({ ...user })
  },

  /**
   * remove user connected
   */
  removeUserCurrent: () => {
    userStore.userCurrent$.next({} as Iuser)
  },

  /**
   * reset all error related to user
   */
  resetError: () => {
    userStore.loginError$.next('')
  },

  /**
   * connexion user
   * @param email string
   * @param password string
   */
  login: async (email: string, password: string) => {
    try {
      userStore.loginLoading$.next(true)
      // login
      const res = await http.post<Ijwt>(`${Eroute.AUTH_LOGIN_POST}`, {
        email,
        password,
      })

      // is connected add token add userCurrent
      if (res.data.authenticated) {
        TokenService.setTokenWithSetStorage(res.data.access_token!)
        userService.setUserCurrent(res.data.user!)
      }

      userStore.loginLoading$.next(false)
    } catch (error) {
      AppService.errorMessage(userStore.loginError$, error, Eerror.LOGIN)
      userStore.loginLoading$.next(false)
    }
  },

  /**
   * disconnect user
   */
  logout: async () => {
    try {
      userStore.logoutLoading$.next(true)
      // logout
      const res = await http.delete<IuserLogout>(`${Eroute.AUTH_LOGOUT_DELETE}`)

      // if disconnect remove token remove usercurrent
      if (!res.data.authenticated) {
        TokenService.removeTokenAndStorage()
        userService.removeUserCurrent()
      }

      userStore.logoutLoading$.next(false)
    } catch (error) {
      TokenService.removeTokenAndStorage()
      userService.removeUserCurrent()
      userStore.logoutLoading$.next(false)
    }
  },

  /**
   * send email for forgot password
   * @param email string
   */
  sendForgotPassword: async (email: string) => {
    try {
      const res = await http.post<{ send_email: boolean }>(
        Eroute.FORGOT_PASSWORD,
        { email },
      )
      if (res.data.send_email) {
        // ! toastify
      }
    } catch (error) {
      AppService.errorMessage(
        userStore.forgotPasswordError$,
        error,
        Eerror.FORGOT_PASSWORD,
      )
      userStore.forgotPasswordLoading$.next(false)
    }
  },

  /**
   * reset password
   * @param data TresetPassword
   */
  resetPassword: async (data: TresetPassword) => {
    try {
      const res = await http.post<{ update_password: boolean }>(
        Eroute.RESET_PASSWORD,
        { ...data },
      )
      if (res.data.update_password) {
        // ! toastify
      }
    } catch (error) {
      AppService.errorMessage(
        userStore.resetPasswordError$,
        error,
        Eerror.FORGOT_PASSWORD,
      )
      userStore.resetPasswordLoading$.next(false)
    }
  },

  /**
   * active loader for forgot password
   */
  activateForgotPasswordLoadding: () => {
    userStore.forgotPasswordLoading$.next(true)
  },

  /**
   * disable loader for forgot password
   */
  disabledForgotPasswordLoadding: () => {
    userStore.forgotPasswordLoading$.next(true)
  },

  /**
   * active loader for reset password
   */
  activateResetPasswordLoadding: () => {
    userStore.resetPasswordLoading$.next(true)
  },

  /**
   * disable loader for reset password
   */
  disabledResetPasswordLoadding: () => {
    userStore.resetPasswordLoading$.next(true)
  },
}
