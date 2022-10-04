/**
 * type for all clubs
 */
export interface IClub {
  id?: number
  name?: string
  owner?: string
  pictures?: string
  picture_url?: string
  favori?: string
  picurable_id?: number
  picturable_type?: string
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
