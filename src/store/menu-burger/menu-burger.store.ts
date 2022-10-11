import { BehaviorSubject } from 'rxjs'

export const MenuBurgerStore = {
  /**
   * indication on menuBurger activate on mobile or not activate tablet and pc
   * @type boolean
   */
  menuBurger$: new BehaviorSubject(false),

  /**
   * indication on menuBurger office activate on mobile or not activate tablet and pc
   * @type boolean
   */
   menuBurgerOffice$: new BehaviorSubject(false)
}
