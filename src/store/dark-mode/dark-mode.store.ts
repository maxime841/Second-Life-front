import { BehaviorSubject } from 'rxjs'

export const DarkModeStore = {
  /**
   * indication on darkmode activate or not activate
   * @type boolean
   */
  darkModeActivate$: new BehaviorSubject<boolean>(
    localStorage.getItem('color-theme') === 'dark'
  )
}
