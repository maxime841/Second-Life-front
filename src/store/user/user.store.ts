import { IPicture } from '@types-app/models/picture.type'
import { Iuser } from '@types-app/models/user.model'
import { BehaviorSubject } from 'rxjs'

export const userStore = {
  /**
   * information of user connected
   */
  userCurrent$: new BehaviorSubject({} as Iuser),

  /**
   * loader for login request
   */
  loginLoading$: new BehaviorSubject(false),

  /**
   * error connxion user
   */
  loginError$: new BehaviorSubject(''),

  /**
   * error forgot password
   */
  forgotPasswordError$: new BehaviorSubject(''),

  /**
   * loader for logout request
   */
  logoutLoading$: new BehaviorSubject(false),

  /**
   * loader for forgot password request
   */
  forgotPasswordLoading$: new BehaviorSubject(false),

  /**
   * loader for reset Password request
   */
  resetPasswordError$: new BehaviorSubject(''),

  /**
   * loader for reset Password request
   */
  resetPasswordLoading$: new BehaviorSubject(false),

  /**
   * update picture user
   */
   updatePicture$: new BehaviorSubject({} as IPicture),

   /**
   * update profil user
   */
    updateProfil$: new BehaviorSubject({} as Iuser),

  /**
   * error update profil
   */
     updateProfilError$: new BehaviorSubject(''),

  /**
   * delete profil
   */
      deleteProfil$: new BehaviorSubject({} as Iuser),

  /**
   * error delete profil
   */
       deleteProfilError$: new BehaviorSubject(''),

       /**
   * update password profil
   */
       updatePasswordProfil$: new BehaviorSubject(''),

     /**
   * error update password profil
   */
      updatePasswordProfilError$: new BehaviorSubject(''),
}
