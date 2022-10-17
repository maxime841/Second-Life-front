import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import { CardProfil } from '@molecules/cards/card-profil/card-profil'
import React from 'react'

function ProfilPage() {
  return (
    <section className='w-full px-8 mt-8'>
      <TitlePagePrivate>Mon compte</TitlePagePrivate>
      <CardProfil />
        </section>
  )
}

export default ProfilPage
