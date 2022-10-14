import { Btn } from '@atoms/btns/btn'
import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import InputFull from '@molecules/inputs/input-full'
import { Store } from '@store/store'
import React, { useState } from 'react'
import { TvoletDetailUser } from './volet-detail-profil-update.type'

export function VoletDetailProfilUpdate({ userCurrent }: TvoletDetailUser) {
  const user = Store.user.useUserCurrent()
  const [openMoreProfilUpdate, setOpenMoreProfilUpdate] = useState(false)
  const [value, setValue] = useState('')

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
          <div>
            <h4 className='font-bold text-lg md:text-2xl mb-2'>
              Modification du profil
            </h4>
            <LabelPrimary>Nom: </LabelPrimary>
            <InputFull value={value} placeholder={''} setValueInput={setValue}></InputFull>
          </div>
        </div>
      )
      : null}
    </section>
  )
}
