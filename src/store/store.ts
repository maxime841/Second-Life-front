import { AppHook } from './app/app.hook'
import { AppService } from './app/app.service'
import { AppStore } from './app/app.store'
import { ClubHook } from './club/club.hook'
import { ClubService } from './club/club.service'
import { ClubStore } from './club/club.store'
import { DarkModeHook } from './dark-mode/dark-mode.hook'
import { DarkModeService } from './dark-mode/dark-mode.service'
import { DarkModeStore } from './dark-mode/dark-mode.store'
import { HouseHook } from './houses/house.hook'
import { HouseService } from './houses/house.service'
import { HouseStore } from './houses/houses.store'
import { LandHook } from './land/land.hook'
import { LandService } from './land/land.service'
import { LandStore } from './land/land.store'
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
  },
  land: {
    ...LandStore,
    ...LandService,
    ...LandHook
  },
  house: {
    ...HouseStore,
    ...HouseService,
    ...HouseHook
  },
  club: {
    ...ClubStore,
    ...ClubService,
    ...ClubHook
  }
}
