import { http } from '@config-app/http/http.instance'
import { ILandsResponse, ILandResponse } from '@types-app/models/land.type'
import { LandStore } from './land.store'

export const LandService = {
  /**
   * get all lands
   */
  getAllLands: async () => {
    const res = await http.get<ILandsResponse>('lands') // ici on a response
    LandStore.lands$.next([...res.data.lands!])
  },
  /**
   * get one land via id
   * @param id string
   */
  getLand: async (id: string) => {
    const res = await http.get<ILandResponse>(`land/${id}`)
    LandStore.landSelected$.next({ ...res.data.land })
  },
}
