/**
 * type for all clubs
 */
export interface IClub {
  id?: number
  name?: string
  owner?: string
  picture?: {}
  club?: IClub
  parties?: IParties
}

/**
 * type for all parties of clubs
 */
 export interface IParties {
  name: string
  owner: string
  date_party?: Date
  pictures: IPictures
}

/**
 * type for all picture of clubs
 */
  export interface IPictures {
    name: string
    picture_url: string
    favori?: boolean
    picturable_id?: number
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
