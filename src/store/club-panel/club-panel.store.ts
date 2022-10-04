import { BehaviorSubject } from 'rxjs'

export const ClubPanelStore = {
  /**
   * indication if user clicked on button card club
   * @type boolean
   */
  clubPanelClicked$: new BehaviorSubject(false),
}
