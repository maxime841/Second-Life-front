import { MenuBurgerStore } from './menu-burger.store'

export const MenuBurgerService = {
  toggleStateMenuBurger: (value: boolean) => {
    MenuBurgerStore.menuBurger$.next(!value)
  },

  closeStateMenuBurger: () => {
    MenuBurgerStore.menuBurger$.next(false)
  }
}
