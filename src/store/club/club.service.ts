import { http } from '@config-app/http/http.instance'
import { IClubsResponse, IClubResponse } from '@types-app/club.type'
import { ClubStore } from './club.store'

export const ClubService = {
  /**
   * get all clubs
   */
  getAllClubs: async () => {
    const res = await http.get<IClubsResponse>('club') // ici on a response
    ClubStore.clubs$.next([...res.data.clubs!])
  },

  /**
   * get one club via id
   * @param id string
   */
  getClub: async (id: number) => {
    const res = await http.get<IClubResponse>(`club/${id}`)
    ClubStore.clubSelected$.next({ ...res.data.club })
  },
}
