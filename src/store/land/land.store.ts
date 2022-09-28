import { BehaviorSubject } from 'rxjs'
import { TLand } from '@types-app/land.type'

export const LandStore = {
  /**
   * list of land via api
   * @type array de type TLand[]
   */
  land$: new BehaviorSubject<TLand[]>([]),
}
