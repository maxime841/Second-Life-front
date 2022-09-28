import { TLand } from '@types-app/land.type'
import { useEffect, useState } from 'react'
import { LandStore } from './land.store'

export const LandHook = {
  /**
   * hook for observable land$
   */
  useLand: () => {
    const [lands, setLands] = useState([] as TLand)

    useEffect(() => {
      LandStore.land$.subscribe(
        (value: any) => setLands(value)
      )
    }, [])
    return lands
  }
}
