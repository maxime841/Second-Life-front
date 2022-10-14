import { Btn } from '@atoms/btns/btn'
import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import InputFull from '@molecules/inputs/input-full'
import { Store } from '@store/store'
import React, { useState } from 'react'
import { TvoletDetailUser } from './volet-profil-delete.type'

export function VoletDetailProfilDelete({ userCurrent }: TvoletDetailUser) {
  const user = Store.user.useUserCurrent()
  const [openMoreProfilDelete, setOpenMoreProfilDelete] = useState(false)
  const [value, setValue] = useState('')

  const handlerClickOpenDetailProfilDelete = () => {
    setOpenMoreProfilDelete(!openMoreProfilDelete)
  }

  return (
    <section className='py-8'>
        <Btn addClass='mx-4' click={handlerClickOpenDetailProfilDelete}>
          {openMoreProfilDelete ? 'Fermer' : 'Supprimer le profil'}
        </Btn>
        {/* detail profil update */}
      {openMoreProfilDelete ? (
        <div className='px-2 md:px-8 mt-8'>
          {/* modification profil */}
          <div>
            <h4 className='font-bold text-lg md:text-2xl mb-2'>
              Suppression du profil
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
