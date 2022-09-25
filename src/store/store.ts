import { AppHook } from './app/app.hook'
import { AppService } from './app/app.service'
import { AppStore } from './app/app.store'
import { DarkModeHook } from './dark-mode/dark-mode.hook'
import { DarkModeService } from './dark-mode/dark-mode.service'
import { DarkModeStore } from './dark-mode/dark-mode.store'
import { MenuBurgerHook } from './menu-burger/menu-burger.hook'
import { MenuBurgerService } from './menu-burger/menu-burger.service'
import { MenuBurgerStore } from './menu-burger/menu-burger.store'
import { OutSideClickHook } from './outside-cLick/outside-click.hook'
import { TokenHook } from './token/token.hook'
import { TokenService } from './token/token.service'
import { TokenStore } from './token/token.store'

export const Store = {
  menuBurger: {
    ...MenuBurgerStore,
    ...MenuBurgerService,
    ...MenuBurgerHook
  },
  darkmode: {
    ...DarkModeStore,
    ...DarkModeService,
    ...DarkModeHook
  },
  token: {
    ...TokenStore,
    ...TokenService,
    ...TokenHook
  },
  outsideClick: {
    ...OutSideClickHook
  },
  app: {
    ...AppStore,
    ...AppService,
    ...AppHook
  }
}
