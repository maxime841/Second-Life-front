import { IClub } from '@types-app/club.type'
import { useEffect, useState } from 'react'
import { map } from 'rxjs'
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
  },

  /**
   * hook for get number of partie of all club
   */
  useNbrPartieOfAllClub: () => {
    const [nbrParti, setNbrParti] = useState(0)
    const [nbrDj, setNbrDj] = useState(0)
    const [nbrDancer, setNbrDancer] = useState(0)

    useEffect(() => {
      async function getClubs() {
        await ClubService.getAllClubs()
      }
      ClubStore.clubs$
        .pipe(
          map(clubs => {
            let nbP = 0
            let nbD = 0
            let nbDan = 0
            clubs.forEach(club => {
              nbP += club.parties?.length!
              nbD += club.djs?.length!
              nbDan += club.dancers?.length!
            })
            return { nbP, nbD, nbDan }
          }),
        )
        .subscribe(values => {
          setNbrParti(values.nbP)
          setNbrDj(values.nbD)
          setNbrDancer(values.nbDan)
        })

      getClubs()
    }, [])

    return { nbrParti, nbrDj, nbrDancer }
  },
}
