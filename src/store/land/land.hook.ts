import { TLand } from '@types-app/land.type'
import { useEffect, useState } from 'react'
import { LandService } from './land.service'
import { LandStore } from './land.store'

export const LandHook = {
  /**
   * hook for observable land$
   */
  useLand: () => {
    const [lands, setLands] = useState<TLand[]>([])

    useEffect(() => {
      async function getLands() {
        await LandService.getAllLands()
      }
      LandStore.land$.subscribe(value => setLands(value))

      getLands()
    }, [])

    return lands
  },
}
