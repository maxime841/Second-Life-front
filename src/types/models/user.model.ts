import { IPicture } from './picture.type'
import { Irole } from './role.model'

/**
 * interface user
 */
export interface Iuser {
  id?: number
  name?: string
  email?: string
  picture?: IPicture
  email_verified_at?: string
  role?: Irole
  currentPassword?: string
  password?: string
  passwordConfirme?: string
  deleteProfil?: boolean
}

/**
 * interface for response update user
 */
export interface IuserUpdateResponse {
  user_updated: Iuser
}

/**
 * interface logout user current
 */
export interface IuserLogout {
  authenticated?: boolean
}

/**
 * type for object for restPassword
 */
export type TresetPassword = {
  email: string
  password_confirmation: string
  password: string
  token?: string
}

/**
 * type for update Password
 */
 export type TupdatePassword = {
  currentPassword: string
  password_confirmation: string
  password: string
  token?: string
}
