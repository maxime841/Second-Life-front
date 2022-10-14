import { Btn } from '@atoms/btns/btn'
import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import { LinkPrimary } from '@atoms/links/link-primary/link-primary'
import Title from '@atoms/title/title'
import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import { TitleState } from '@atoms/title/title-stat/title-stat'
import { CardProfil } from '@molecules/cards/card-profil/card-profil'
import { FormUploadAvatar } from '@molecules/forms/form-upload-avatar/form-upload-avatar'
import InputFull from '@molecules/inputs/input-full'
import { Store } from '@store/store'
import React from 'react'

function ProfilPage() {
  const user = Store.user.useUserCurrent()
  return (
    <section className='w-full px-8 mt-8'>
      <TitlePagePrivate>Mon compte</TitlePagePrivate>
      <CardProfil />
        </section>
  )
}

export default ProfilPage
