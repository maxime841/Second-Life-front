import { Idancer } from './dancer.type'
import { Idj } from './dj.type'
import { IParties } from './parties.type'
import { IPicture } from './picture.type'

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
  djs?: Idj[]
  dancers?: Idancer[]
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
