import { IClub } from '@types-app/club.type'
import { useEffect, useState } from 'react'
import { ClubService } from './club.service'
import { ClubStore } from './club.store'

export const ClubHook = {
  /**
   * hook for observable clubs$
   */
  useClubs: () => {
    const [clubs, setClubs] = useState<IClub[]>([])

    useEffect(() => {
      async function getClubs() {
        await ClubService.getAllClubs()
      }
      ClubStore.clubs$.subscribe(value => setClubs(value))

      getClubs()
    }, [])

    return clubs
  },
  /**
   * hook for observable clubSelected$
   * @param id: string
   */
  useClub: (id: number) => {
    const [club, setClub] = useState<IClub>({})

    useEffect(() => {
      // execute call
      async function getClub() {
        await ClubService.getClub(id)
      }

      // afect observable
      ClubStore.clubSelected$.subscribe(value => setClub(value))

      getClub()
    }, [id])

    // return variable hook
    return club
  }
}
