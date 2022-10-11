import { useEffect, useState } from 'react'
import { MenuBurgerStore } from './menu-burger.store'

export const MenuBurgerHook = {
  /**
   * hook for observable burgerMenu$
   */
  useBurgerMenu: () => {
    const [menuBurger, setBurgerMenu] = useState(false)

    useEffect(() => {
      MenuBurgerStore.menuBurger$.subscribe(
        (value: boolean) => setBurgerMenu(value)
      )
    }, [])

    return menuBurger
  },

  /**
   * hook for observable burgerMenu$
   */
   useBurgerMenuOffice: () => {
    const [menuBurgerOffice, setBurgerMenuOffice] = useState(false)

    useEffect(() => {
      MenuBurgerStore.menuBurgerOffice$.subscribe(
        (value: boolean) => setBurgerMenuOffice(value)
      )
    }, [])

    return menuBurgerOffice
  }
}
