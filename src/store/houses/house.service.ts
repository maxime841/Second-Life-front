import { http } from '@config-app/http/http.instance'
import { Store } from '@store/store'
import { IHouseResponse, IHousesResponse } from '@types-app/models/house.type'
import { Eroute } from '@types-app/route.type'
import { HouseStore } from './houses.store'

export const HouseService = {
  /**
   * recover all house
   */
  getAllHouses: async () => {
    const res = await http.get<IHousesResponse>(Eroute.GET_ALL_HOUSE)
    Store.house.houses$.next([...res.data.houses!])
  },

  /**
   * get one house via id when user click house card
   * @param id string
   */
  getHouse: async (id: string) => {
    const res = await http.get<IHouseResponse>(`house/${id}`)
    HouseStore.houseCardClicked$.next({ ...res.data.house })
  },
}
