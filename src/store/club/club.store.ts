import { BehaviorSubject } from 'rxjs'
import { IClub } from '@types-app/club.type'

export const ClubStore = {
  /**
   * list of club via api
   * @type array de type IClub[]
   */
  clubs$: new BehaviorSubject<IClub[]>([]),

  /**
   * club select
   * @type IClub
   */
  clubSelected$: new BehaviorSubject<IClub>({}),
}
