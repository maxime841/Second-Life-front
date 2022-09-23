import { useEffect, useState } from 'react'
import { AppStore } from './app.store'

export const AppHook = {
  useStateMenuDropdownLand: () => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
      AppStore.stateMenuDropdownLand$.subscribe(value => setOpen(value))
    }, [])

    return open
  }
}
