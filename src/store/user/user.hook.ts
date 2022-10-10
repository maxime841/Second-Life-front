import { Iuser } from '@types-app/models/user.model'
import { useEffect, useState } from 'react'
import { userService } from './user.service'
import { userStore } from './user.store'

export const userHook = {
  /**
   * hook for login error
   * @returns string
   */
  useLoginError: () => {
    const [error, setError] = useState('')

    useEffect(() => {
      // reset error didmountcomponent
      function cleanError() {
        userService.resetError()
      }

      // sub error observable
      userStore.loginError$.subscribe(value => setError(value))

      return cleanError()
    }, [])

    return error
  },

  /**
   * hook for login in progress
   */
  useLoginLoader: () => {
    const [loader, setLoader] = useState(false)

    useEffect(() => {
      userStore.loginLoading$.subscribe(value => setLoader(value))
    }, [])

    return loader
  },

  /**
   * hook for logout in progress
   */
  useLogoutLoader: () => {
    const [loader, setLoader] = useState(false)

    useEffect(() => {
      userStore.logoutLoading$.subscribe(value => setLoader(value))
    }, [])

    return loader
  },

  /**
   * hook for userCurrent
   * @returns user
   */
  useUserCurrent: () => {
    const [userCurrent, setUserCurrent] = useState({} as Iuser)

    useEffect(() => {
      userStore.userCurrent$.subscribe(value => setUserCurrent(value))
    }, [])

    return userCurrent
  },

  /**
   * Error for forgot password
   * @returns string
   */
  useForgotPasswordError: () => {
    const [error, setError] = useState('')
    const [loadingFogotPassword, setLoadingFogotPassword] = useState(false)

    useEffect(() => {
      // reset error didmountcomponent
      function cleanError() {
        userService.resetError()
      }

      // sub error observable
      userStore.forgotPasswordError$.subscribe(value => setError(value))
      userStore.forgotPasswordLoading$.subscribe(value =>
        setLoadingFogotPassword(value),
      )

      return cleanError()
    }, [])

    return { error, loadingFogotPassword }
  },

  /**
   * hook for error and loading for reset password
   * @returns string, boolean
   */
  useResetPassword: () => {
    const [error, setError] = useState('')
    const [loadingResetPassword, setLoadingResetPassword] = useState(false)

    useEffect(() => {
      // reset error didmountcomponent
      function cleanError() {
        userService.resetError()
      }

      // sub error observable
      userStore.resetPasswordError$.subscribe(value => setError(value))
      userStore.resetPasswordLoading$.subscribe(value =>
        setLoadingResetPassword(value),
      )

      return cleanError()
    }, [])

    return { error, loadingResetPassword }
  },
}
