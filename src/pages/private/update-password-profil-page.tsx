import { Btn } from '@atoms/btns/btn'
import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import { TitleState } from '@atoms/title/title-stat/title-stat'
import InputFull from '@molecules/inputs/input-full'
import { SectionMenuSideLeftProfil } from '@organisms/section-menu-side-left-profil/menu-side-left-profil'
import { Store } from '@store/store'
import React, { useState } from 'react'

function ProfilUpdatePasswordPage() {
  const [password, setPassword] = useState()
  const [newPassword, setNewPassword] = useState()
  console.log('lettre tapée', password)
  console.log('lettre tapée', newPassword)
  return (
    <main>
      <TitlePagePrivate>Mon compte</TitlePagePrivate>
      <div className='flex mt-8'>
      <SectionMenuSideLeftProfil />
      <section className='w-full px-8 border-2 border-black w-fit p-6 mt-12 ml-12 rounded-lg'>
        <TitleState>Modifier mon mot de passe</TitleState>
        <article>
            <LabelPrimary>Mon ancien mot de passe</LabelPrimary>
            <InputFull type='password' value={password} placeholder={'Taper votre mot de passe'} setValueInput={setPassword} addClass='bg-input_color dark:bg-fond-dark-cards mb-4' />
            <LabelPrimary>Mon nouveau mot de passe</LabelPrimary>
            <InputFull type='password' value={newPassword} placeholder={'Taper votre nouveau mot de passe'} setValueInput={setNewPassword} addClass='bg-input_color dark:bg-fond-dark-cards mb-12' />
            <Btn click={() => Store.user.useResetPassword()}>Valider</Btn>
        </article>
      </section>
      </div>
    </main>
  )
}

export default ProfilUpdatePasswordPage
