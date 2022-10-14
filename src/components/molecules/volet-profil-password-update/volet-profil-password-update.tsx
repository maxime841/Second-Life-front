import { Btn } from '@atoms/btns/btn'
import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import InputFull from '@molecules/inputs/input-full'
import { Store } from '@store/store'
import React, { useState } from 'react'
import { TvoletDetailUser } from './volet-profil-password-update.type'

export function VoletDetailProfilPasswordUpdate({ userCurrent }: TvoletDetailUser) {
  const user = Store.user.useUserCurrent()
  const [openMorePasswordUpdate, setOpenMorePasswordUpdate] = useState(false)
  const [value, setValue] = useState('')

  const handlerClickOpenDetailPasswordUpdate = () => {
    setOpenMorePasswordUpdate(!openMorePasswordUpdate)
  }

  return (
    <section className='py-8'>
        <Btn addClass='mx-4' click={handlerClickOpenDetailPasswordUpdate}>
          {openMorePasswordUpdate ? 'Fermer' : 'Modifier le mot de passe'}
        </Btn>
        {/* detail profil update */}
      {openMorePasswordUpdate ? (
        <div className='px-2 md:px-8 mt-8'>
          {/* modification profil */}
          <div>
            <h4 className='font-bold text-lg md:text-2xl mb-2'>
              Modification du mot de passe
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
