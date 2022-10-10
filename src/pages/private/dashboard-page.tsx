import { ContainerPrimary } from '@atoms/containers/container-primary/container-primary'
import { EmodelContainer } from '@atoms/containers/container-primary/container-primary.type'
import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import LinkBtn from '@atoms/links/link-btn'
import { TitleState } from '@atoms/title/title-stat/title-stat'
import { Store } from '@store/store'
import React from 'react'

export function DashboardPage() {
  return (
    <section>
      <p>DashboardPage</p>
      <ContainerPrimary model={EmodelContainer.m}>
        <TitleState>Coucou</TitleState>
        <div className='my-4'></div>
        <LabelPrimary value='15'>Nombre de land : </LabelPrimary>
        <LabelPrimary value='haimezjohn@gmail.com'>Email : </LabelPrimary>
      </ContainerPrimary>
      <LinkBtn click={Store.user.logout} link='/login'>
        Se déconnecter
      </LinkBtn>
    </section>
  )
}
