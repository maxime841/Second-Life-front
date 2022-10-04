import { useEffect, useState } from 'react'
import { ClubPanelStore } from './club-panel.store'

export const ClubPanelHook = {
  /**
   * hook for observable clubPanelClicked$
   */
  useClubPanel: () => {
    const [clubPanel, setClubPanel] = useState(false)

    useEffect(() => {
      ClubPanelStore.clubPanelClicked$.subscribe(
        (value: boolean) => setClubPanel(value)
      )
    }, [])

    return clubPanel
  }
}
