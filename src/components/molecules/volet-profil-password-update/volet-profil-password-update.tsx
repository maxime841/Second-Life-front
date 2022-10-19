import { Btn } from '@atoms/btns/btn'
import { TitleState } from '@atoms/title/title-stat/title-stat'
import React, { useState } from 'react'
import FormUpdatePassword from '@molecules/forms/form-update-password/form-update-password'

export function VoletDetailProfilPasswordUpdate() {
  const [openMorePasswordUpdate, setOpenMorePasswordUpdate] = useState(false)

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
          <FormUpdatePassword />
        </div>
      )
      : null}
    </section>
  )
}
