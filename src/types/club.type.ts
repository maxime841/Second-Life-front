/**
 * type for all clubs
 */
export interface IClub {
  id?: number
  name?: string
  owner?: string
  presentation?: string
  pictures?: IPictures[]
  club?: IClub
  parties?: IParties
}

/**
 * type for all parties of clubs
 */
 export interface IParties {
  id?: number
  name: string
  owner: string
  date_party?: Date
  pictures: IPictures[]
}

/**
 * type for all picture of clubs
 */
  export interface IPictures {
    id?: number
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
