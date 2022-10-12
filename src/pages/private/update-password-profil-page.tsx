import { Btn } from '@atoms/btns/btn'
import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import { LinkPrimary } from '@atoms/links/link-primary/link-primary'
import Title from '@atoms/title/title'
import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import { TitleState } from '@atoms/title/title-stat/title-stat'
import InputFull from '@molecules/inputs/input-full'
import { SectionMenuSideLeftProfil } from '@organisms/section-menu-side-left-profil/menu-side-left-profil'
import React from 'react'

function ProfilUpdatePasswordPage() {
  return (
    <main>
      <TitlePagePrivate>Mon compte</TitlePagePrivate>
      <div className='flex mt-8'>
      <SectionMenuSideLeftProfil />
      <section className='w-full px-8 border-2 border-black w-fit p-6 mt-12 ml-12 rounded-lg'>
        <TitleState>Modifier mon mot de passe</TitleState>
        <article>
            <LabelPrimary>Mon ancien mot de passe</LabelPrimary>
            <InputFull value={''} placeholder={''} setValueInput={undefined} addClass='bg-input_color dark:bg-fond-dark-cards mb-4'></InputFull>
            <LabelPrimary>Mon nouveau mot de passe</LabelPrimary>
            <InputFull value={''} placeholder={''} setValueInput={undefined} addClass='bg-input_color dark:bg-fond-dark-cards mb-12'></InputFull>
            <Btn>Valider</Btn>
        </article>
      </section>
      </div>
    </main>
  )
}

export default ProfilUpdatePasswordPage
