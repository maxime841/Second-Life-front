import { Btn } from '@atoms/btns/btn'
import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import { TitleState } from '@atoms/title/title-stat/title-stat'
import { InputFull } from '@atoms/inputs/input-full'
import { Store } from '@store/store'
import React, { useEffect, useState } from 'react'
import { TvoletDetailUser } from './volet-detail-profil-update.type'
import { FormUpdateProfil } from '@molecules/forms/form-update-profil/form-update-profil'

export function VoletDetailProfilUpdate({ userCurrent }: TvoletDetailUser) {
  const [openMoreProfilUpdate, setOpenMoreProfilUpdate] = useState(false)

  const handlerClickOpenDetailProfilUpdate = () => {
    setOpenMoreProfilUpdate(!openMoreProfilUpdate)
  }

  return (
    <section className='py-8'>
      {/* btn for see update profil */}
      <Btn addClass='mx-4' click={handlerClickOpenDetailProfilUpdate}>
        {openMoreProfilUpdate ? 'Fermer' : 'Modifier le profil'}
      </Btn>
      {/* detail profil update */}
      {openMoreProfilUpdate ? (
        <div className='px-2 md:px-8 mt-8'>
          {/* modification profil */}
          <div className='flex mt-8'>
            <div className='px-2 border-2 border-black w-fit p-6 mt-6 mx-2 rounded-lg'>
              <TitleState>Modifier mon compte</TitleState>
              <FormUpdateProfil />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
