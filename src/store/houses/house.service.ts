import { http } from '@config-app/http/http.instance'
import { IHouseResponse } from '@types-app/house.type'
import { HouseStore } from './houses.store'

export const HouseService = {

  /* getAllHouses: async () => {
    const res = await http.get<IHousesResponse>()
    HouseStore.houses$.next([...res.data.houses!])
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
