import { Iuser } from './user.model'

/**
 * interface of jwt of server
 */
export interface Ijwt {
  access_token?: string
  authenticated: boolean
  user?: Iuser
  error_message?: string
}

/**
 * interface for verified token
 */
export interface IjwtVerified {
  authenticated: boolean
  user: Iuser
}
