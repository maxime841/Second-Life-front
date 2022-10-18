import { Btn } from '@atoms/btns/btn'
import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import { TitleState } from '@atoms/title/title-stat/title-stat'
import { InputFull } from '@atoms/inputs/input-full'
import { Store } from '@store/store'
import React, { useState } from 'react'
import { TvoletDetailUser } from './volet-profil-password-update.type'
import FormResetPassword from '@molecules/forms/form-reset-password/form-reset-password'

export function VoletDetailProfilPasswordUpdate({ userCurrent }: TvoletDetailUser) {
  const [openMorePasswordUpdate, setOpenMorePasswordUpdate] = useState(false)
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const handlerClickOpenDetailPasswordUpdate = () => {
    setOpenMorePasswordUpdate(!openMorePasswordUpdate)
  }

  return (
    <section className='py-8'>
        <Btn addClass='sm:mx-2 md:mx-4' click={handlerClickOpenDetailPasswordUpdate}>
          {openMorePasswordUpdate ? 'Fermer' : 'Modifier password'}
        </Btn>
        {/* detail profil update */}
      {openMorePasswordUpdate ? (
        <div className='px-2 border-2 border-black w-fit p-6 mt-6 mx-2 rounded-lg'>
          {/* modification profil */}
          <TitleState>Modifier mon mot de passe</TitleState>
          <FormResetPassword />
        </div>
      )
      : null}
    </section>
  )
}
