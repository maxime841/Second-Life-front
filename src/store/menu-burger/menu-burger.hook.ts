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
  }
}
