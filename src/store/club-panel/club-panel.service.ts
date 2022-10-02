import { ClubPanelStore } from './club-panel.store'

export const ClubPanelService = {
  toggleStateClubPanel: (value: boolean) => {
    ClubPanelStore.clubPanelClicked$.next(!value)
  },

  closeStateClubPanel: () => {
    ClubPanelStore.clubPanelClicked$.next(false)
  }
}
