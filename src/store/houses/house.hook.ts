import { IHouse } from '@types-app/house.type'
import { useEffect, useState } from 'react'
import { HouseService } from './house.service'
import { HouseStore } from './houses.store'

export const HouseHook = {
  /**
   * hook for observable houses$
   */
  /* useHouses: () => {
    const [houses, setHouses] = useState<IHouse[]>([])

    useEffect(() => {
      async function getHouses() {
        await HouseService.getAllHouses()
      }
      HouseStore.houses$.subscribe(value => setHouses(value))

      getHouses()
    }, [])

    return houses
  }, */
  /**
   * hook for observable houseCardClicked$
   * @param id: string
   */
  useHouse: (id: string) => {
    const [house, setHouse] = useState<IHouse>({})

    useEffect(() => {
      // execute call
      async function getHouse() {
        await HouseService.getHouse(id)
      }

      // affect observable
      HouseStore.houseCardClicked$.subscribe(value => setHouse(value))

      getHouse()
    }, [id])

    // return variable hook
    return house
  }
}
