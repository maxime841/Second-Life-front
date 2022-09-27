/**
 * type for all lands
 */
export interface TLand {
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

export interface TlandsResponse {
  lands?: TLand[]
}
