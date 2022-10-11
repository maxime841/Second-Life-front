import { Store } from '@store/store'
import { IHouse } from '@types-app/house.type'
import { useEffect, useState } from 'react'
import { map, max } from 'rxjs'
import { HouseService } from './house.service'
import { HouseStore } from './houses.store'

export const HouseHook = {
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
  },

  useHouseAverageRentalPrice: () => {
    const [mean, setMean] = useState(0)
    const [high, setHigh] = useState(0)
    const [low, setLow] = useState(0)

    const [meanTime, setMeanTime] = useState(0)
    const [highTime, setHighTime] = useState(0)
    const [lowTime, setLowTime] = useState(0)

    useEffect(() => {
      async function call() {
        await Store.house.getAllHouses()
      }

      // calculate price mean
      Store.house.houses$
        .pipe(
          map(houses => {
            const prims = houses.map(house => house.prims!)
            return prims
          }),
        )
        .subscribe(prims => {
          let meanPrim = 0
          prims.forEach(prim => (meanPrim += prim))
          setMean(meanPrim / prims.length)
          setHigh(Math.max(...prims))
          setLow(Math.min(...prims))
        })

      // calculate time mean
      Store.house.houses$
        .pipe(
          map(houses => {
            let timeMean = 0
            const times = houses.map(house => {
              return (
                new Date(house.date_end_rent!).getTime() / 86400000 -
                new Date(house.date_start_rent!).getTime() / 86400000
              )
            })
            times.forEach(time => (timeMean += time))
            const meanTime = timeMean / times.length
            const lowTime = Math.min(...times)
            const highTime = Math.max(...times)

            return { meanTime, lowTime, highTime }
          }),
        )
        .subscribe(values => {
          setMeanTime(values.meanTime)
          setHighTime(values.highTime)
          setLowTime(values.lowTime)
        })

      call()
    }, [])

    return { low, high, mean, lowTime, highTime, meanTime }
  },
}
