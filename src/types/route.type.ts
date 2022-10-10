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
}
