import { IParties } from './models/parties.type'
import { IPicture } from './models/picture.type'

/**
 * type for all clubs
 */
export interface IClub {
  id?: number
  name?: string
  owner?: string
  created_at?: Date
  updated_at?: Date
  presentation?: string
  picture?: IPicture
  pictures?: IPicture[]
  parties?: IParties[]
}

/**
 * type for response one club
 */
export interface IClubResponse {
  club: IClub
}

/**
 * type for response all clubs
 */
export interface IClubsResponse {
  clubs?: IClub[]
}
