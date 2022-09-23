import { useEffect, useState } from 'react'
import { DarkModeStore } from './dark-mode.store'

export const DarkModeHook = {
  /**
   * hook for observable darkModeActivate$
   */
  useDarkModeActivate: () => {
    const [darkModeActivate, setDarkModeActivate] = useState<boolean>(false)

    useEffect(() => {
      DarkModeStore.darkModeActivate$.subscribe(
        (value: boolean) => setDarkModeActivate(value)
      )
    }, [])

    return darkModeActivate
  }
}
