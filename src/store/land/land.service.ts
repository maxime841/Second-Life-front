import { http } from '@config-app/http/http.instance'
import { TlandsResponse } from '@types-app/land.type'
import { LandStore } from './land.store'

export const LandService = {
  getAllLands: async () => {
    const res = await http.get<TlandsResponse>('lands')
    LandStore.land$.next([...res.data.lands!])
  }
}
