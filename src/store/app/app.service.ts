import { AppStore } from './app.store'

export const AppService = {
  toggleStateMenuDropdownLand: (value: boolean) => {
    AppStore.stateMenuDropdownLand$.next(!value)
  },

  closeStateMenuDropdownLand: () => {
    AppStore.stateMenuDropdownLand$.next(false)
  }
}
