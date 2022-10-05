/**
 * type for all clubs
 */
export interface IClub {
  id?: number
  name?: string
  owner?: string
  picture?: {}
  pictures?: [{
    name: string
    picture_url: string
    favori?: boolean
    picturable_id?: number
    picturable_type?: string
  }]
  parties?: [{
    name: string
    owner: string
    date_party?: Date
    pictures?: []
  }]
  club?: IClub
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
