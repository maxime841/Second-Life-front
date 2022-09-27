import { AxiosError } from 'axios'
import { BehaviorSubject } from 'rxjs'
import { AppStore } from './app.store'

export const AppService = {
  toggleStateMenuDropdownLand: (value: boolean) => {
    AppStore.stateMenuDropdownLand$.next(!value)
  },

  closeStateMenuDropdownLand: () => {
    AppStore.stateMenuDropdownLand$.next(false)
  },

  /**
   * create error for all observable
   * @param observable BehaviorSubject<string>
   * @param error any
   * @param value? string
   */
  errorMessage: (
    observable: BehaviorSubject<string>,
    error: any,
    value?: string,
  ) => {
    if (error instanceof AxiosError) {
      const { message, statusCode } = error.response?.data
      if (statusCode !== 200 || statusCode !== 201) {
        observable.next(value ?? message)
      }
    }
  },
}
