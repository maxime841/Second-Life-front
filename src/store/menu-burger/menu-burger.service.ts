import { MenuBurgerStore } from './menu-burger.store'

export const MenuBurgerService = {
  toggleStateMenuBurger: (value: boolean) => {
    MenuBurgerStore.menuBurger$.next(!value)
  },

  closeStateMenuBurger: () => {
    MenuBurgerStore.menuBurger$.next(false)
  },

  toggleStateMenuBurgerOffice: (value: boolean) => {
    MenuBurgerStore.menuBurgerOffice$.next(!value)
  },

  closeStateMenuBurgerOffice: () => {
    MenuBurgerStore.menuBurgerOffice$.next(false)
  }
}
