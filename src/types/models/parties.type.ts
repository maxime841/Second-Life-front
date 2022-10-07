import { IPicture } from './picture.type'

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
