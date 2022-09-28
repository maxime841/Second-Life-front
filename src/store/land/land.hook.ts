import { http } from '@config-app/http/http.instance'
import { TLand, TlandsResponse } from '@types-app/land.type'
import { useEffect, useState } from 'react'
import { LandStore } from './land.store'

export const LandHook = {
  /**
   * hook for observable land$
   */
  useLand: () => {
    const [lands, setLands] = useState<TLand[]>([])

    useEffect(() => {
      const getAllLands = async () => {
        const lands = await http.get<TlandsResponse>('lands')
        LandStore.land$.subscribe(() => setLands([...lands.data.lands!]))
      }

      getAllLands()
    }, [])
    return lands
  }
}
