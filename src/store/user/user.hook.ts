import { IPicture } from '@types-app/models/picture.type'
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

  /**
   * hook for update picture
   * @returns picture
   */
   useUpdatePicture: () => {
    const [picture, setPicture] = useState({} as IPicture)

    useEffect(() => {
      userStore.updatePicture$.subscribe(value => setPicture(value))
    }, [])

    return picture
  },

  /**
   * hook for update profil
   * @returns profil
   */
   useUpdateProfil: () => {
    const [error, setError] = useState('')
    const [profil, setProfil] = useState({} as Iuser)

    useEffect(() => {
      // reset error didmountcomponent
      function cleanError() {
        userService.resetError()
      }

      async function updateProfil() {
        await userService.updateProfil(profil)
      }
      userStore.updateProfilError$.subscribe(value => setError(value))
      userStore.updateProfil$.subscribe(value => setProfil(value))
      cleanError()
      updateProfil()
    }, [])

    return { error, profil }
  },

  /**
   * hook fordelete profil
   * @returns profil
   */
   useDeleteProfil: (profil: Iuser) => {
    const [error, setError] = useState('')
    const [deleteProfil, setDeleteProfil] = useState({} as Iuser)

    useEffect(() => {
      // reset error didmountcomponent
      function cleanError() {
        userService.resetError()
      }

      async function deleteProfil() {
        await userService.deleteProfil(profil)
      }
      userStore.deleteProfilError$.subscribe(value => setError(value))
      userStore.deleteProfil$.subscribe(value => setDeleteProfil(value))
      cleanError()
      deleteProfil()
    }, [profil])

    return { error, deleteProfil }
  },
}
