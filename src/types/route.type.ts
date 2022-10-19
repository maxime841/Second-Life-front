/**
 * enum has all route of app
 */
export enum Eroute {
  // auth
  AUTH_LOGIN_POST = 'login',
  AUTH_LOGOUT_DELETE = 'auth/logout',
  AUTH_VERIFIED = 'auth/verified',

  // forgot password
  FORGOT_PASSWORD = 'forgot-password',
  RESET_PASSWORD = 'reset-password',

  // house
  GET_ALL_HOUSE = 'houses',

  // user
  UPLOAD_PICTURE = 'user/upload/avatar',
  UPDATE_PROFIL = 'user/profil/update',
  DELETE_PROFIL = 'user/delete',
  UPDATE_PASSWORD = 'user/profil/update/password',
}
