/**
 * type for all clubs
 */
export interface IClub {
  id?: number
  name?: string
  owner?: string
  presentation?: string
  picture?: IPictureClubFavori
  pictures?: IPicturesClub
  parties?: [IParties]
  club?: IClub
}

/**
 * type for display picture favori of club
 */
export interface IPictureClubFavori {
  id?: number
  name?: string
  picture_url?: string
  favori?: boolean
  picturable_id?: number
  picturable_type?: string
}

/**
 * type for all picture of clubs
 */
 export interface IPicturesClub {
  id?: number
  name?: string
  picture_url?: string
  favori?: boolean
  picturable_id?: number
  picturable_type?: string
}

/**
 * type for all parties of clubs
 */
 export interface IParties {
  id?: number
  name?: string
  owner?: string
  date_party?: Date
  picture_favoris?: IPicturePartieFavori
  pictures?: [IPicturesParties]
}

 /**
   * type for display picture favori of parties
   */
  export interface IPicturePartieFavori {
    id?: number
    name?: string
    picture_url?: string
    favori?: boolean
    picturable_id?: number
    picturable_type?: string
  }

  /**
 * type for all picture of parties of club
 */
   export interface IPicturesParties {
    id?: number
    name?: string
    picture_url?: string
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
