import { Irole } from './role.model'

/**
 * interface user
 */
export interface Iuser {
  id?: number
  name?: string
  email?: string
  avatar?: string
  email_verified_at?: string
  role?: Irole
}

/**
 * interface logout user current
 */
export interface IuserLogout {
  authenticated?: boolean
}
