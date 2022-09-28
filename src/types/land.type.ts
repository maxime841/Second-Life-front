/**
 * type for all lands
 */
export interface ILand {
  id?: number
  name?: string
  owner?: string
  presentation?: string
  descriptions?: string
  groups?: string
  prims?: number
  remaining_prims?: number
  date_buy?: Date
}

/**
 * type for response one land
 */
export interface ILandResponse {
  land: ILand
}

/**
 * type for response all lands
 */
export interface ILandsResponse {
  lands?: ILand[]
}
