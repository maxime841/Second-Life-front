import { BehaviorSubject } from 'rxjs'

export const LandStore = {
  /**
   * list of land via api
   * @type array
   */
  land$: new BehaviorSubject([])
}
