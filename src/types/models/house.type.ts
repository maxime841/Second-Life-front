import { IPicture } from './picture.type'

/**
 * type for all houses
 */
export interface IHouse {
  id?: number
  name?: string
  owner?: string
  presentation?: string
  prims?: number
  remaining_house_prims?: number
  date_start_rent?: Date
  date_end_rent?: Date
  picture_favoris?: IPicture
  pictures?: IPicture[]
}

/**
 * type for response one house
 */
export interface IHouseResponse {
  house: IHouse
}

/**
 * type for response all houses
 */
export interface IHousesResponse {
  houses: IHouse[]
}
