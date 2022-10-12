import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import { LinkPrimary } from '@atoms/links/link-primary/link-primary'
import Title from '@atoms/title/title'
import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import { TitleState } from '@atoms/title/title-stat/title-stat'
import InputFull from '@molecules/inputs/input-full'
import { SectionMenuSideLeftProfil } from '@organisms/section-menu-side-left-profil/menu-side-left-profil'
import { Store } from '@store/store'
import React from 'react'

function ProfilPage() {
  const user = Store.user.useUserCurrent()
  return (
    <main>
      <TitlePagePrivate>Mon compte</TitlePagePrivate>
      <div className='flex mt-8'>
      <SectionMenuSideLeftProfil />
      <section className='w-full px-8'>
        <TitleState>Mes informations</TitleState>
        <article className=' border-2 border-black w-fit p-6 mt-12 rounded-lg'>
            <LabelPrimary>Nom: </LabelPrimary>
            <InputFull placeholder='' value={user.name} setValueInput={undefined} addClass='bg-input_color mb-4'></InputFull>
            <LabelPrimary>Email: </LabelPrimary>
            <InputFull placeholder='' value={user.email} setValueInput={undefined} addClass='bg-input_color'></InputFull>
        </article>
      </section>
      </div>
    </main>
  )
}

export default ProfilPage
