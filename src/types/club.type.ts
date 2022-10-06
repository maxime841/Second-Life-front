import { IPicture } from './models/picture.type'

/**
 * type for all clubs
 */
export interface IClub {
  id?: number
  name?: string
  owner?: string
  presentation?: string
  picture?: IPicture
  pictures?: IPicture[]
  parties?: IParties[]
}

/**
 * type for all parties of clubs
 */
export interface IParties {
  id?: number
  name?: string
  owner?: string
  date_party?: Date
  picture_favoris?: IPicture
  pictures?: IPicture[]
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
