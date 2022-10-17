import { Btn } from '@atoms/btns/btn'
import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import { TitleState } from '@atoms/title/title-stat/title-stat'
import { InputFull } from '@atoms/inputs/input-full'
import { Store } from '@store/store'
import React, { useState } from 'react'
import { TvoletDetailUser } from './volet-detail-profil-update.type'

export function VoletDetailProfilUpdate({ userCurrent }: TvoletDetailUser) {
  const user = Store.user.useUserCurrent()
  const [openMoreProfilUpdate, setOpenMoreProfilUpdate] = useState(false)
  const [setName] = useState('')
  const [newName, setNewName] = useState('')
  const [setEmail] = useState('')
  const [newEmail, setNewEmail] = useState('')

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
          <LabelPrimary>Mon pseudo: </LabelPrimary>
          <InputFull placeholder='' value={user.name} setValueInput={setName} addClass='bg-input_color dark:bg-fond-dark-cards mb-4' />
          <LabelPrimary>Mon nouveau pseudo: </LabelPrimary>
          <InputFull
            placeholder=''
            value={newName}
            setValueInput={setNewName}
            addClass='bg-input_color dark:bg-fond-dark-cards mb-12'
          />
          <LabelPrimary>Mon Email: </LabelPrimary>
          <InputFull placeholder='' value={user.email} setValueInput={setEmail} addClass='bg-input_color dark:bg-fond-dark-cards mb-4' />
          <LabelPrimary>Mon nouveau Email: </LabelPrimary>
          <InputFull
            placeholder=''
            value={newEmail}
            setValueInput={setNewEmail}
            addClass='bg-input_color dark:bg-fond-dark-cards mb-12'
          />
          <Btn>Sauvegarder</Btn>
        </div>
      </div>
      </div>
      )
      : null}
    </section>
  )
}
