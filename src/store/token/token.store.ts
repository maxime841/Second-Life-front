import { BehaviorSubject } from 'rxjs'

export const TokenStore = {
  /**
    * observable of token
    */
  token$: new BehaviorSubject('')
}
