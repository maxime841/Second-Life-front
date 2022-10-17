import { BehaviorSubject } from 'rxjs'
import { IHouse } from '@types-app/models/house.type'

export const HouseStore = {
  /**
   * list of house via api
   * @type array de type IHouse[]
   */
  houses$: new BehaviorSubject<IHouse[]>([]),

  /**
   * house card clicked
   * @type IHouse
   */
  houseCardClicked$: new BehaviorSubject<IHouse>({}),
}
